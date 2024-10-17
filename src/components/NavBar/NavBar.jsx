import { Outlet, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="bg-Primesecondary pt-5 pb-5 pr-10 pl-10">
      <div className="flex flex-row items-center flex-wrap  justify-between place-content-center">
        <div className="flex flex-row items-center gap-20 place-content-center">
          <Link
            to="/"
            className="text-xl font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <Link
            to="/search"
            className="text-xl font-semibold leading-6 text-gray-900"
          >
            Search
          </Link>
          <Link
            to="/about"
            className="text-xl font-semibold leading-6 text-gray-900"
          >
            About
          </Link>
        </div>
        <div className="flex flex-row items-center gap-10 place-content-center">
          <Link
            to="/logIn"
            className="text-xl font-semibold leading-6 text-gray-900"
          >
            LogIn
          </Link>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              placeholder="Search...."
            />
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default NavBar;
