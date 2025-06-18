// import { ProductCard } from "../components/ProductCard";

import { useState, useEffect } from "react";
import { formatPrice } from "../utils/priceformat";
import { Trash2 } from "lucide-react";
import api, { BASE_URL } from "../api";

const Cart = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    // Add quantity = 1 for all items initially
    const updatedItems = items.map((item) => ({ ...item, quantity: 1 }));
    setCartItems(updatedItems);
  }, []);

  // Save cart to localStorage whenever updated
  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 15.0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  // Increase quantity
  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  // Decrease quantity
  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      updateLocalStorage(updatedCart);
    }
  };
  // Remove Item
  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-[#575757] mb-8 text-center lg:text-left">
        Your Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {cartItems.length > 0 ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Desktop Header */}
              <div className="hidden md:grid grid-cols-12 bg-[#f8f5ee] p-4 border-b border-[#d8c9ae]">
                <div className="col-span-5 font-medium text-[#575757]">
                  Product
                </div>
                <div className="col-span-2 font-medium text-[#575757] text-center">
                  Price
                </div>
                <div className="col-span-3 font-medium text-[#575757] text-center">
                  Quantity
                </div>
                <div className="col-span-2 font-medium text-[#575757] text-right">
                  Total
                </div>
              </div>

              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-12 p-4 border-b border-[#d8c9ae] items-center gap-4 md:gap-0 relative"
                >
                  {/* Product */}
                  <div className="flex items-center md:col-span-5">
                    <img
                      src={`${BASE_URL}/uploads/${item.imagePath}`}
                      alt={item.product_name}
                      className="w-20 h-20 object-cover rounded mr-4"
                    />
                    <span className="text-[#575757] text-2xl md:text-base">
                      {item.product_name}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between md:justify-center md:col-span-2">
                    <span className="font-medium text-[#575757] md:hidden">
                      Price:
                    </span>
                    <span className="text-[#575757] text-sm md:text-base">
                      {formatPrice(item.price)}
                    </span>
                  </div>

                  {/* Quantity */}
                  <div className="flex justify-between md:justify-center md:col-span-3">
                    <span className="font-medium text-[#575757] md:hidden">
                      Quantity:
                    </span>
                    <div className="flex items-center border border-[#d8c9ae] rounded">
                      <button
                        onClick={() => decreaseQuantity(index)}
                        className="px-3 py-1 text-[#575757] hover:bg-[#f8f5ee]"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border-x border-[#d8c9ae]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(index)}
                        className="px-3 py-1 text-[#575757] hover:bg-[#f8f5ee]"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between md:justify-end md:col-span-2">
                    <span className="font-medium text-[#575757] md:hidden">
                      Total:
                    </span>
                    <span className="text-[#575757] text-sm md:text-base">
                      {formatPrice((item.price * item.quantity).toFixed(2))}
                    </span>
                  </div>

                  {/* Trash Icon */}
                  <div className="absolute top-4 right-4 cursor-pointer">
                    <Trash2
                      className="text-red-500 hover:text-red-700"
                      onClick={removeItem}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#575757] mb-2">
                Your cart is empty
              </h3>
              <p className="text-[#575757] mb-6">
                Looks like you haven't added anything to your cart yet
              </p>
              <button className="px-6 py-2 bg-[#575757] text-[#d8c9ae] rounded-md hover:bg-[#454545] transition">
                Continue Shopping
              </button>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-bold text-[#575757] mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#575757]">Subtotal</span>
                  <span className="text-[#575757]">
                    {formatPrice(subtotal.toFixed(2))}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#575757]">Shipping</span>
                  <span className="text-[#575757]">
                    {formatPrice(shipping.toFixed(2))}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#575757]">Tax</span>
                  <span className="text-[#575757]">
                    {formatPrice(tax.toFixed(2))}
                  </span>
                </div>
                <div className="border-t border-[#d8c9ae] pt-3 flex justify-between font-bold">
                  <span className="text-[#575757]">Total</span>
                  <span className="text-[#575757]">
                    {formatPrice(total.toFixed(2))}
                  </span>
                </div>
              </div>

              <button className="w-full py-3 bg-[#575757] text-[#d8c9ae] rounded-md hover:bg-[#454545] transition mb-4">
                Proceed to Checkout
              </button>

              <p className="text-sm text-center text-[#575757]">
                or{" "}
                <a href="/" className="text-[#575757] hover:text-[#d8c9ae]">
                  Continue Shopping
                </a>
              </p>
            </div>

            <div className="mt-4 bg-white rounded-lg shadow-md p-6">
              <h3 className="font-medium text-[#575757] mb-3">
                Have a promo code?
              </h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-grow px-3 py-2 border border-[#d8c9ae] rounded-l focus:outline-none"
                />
                <button className="px-4 py-2 bg-[#d8c9ae] text-[#575757] rounded-r hover:bg-[#c5b79e] transition">
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

// import { useCart } from "../context/cartContext";

// const Cart = () => {
//   const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
//     useCart();

//   const subtotal = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   const shipping = 15.0;
//   const tax = subtotal * 0.1;
//   const total = subtotal + shipping + tax;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-[#575757] mb-8">
//         Your Shopping Cart
//       </h1>

//       <div className="flex flex-col lg:flex-row gap-8">
//         <div className="lg:w-2/3">
//           {cart.length > 0 ? (
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="hidden md:grid grid-cols-12 bg-[#f8f5ee] p-4 border-b border-[#d8c9ae]">
//                 <div className="col-span-5 font-medium text-[#575757]">
//                   Product
//                 </div>
//                 <div className="col-span-2 font-medium text-[#575757] text-center">
//                   Price
//                 </div>
//                 <div className="col-span-3 font-medium text-[#575757] text-center">
//                   Quantity
//                 </div>
//                 <div className="col-span-2 font-medium text-[#575757] text-right">
//                   Total
//                 </div>
//               </div>

//               {cart.map((item, index) => (
//                 <div
//                   key={item._id || item.id || index}
//                   className="grid grid-cols-12 p-4 border-b border-[#d8c9ae] items-center"
//                 >
//                   <div className="col-span-5 flex items-center">
//                     <img
//                       src={`http://localhost:3000/${item.imagePath}`}
//                       alt={item.product_name}
//                       className="w-16 h-16 object-cover rounded mr-4"
//                     />
//                     <span className="text-[#575757]">{item.product_name}</span>
//                   </div>

//                   <div className="col-span-2 text-[#575757] text-center">
//                     ${item.price.toFixed(2)}
//                   </div>

//                   <div className="col-span-3 flex justify-center">
//                     <div className="flex items-center border border-[#d8c9ae] rounded">
//                       <button
//                         onClick={() => decreaseQuantity(item._id)}
//                         className="px-3 py-1 text-[#575757] hover:bg-[#f8f5ee]"
//                       >
//                         -
//                       </button>
//                       <span className="px-3 py-1 border-x border-[#d8c9ae]">
//                         {item.quantity}
//                       </span>
//                       <button
//                         onClick={() => increaseQuantity(item._id)}
//                         className="px-3 py-1 text-[#575757] hover:bg-[#f8f5ee]"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>

//                   <div className="col-span-2 text-[#575757] text-right">
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12 bg-white rounded-lg shadow-md">
//               <div className="mx-auto h-24 w-24 text-[#d8c9ae] mb-4">
//                 {/* Your empty cart icon */}
//               </div>
//               <h3 className="text-lg font-medium text-[#575757] mb-2">
//                 Your cart is empty
//               </h3>
//               <p className="text-[#575757] mb-6">
//                 Looks like you haven't added anything to your cart yet
//               </p>
//               <button className="px-6 py-2 bg-[#575757] text-[#d8c9ae] rounded-md hover:bg-[#454545] transition">
//                 Continue Shopping
//               </button>
//             </div>
//           )}
//         </div>

//         {cart.length > 0 && (
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-lg font-bold text-[#575757] mb-4">
//                 Order Summary
//               </h2>

//               <div className="space-y-3 mb-6">
//                 <div className="flex justify-between">
//                   <span className="text-[#575757]">Subtotal</span>
//                   <span className="text-[#575757]">${formatPrice(subtotal.toFixed(2))}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-[#575757]">Shipping</span>
//                   <span className="text-[#575757]">${shipping.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-[#575757]">Tax</span>
//                   <span className="text-[#575757]">${tax.toFixed(2)}</span>
//                 </div>
//                 <div className="border-t border-[#d8c9ae] pt-3 flex justify-between font-bold">
//                   <span className="text-[#575757]">Total</span>
//                   <span className="text-[#575757]">${total.toFixed(2)}</span>
//                 </div>
//               </div>

//               <button className="w-full py-3 bg-[#575757] text-[#d8c9ae] rounded-md hover:bg-[#454545] transition mb-4">
//                 Proceed to Checkout
//               </button>

//               <p className="text-sm text-center text-[#575757]">
//                 or{" "}
//                 <a href="/" className="text-[#575757] hover:text-[#d8c9ae]">
//                   Continue Shopping
//                 </a>
//               </p>
//             </div>

//             <div className="mt-4 bg-white rounded-lg shadow-md p-6">
//               <h3 className="font-medium text-[#575757] mb-3">
//                 Have a promo code?
//               </h3>
//               <div className="flex">
//                 <input
//                   type="text"
//                   placeholder="Enter code"
//                   className="flex-grow px-3 py-2 border border-[#d8c9ae] rounded-l focus:outline-none"
//                 />
//                 <button className="px-4 py-2 bg-[#d8c9ae] text-[#575757] rounded-r hover:bg-[#c5b79e] transition">
//                   Apply
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;
