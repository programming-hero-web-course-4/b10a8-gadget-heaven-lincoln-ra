import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Navbar = () => {
    const location = useLocation();

    const isLocation = location.pathname === "/";

    useEffect (() => {
      const title ={
        "/": "Home | Gadget Haven",
        "/dashboard": "Dashboard | Gadget Haven",
        "/state": "State | Gadget Haven",
        "/news":"News",
        "/dashboard/cart": "Cart | Gadget Heaven",
        "/dashboard/wishlist": "Wishlist | Gadget Heaven",
        "/cards/allProducts": "All Products | Gadget Haven",
        "/cards/Laptop": "Laptops | Gadget Haven",
        "/cards/Phone": "Phones | Gadget Haven",
        "/cards/MacBook": "MacBook | Gadget Haven",
        "/cards/iPhone": "iPhone | Gadget Haven",
        "/cards/watch": "Watches | Gadget Haven",
      };
      document.title = title[location.pathname] || "Gadget Haven";
    }, [location]);

    return (
        <div className={`mt-5 p-5 mx-10 rounded-t-xl ${isLocation ? "bg-purple-600 text-white" : "bg-none text-black"}`}>
  <div className="flex justify-between items-center">
    <h3 className="font-bold text-xl">Gadget Heaven</h3>
    <ul className="flex gap-5">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/state">State</NavLink></li>
      <li><NavLink to="/news">News</NavLink></li>
    </ul>
    <div className="flex gap-5">
      <NavLink to="/dashboard/cart"><button className="bg-white p-2 text-black rounded-full border-2"><IoCartOutline /></button ></NavLink>
      <NavLink to="/dashboard/wishlist"><button className="bg-white p-2 text-black rounded-full border-2"> <FaRegHeart /></button></NavLink>
      
     
    </div>
  </div>

</div>

    );
};

export default Navbar;