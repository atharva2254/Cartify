import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  AddProduct,
  Wishlist,
  Cart,
  Profile,
} from "./pages";
// import { Home } from "./pages/Home";
// import { Login } from "./pages/Login";
// import { Signup } from "./pages/Signup";
// import { Cart } from "./pages/Cart";
// import { AddProduct } from "./pages/AddProduct";
// import { Profile } from "./pages/Profile";
// import { Wishlist } from "./pages/Wishlist";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#ffff]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
