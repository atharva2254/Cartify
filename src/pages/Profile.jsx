const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 text-center">
              <div className="mx-auto h-24 w-24 rounded-full bg-[#d8c9ae] flex items-center justify-center mb-4 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-[#575757]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#575757]">John Doe</h2>
              <p className="text-sm text-[#575757]">john@example.com</p>
              <button className="mt-4 px-4 py-2 text-sm bg-[#d8c9ae] text-[#575757] rounded-md hover:bg-[#c5b79e] transition">
                Edit Profile
              </button>
            </div>

            <nav className="border-t border-[#d8c9ae]">
              <ul>
                <li>
                  <a
                    href="#"
                    className="block px-6 py-3 text-[#575757] font-medium bg-[#f8f5ee] border-l-4 border-[#575757]"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-6 py-3 text-[#575757] hover:bg-[#f8f5ee] transition"
                  >
                    Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-6 py-3 text-[#575757] hover:bg-[#f8f5ee] transition"
                  >
                    Addresses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-6 py-3 text-[#575757] hover:bg-[#f8f5ee] transition"
                  >
                    Payment Methods
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-6 py-3 text-[#575757] hover:bg-[#f8f5ee] transition"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-[#575757] mb-6">
              Profile Information
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-[#575757] mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-3 py-2 border border-[#d8c9ae] rounded-md focus:outline-none focus:ring-1 focus:ring-[#575757]"
                    value="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-[#575757] mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-3 py-2 border border-[#d8c9ae] rounded-md focus:outline-none focus:ring-1 focus:ring-[#575757]"
                    value="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#575757] mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-[#d8c9ae] rounded-md focus:outline-none focus:ring-1 focus:ring-[#575757]"
                  value="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#575757] mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-[#d8c9ae] rounded-md focus:outline-none focus:ring-1 focus:ring-[#575757]"
                  value="+1 (555) 123-4567"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#575757] text-[#d8c9ae] rounded-md hover:bg-[#454545] transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-[#575757] mb-6">
              Change Password
            </h2>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="current-password"
                  className="block text-sm font-medium text-[#575757] mb-1"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-password"
                  className="w-full px-3 py-2 border border-[#d8c9ae] rounded-md focus:outline-none focus:ring-1 focus:ring-[#575757]"
                  placeholder="Enter current password"
                />
              </div>

              <div>
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium text-[#575757] mb-1"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="w-full px-3 py-2 border border-[#d8c9ae] rounded-md focus:outline-none focus:ring-1 focus:ring-[#575757]"
                  placeholder="Enter new password"
                />
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-[#575757] mb-1"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full px-3 py-2 border border-[#d8c9ae] rounded-md focus:outline-none focus:ring-1 focus:ring-[#575757]"
                  placeholder="Confirm new password"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#575757] text-[#d8c9ae] rounded-md hover:bg-[#454545] transition"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
