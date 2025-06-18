import ProductCard from "../components/ProductCard";
import { Trash2 } from "lucide-react";
import { useState, useEffect } from "react";

const Wishlist = () => {
  // Sample wishlist data
  const [wishlistItems, setCartItems] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist")) || [];
    // Add quantity = 1 for all items initially
    const updatedItems = items.map((item) => ({ ...item }));
    setCartItems(updatedItems);
  }, []);

  // Save cart to localStorage whenever updated
  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("wishlist", JSON.stringify(updatedCart));
  };
  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };
  // const wishlistItems = [
  //   {
  //     id: 1,
  //     name: "Premium Headphones",
  //     price: 199.99,
  //     rating: 4.5,
  //     image: "/placeholder-product.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Wireless Earbuds",
  //     price: 129.99,
  //     rating: 4.2,
  //     image: "/placeholder-product.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Smart Watch",
  //     price: 249.99,
  //     rating: 4.7,
  //     image: "/placeholder-product.jpg",
  //   },
  // ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#575757]">Your Wishlist</h1>
        <span className="text-[#575757]">{wishlistItems.length} items</span>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} isWishlist={true} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto h-24 w-24 text-[#d8c9ae] mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-[#575757] mb-2">
            Your wishlist is empty
          </h3>
          <p className="text-[#575757] mb-6">
            Save items you love for easy access later
          </p>
          <button className="px-6 py-2 bg-[#575757] text-[#d8c9ae] rounded-md hover:bg-[#454545] transition">
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};
export default Wishlist;
