import {
  FaAd,
  FaBold,
  FaBook,
  FaCartArrowDown,
  FaEnvelope,
  FaHome,
  FaList,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { FaCalendarDays, FaShop } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import useCarts from "../../../Hooks/useCarts";
import { IoMdMenu } from "react-icons/io";
import useAdmin from "../../../Hooks/useAdmin";

const DashboardNavbar = () => {
  const [carts] = useCarts();

  const {isAdmin} = useAdmin();
  console.log(isAdmin)

  return (
    <div>
      <ul className="menu">
        {isAdmin ? (
          <>
            {" "}
            <li>
              <NavLink to={"/dashboard/adminHome"}>
                {" "}
                <FaHome></FaHome>Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/addItem"}>
                {" "}
                <FaUtensils></FaUtensils> Add Items
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/manageItems"}>
                <FaList></FaList> Manage Items
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/ManageBooking"}>
                {" "}
                <FaBook></FaBook> Manage Bookings
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/users"}>
                {" "}
                <FaUsers></FaUsers> All Users
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to={"/dashboard/home"}>
                {" "}
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/reservation"}>
                {" "}
                <FaCalendarDays></FaCalendarDays> RESERVATION
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/payment"}>
                <FaWallet></FaWallet> PAYMENT HISTORY
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/cart"}>
                {" "}
                <FaCartArrowDown></FaCartArrowDown> MY CART ({carts.length})
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/add"}>
                {" "}
                <FaAd></FaAd> ADD REVIEW
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/booking"}>
                <FaBold></FaBold> MY BOOKING
              </NavLink>
            </li>
          </>
        )}

        {/* Shared NavLinks */}
        <div className="divider"></div>
        <li>
          <NavLink to={"/"}>
            {" "}
            <FaHome></FaHome> Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"}>
            {" "}
            <IoMdMenu></IoMdMenu> Menu
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"}>
            {" "}
            <FaShop></FaShop> Shop
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"}>
            {" "}
            <FaEnvelope></FaEnvelope> Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNavbar;
