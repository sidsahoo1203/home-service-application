import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import About from "./pages/About"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useEffect, useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductTemp from "./components/ProductTemp";


import { ProductProvider } from "./context/ProductContext";
import ProductCard from "./components/ProductCard";

// Inside your App component, wrap everything with the ProductProvider
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ProductProvider>
      <div className="w-screen h-full bg-richblack-900 text-white flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productPage/:id" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <ProductCard />
            </PrivateRoute>
          } />

          <Route path="/temp" element={<Product />} />
        </Routes>
      </div>
    </ProductProvider>
  )
}

export default App;