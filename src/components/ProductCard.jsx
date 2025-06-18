import { Heart, Star } from "lucide-react";
import api, { BASE_URL } from "../api";
import { formatPrice } from "../utils/priceformat";

const ProductCard = ({ product, isWishlist = false }) => {
  const addToCart = (productId) => {
    api
      .get(`/api/products/${productId}`)
      .then((res) => {
        let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        cartItems.push(res.data);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        alert("Product added to cart!");
      })
      .catch((err) => console.error(err));
  };
  const addToWishlist = (productId) => {
    api
      .get(`/api/products/${productId}`)
      .then((res) => {
        let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
        wishlistItems.push(res.data);
        localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
        alert("Product added to wishlist!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:max-w-[12rem] md:max-w-[14rem] lg:max-w-[16rem] hover:shadow-lg transition border border-[#eee]">
      <div className="relative aspect-square bg-[#f5f5f5]">
        {/* Product Image */}
        <img
          src={`${BASE_URL}/uploads/${product.imagePath}`}
          alt={product.product_name}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
        {/* Wishlist Button */}
        <button
          onClick={() => addToWishlist(product._id)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-[#f8f5ee] transition"
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlist ? "fill-red-500 text-red-500" : "text-[#575757]"
            }`}
          />
        </button>
      </div>

      <div className="p-4 grid row-auto gap-1">
        <div className="block mb-1">
          <h3 className="font-medium text-[#511545] text-sm sm:text-base">
            {product.product_name}
          </h3>

          {/* <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < 4 ? "fill-[#d8c9ae] text-[#d8c9ae]" : "text-[#d8c9ae]"
                }`}
              />
            ))}
          </div> */}
          {/* Product Description */}
          <p className="text-sm text-[#575757] mb-2 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-bold text-[#511545] text-sm sm:text-base">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addToCart(product._id)}
            className="px-2 py-1 sm:px-3 sm:py-1 bg-[#575757] text-[#d8c9ae] text-xs sm:text-sm rounded hover:bg-[#454545] transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
