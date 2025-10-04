/*import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Products;
*/
/*import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products", {
          withCredentials: false, // ✅ important
        });
        setProducts(res.data);
      } catch (err) {
        console.error("❌ Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Our Products
      </h1>
      {error && (
        <p className="text-center text-red-600 mb-4">{error}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((p) => <ProductCard key={p._id} product={p} />)
        ) : (
          !error && (
            <p className="text-center text-gray-600 col-span-full">
              No products available yet.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Products;*/
/*import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(""); // <-- track errors

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products", {
          withCredentials: false, // important
        });
        setProducts(res.data);
      } catch (err) {
        console.error("❌ Error fetching products:", err);
        // Detailed error logging
        if (err.response) {
          console.error("Response data:", err.response.data);
          console.error("Response status:", err.response.status);
          console.error("Response headers:", err.response.headers);
        } else if (err.request) {
          console.error("Request details:", err.request);
        } else {
          console.error("Error message:", err.message);
        }
        setError("Failed to load products. Please try again later.");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Our Products
      </h1>

      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((p) => <ProductCard key={p._id} product={p} />)
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No products available yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;*/
// frontend/src/pages/Products.jsx
// frontend/src/pages/Products.jsx
/*import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // ✅ Use withCredentials to handle cookies/CORS if needed
        const res = await axios.get("/api/products", { withCredentials: true });
        setProducts(res.data);
        console.log("Products:", res.data);
      } catch (err) {
        console.error("❌ Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <li
            key={product._id}
            className="p-4 bg-white shadow rounded-lg text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="mt-1 font-bold">${product.price || "N/A"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;*/
/*import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products"); // uses proxy
        

        console.log("Fetched products:", res.data); // debug log
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id.toString()} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://zenvy-backend.onrender.com/api/products")
         // uses proxy
        console.log("Fetched products:", res.data); // debug log
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {/* ✅ Notice banner */}
      <div className="w-full bg-blue-200 text-black-900 font-semibold text-center text-lg py-4 px-6 rounded-lg mb-6 shadow-md">
        💬 All product prices are negotiable.  
        📲 Contact us on WhatsApp: <span className="text-blue-700">+91-9789914760</span>  
        for more details.
      </div>

      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id.toString()} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

