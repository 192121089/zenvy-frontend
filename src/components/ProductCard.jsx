import React, { useState } from "react";

const ProductCard = ({ product }) => {
  // ✅ Always treat images as an array
  const images = Array.isArray(product.images) ? product.images : [];
  const [selectedImage, setSelectedImage] = useState(images[0] || "");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Track index for next/prev navigation
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="border rounded-lg shadow p-4 flex flex-col items-center bg-white hover:shadow-2xl transition duration-300">
      {/* Main Product Image */}
      <img
        src={selectedImage || "https://via.placeholder.com/300x300.png?text=No+Image"}
        alt={product.name || "Product"}
        className="w-64 h-64 object-cover mb-4 rounded-lg cursor-pointer"
        onClick={() => openModal(0)} // ✅ open modal starting from first image
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
              onClick={() => openModal(index)} // ✅ open modal at that image
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

      {/* ✅ Modal for Zoom Image with Navigation */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)} // close when clicking outside
        >
          <div
            className="relative bg-white p-4 rounded-lg shadow-lg max-w-4xl w-3/4"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            {/* Zoomed Image */}
            <img
              src={selectedImage}
              alt="Zoomed Product"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            {/* Prev Button */}
            {images.length > 1 && (
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full"
                onClick={prevImage}
              >
                ◀
              </button>
            )}

            {/* Next Button */}
            {images.length > 1 && (
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full"
                onClick={nextImage}
              >
                ▶
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
