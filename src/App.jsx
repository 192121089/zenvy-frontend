// frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Logo from "./assets/logo.png"; // Zenvy logo in src/assets

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Zenvy Store" className="h-12 md:h-16" />
          </Link>

          {/* Navbar */}
          <nav className="space-x-4">
            <Link
              to="/"
              className="text-[#4274B9] font-semibold hover:text-blue-800"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-[#4274B9] font-semibold hover:text-blue-800"
            >
              Products
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 mt-6 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white shadow-inner py-4 text-center text-gray-600">
          © {new Date().getFullYear()} Zenvy Store. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
