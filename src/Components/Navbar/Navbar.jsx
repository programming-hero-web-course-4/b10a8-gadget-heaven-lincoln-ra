import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation();

    const isLocation = location.pathname === "/";

    return (
        <div className={`my-5 p-5 rounded-xl ${isLocation ? "bg-purple-600 pb-20 mb-96 text-white" : "bg-none text-black"}`}>
  <div className="flex justify-between items-center">
    <h3 className="font-bold text-xl">Gadget Heaven</h3>
    <ul className="flex gap-5">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/statistic">Statistic</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/blog">Blog</NavLink></li>
    </ul>
    <div className="flex gap-5">
      <IoCartOutline />
      <FaRegHeart />
    </div>
  </div>

  {isLocation && (
    <div className="relative text-center mx-24 font-bold my-10">
      <h1 className="text-5xl mb-4">Upgrade Your Tech Accessories with Gadget Heaven Accessories</h1>
      <p className="mx-40">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="text-purple-600 font-bold rounded-full bg-white px-3 py-2 m-5">
        Shop Now
      </button>

      {/* Ensure the absolute div is within a relative container */}
      <div className="relative mt-5">
        <div className="absolute inset-0 ">
            <div className="bg-white bg-opacity-50 backdrop-blur-md p-3 rounded-xl border-2">
                <img className="rounded-xl h-[400px] w-full object-cover" src="/src/assets/banner.jpg" alt="Banner" />
            </div>
         
        </div>
      </div>
    </div>
  )}
</div>

    );
};

export default Navbar;