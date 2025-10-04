/*import React from "react";
import { Link } from "react-router-dom";

const categories = ["Clothes", "Jewellery", "Accessories"];

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Zenvy Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat}
            to="/products"
            className="border p-6 rounded-lg text-center hover:shadow-lg bg-white"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;*/

import React from "react";
import { Link } from "react-router-dom";

const categories = ["Clothes", "Jewellery", "Accessories"];

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#4274B9] text-white rounded-lg p-12 mb-10 flex flex-col items-center shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Zenvy Collections</h1>
        <p className="text-lg text-center max-w-xl">
          Explore our exclusive collection of clothes, jewellery, and accessories. 
          Quality products, true colors, and negotiable prices – contact us to know more!
        </p>
      </div>

      {/* Categories Section */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat}
            to="/products"
            className="border rounded-lg p-8 text-center bg-white hover:shadow-xl transition duration-300 font-semibold text-[#4274B9]"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
