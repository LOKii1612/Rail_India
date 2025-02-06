// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar";
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';
// import TrainList from './components/TrainList';
// import Bookings from './components/Bookings';
// import PrivateRoute from './components/PrivateRoute';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//       <Route path="/trains" element={<PrivateRoute><TrainList /></PrivateRoute>} />
//       <Route path="/bookings" element={<PrivateRoute><Bookings /></PrivateRoute>} />
//     </Routes>
//   );
// }

// export default App;


import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import TrainList from "./components/TrainList";
import Bookings from "./components/Bookings";
import About from "./components/About";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      {/* ✅ Navbar is placed above Routes */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/trains" element={<PrivateRoute><TrainList /></PrivateRoute>} />
        <Route path="/bookings" element={<PrivateRoute><Bookings /></PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;
