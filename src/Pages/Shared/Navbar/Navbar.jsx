import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../../Hooks/useCarts";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const [carts, isLoading] = useCarts();

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salads"}>Order Food</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/signUp"}>Sign Up</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    logoutUser()
      .then(() => {
        alert("sign out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="navbar bg-black bg-opacity-30 text-white fixed z-10 max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {/* shopping cart */}
          <Link to={"/dashboard/cart"}>
            <button className="btn btn-outline text-white mr-4">
              <FaShoppingCart></FaShoppingCart>
              <div className="badge badge-secondary">
                +
                {isLoading ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  carts.length
                )}
              </div>
            </button>
          </Link>
          {user ? (
            <>
              <button
                onClick={handleSignOut}
                className="btn btn-outline text-white"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-outline text-white">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
