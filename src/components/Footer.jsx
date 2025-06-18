const Footer = () => {
  return (
    <footer className="bg-[#511545] text-[#fbdbde] py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cartify</h3>
            <p className="text-sm">Your one-stop shop for all your needs.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to get updates on new products and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 text-[#fbdbde] rounded-l focus:outline-none w-full"
              />
              <button className="bg-[#d8c9ae] text-[#000000] px-4 py-2 rounded-r hover:bg-[#c5b79e] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-[#6b6b6b] mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cartify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
