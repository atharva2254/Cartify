const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f5ee] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-[#575757]">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#575757] mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-[#d8c9ae] placeholder-[#a0a0a0] text-[#575757] rounded-md focus:outline-none focus:ring-[#575757] focus:border-[#575757] focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#575757] mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-[#d8c9ae] placeholder-[#a0a0a0] text-[#575757] rounded-md focus:outline-none focus:ring-[#575757] focus:border-[#575757] focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#575757] focus:ring-[#d8c9ae] border-[#d8c9ae] rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-[#575757]"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-[#575757] hover:text-[#d8c9ae]"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#575757] hover:bg-[#454545] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d8c9ae]"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="text-center text-sm">
          <span className="text-[#575757]">Don't have an account? </span>
          <a
            href="/signup"
            className="font-medium text-[#575757] hover:text-[#d8c9ae]"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
