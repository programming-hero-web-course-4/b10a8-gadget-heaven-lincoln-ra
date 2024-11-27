import React from 'react';
import { NavLink} from "react-router-dom";

const Banner = () => {
    return (
        <div className="relative text-center font-bold bg-purple-600 pb-48 mb-72 pt-10 rounded-b-xl">
      <h1 className="text-5xl mb-4 text-white">Upgrade Your Tech Accessories with Gadget Heaven Accessories</h1>
      <p className="mx-40 text-white">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <NavLink to="/dashboard/cart"><button className="text-purple-600 font-bold rounded-full bg-white px-3 py-2 m-5">
        Shop Now
      </button></NavLink>
      

      {/* Ensure the absolute div is within a relative container */}
      <div className="relative mt-5">
        <div className="absolute inset-0 left-40">
            <div className="bg-white bg-opacity-50 backdrop-blur-md p-3 rounded-xl border-2 w-10/12">
                <img className="rounded-xl h-[400px] w-full object-cover" src="/src/assets/banner.jpg" alt="Banner" />
            </div>
         
        </div>
      </div>
    </div>
    );
};

export default Banner;