/*import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover mb-4 rounded"/>
      <h2 className="font-bold text-lg mb-1">{product.name}</h2>
      <p className="text-gray-600 mb-1">{product.category}</p>
      <p className="text-gray-800 font-semibold">
        Price negotiable – Contact: +91-XXXXXXXXXX
      </p>
    </div>
  );
};

export default ProductCard;
*/
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow p-4 flex flex-col items-center bg-white hover:shadow-2xl transition duration-300">
      {/* Product Image */}
      <img
        src={product.image || "https://via.placeholder.com/300x300.png?text=No+Image"}
        alt={product.name}
        className="w-64 h-64 object-cover mb-4 rounded-lg"
      />

      {/* Product Name */}
      <h2 className="font-bold text-lg mb-1 text-blue-800">{product.name}</h2>

      {/* Product Category */}
      <p className="text-gray-600 mb-1 italic">{product.category}</p>

      {/* Product Description */}
      {product.description && (
        <p className="text-gray-700 text-sm mb-2 text-center">
          {product.description}
        </p>
      )}

     
    </div>
  );
};

export default ProductCard;
