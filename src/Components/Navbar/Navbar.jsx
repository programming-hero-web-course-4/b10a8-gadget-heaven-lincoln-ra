import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="flex justify-between items-center my-5 ">
            <h3 className="font-bold text-xl">Gadget Heaven</h3>
            <ul className="flex gap-5">
                <li><NavLink to="/"> Home</NavLink> </li>
                <li><NavLink to="/statistic">Statistic</NavLink> </li>
                <li><NavLink to="/dashboard">Dashboard</NavLink>  </li>
                <li><NavLink to="/blog"> Blog </NavLink></li>
                
            </ul>
            <div className="flex gap-5">
            <IoCartOutline />
            <FaRegHeart />
            </div>
        </div>
    );
};

export default Navbar;