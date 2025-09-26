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
import React, { useState } from "react";

const ProductCard = ({ product }) => {
  // Always treat images as an array
  const images = Array.isArray(product.images) ? product.images : [];
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  return (
    <div className="border rounded-lg shadow p-4 flex flex-col items-center bg-white hover:shadow-2xl transition duration-300">
      {/* Main Product Image */}
      <img
        src={selectedImage || "https://via.placeholder.com/300x300.png?text=No+Image"}
        alt={product.name || "Product"}
        className="w-64 h-64 object-cover mb-4 rounded-lg"
      />

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 mb-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name || "Product"} ${index + 1}`}
              className={`w-16 h-16 object-cover rounded cursor-pointer border ${
                selectedImage === img ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      )}

      {/* Product Name */}
      <h2 className="font-bold text-lg mb-1 text-blue-800">{product.name || "Unnamed Product"}</h2>

      {/* Product Category */}
      <p className="text-gray-600 mb-1 italic">{product.category || "Uncategorized"}</p>

      {/* Product Description */}
      {product.description && (
        <p className="text-gray-700 text-sm mb-2 text-center">{product.description}</p>
      )}
    </div>
  );
};

export default ProductCard;
