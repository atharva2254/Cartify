import ProductCard from "../components/ProductCard";
import api from "../api";
import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  const categories = ["all", "electronics", "beauty", "clothing", "home"];

  useEffect(() => {
    api
      .get("/api/products/view")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log("Error while fetching data!", err);
      });
  }, []);

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#511545] to-[#3a0d34] text-white rounded-xl p-8 mb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Cartify
          </h1>
          <p className="text-lg mb-6">
            Discover amazing products at unbeatable prices.
          </p>
          <button className="bg-[#fbdbde] text-[#511545] px-8 py-3 rounded-lg font-medium hover:bg-[#e8c8cb] transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#575757] mb-6">
          Featured Products
        </h2>

        {/* Category Buttons */}
        <div className="flex gap-4 mb-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-[#511545] transition 
                ${
                  category === cat
                    ? "bg-[#511545] text-white"
                    : "bg-[#fbdbde] hover:bg-[#fbcfe8]"
                }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-[#575757]">
            No products available in this category
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
