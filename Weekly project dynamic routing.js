"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const { id } = params;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading)
    return <div className="text-center mt-20 text-xl font-semibold">Loading...</div>;

  if (error)
    return <div className="text-center mt-20 text-red-600 text-xl">{error}</div>;

  if (!product)
    return <div className="text-center mt-20 text-xl font-semibold">Product not found</div>;

  return (
    <div className="min-h-screen bg-white p-8 rounded shadow max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 object-contain"
        />

        <div>
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-green-600 text-xl font-bold mb-6">${product.price}</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
