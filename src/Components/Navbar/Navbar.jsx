import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className="flex justify-between items-center my-5 ">
            <h3 className="font-bold text-xl">Gadget Heaven</h3>
            <ul className="flex gap-5">
                <li>Home </li>
                <li>Statistic </li>
                <li>Dashboard </li>
                <li>Blog </li>
                
            </ul>
            <div className="flex gap-5">
            <IoCartOutline />
            <FaRegHeart />
            </div>
        </div>
    );
};

export default Navbar;