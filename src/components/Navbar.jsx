import { Link } from "react-router-dom";
import { ShoppingCart, Heart, User, Plus, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-[#fbdbde] bg-[#511545] shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold hover:text-white transition"
          >
            Cartify
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <Link to="/add-product" className="hover:text-white transition">
              Sell Products
            </Link>
          </div>

          {/* Desktop Icons and Login */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/cart"
              className="p-2 relative hover:bg-[#8c5581] rounded-full transition"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 left-6  bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                2
              </span>
            </Link>
            <Link
              to="/wishlist"
              className="p-2 relative hover:bg-[#8c5581] rounded-full transition"
            >
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 left-6  bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                3
              </span>
            </Link>
            <Link
              to="/profile"
              className="p-2 hover:bg-[#8c5581] rounded-full transition"
            >
              <User className="h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="ml-2 px-4 py-2 bg-[#fbdbde] text-[#511545]  rounded-lg hover:bg-[#f7c0c6] transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              to="/cart"
              className="p-2 hover:bg-[#8c5581] rounded-full transition"
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-[#8c5581] rounded-full transition"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              to="/"
              className="block px-3 py-2 hover:bg-[#fbbebe] rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/wishlist"
              className="block px-3 py-2 hover:bg-[#fbbebe] rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Wishlist
            </Link>
            <Link
              to="/add-product"
              className="block px-3 py-2 hover:bg-[#6b6b6b] rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Sell
            </Link>
            <Link
              to="/profile"
              className="block px-3 py-2 hover:bg-[#6b6b6b] rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
            <div className="pt-2 border-t border-[#6b6b6b]">
              <Link
                to="/login"
                className="block w-full text-center px-4 py-2 text-[#511545] bg-[#fbdbde] rounded-lg hover:bg-[#c5b79e] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
