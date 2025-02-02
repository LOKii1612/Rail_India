const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
app.use(express.json());

const SECRET_KEY = process.env.JWT_SECRET;
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

// Middleware for authentication
const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

// Middleware for admin authentication
const authenticateAdmin = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== ADMIN_API_KEY) return res.status(403).json({ message: 'Forbidden' });
  next();
};

// User Registration
app.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await pool.query('INSERT INTO users (username, password, role) VALUES ($1, $2, $3)', [username, hashedPassword, role || 'user']);
  res.status(201).json({ message: 'User registered' });
});

// User Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  if (user.rows.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

  const validPassword = await bcrypt.compare(password, user.rows[0].password);
  if (!validPassword) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.rows[0].id, role: user.rows[0].role }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

// Add Train (Admin Only)
app.post('/trains', authenticateAdmin, async (req, res) => {
  const { name, source, destination, total_seats } = req.body;
  await pool.query('INSERT INTO trains (name, source, destination, available_seats) VALUES ($1, $2, $3, $4)', [name, source, destination, total_seats]);
  res.status(201).json({ message: 'Train added' });
});

// Get Seat Availability
app.get('/trains', async (req, res) => {
  const { source, destination } = req.query;
  const trains = await pool.query('SELECT * FROM trains WHERE source = $1 AND destination = $2', [source, destination]);
  res.json(trains.rows);
});

// Book a Seat
app.post('/book', authenticateUser, async (req, res) => {
    const { train_id } = req.body;
    
    console.log("Booking request for train_id:", train_id); // Debug log
  
    try {
      await pool.query('BEGIN');
      const train = await pool.query('SELECT available_seats FROM trains WHERE id = $1 FOR UPDATE', [train_id]);
  
      console.log("Train Query Result:", train.rows); // Debug log
      
      if (train.rows.length === 0) throw new Error('Train not found');
      if (train.rows[0].available_seats === 0) throw new Error('No seats available');
  
      await pool.query('UPDATE trains SET available_seats = available_seats - 1 WHERE id = $1', [train_id]);
      const booking = await pool.query('INSERT INTO bookings (user_id, train_id) VALUES ($1, $2) RETURNING *', [req.user.id, train_id]);
      await pool.query('COMMIT');
  
      res.status(201).json({ message: 'Seat booked', booking: booking.rows[0] });
    } catch (error) {
      await pool.query('ROLLBACK');
      console.error("Booking error:", error); // Debug log
      res.status(400).json({ message: error.message });
    }
  });
  

// Get Specific Booking Details
app.get('/booking/:id', authenticateUser, async (req, res) => {
  const booking = await pool.query('SELECT * FROM bookings WHERE id = $1 AND user_id = $2', [req.params.id, req.user.id]);
  if (booking.rows.length === 0) return res.status(404).json({ message: 'Booking not found' });
  res.json(booking.rows[0]);
});

//to check whether DB is connected to server
app.get("/test-db", async (req, res) => {
    try {
      const result = await pool.query("SELECT NOW();"); // Simple query to check DB connection
      res.json({ message: "Database connected successfully", timestamp: result.rows[0] });
    } catch (error) {
      console.error("Database connection error:", error);
      res.status(500).json({ error: "Database connection failed" });
    }
  });
  
app.listen(3000, () => console.log('Server running on port 3000'));
