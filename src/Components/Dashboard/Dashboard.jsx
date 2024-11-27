import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
           <div className="bg-purple-600 p-10 text-white">
                <h1 className="text-3xl font-bold text-center ">Dashboard</h1>
                <p className="text-center  mx-28">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex justify-center gap-4 mt-10">
                    <NavLink to="cart"><button className="border-2 rounded-xl px-3 py-1" >Cart </button></NavLink>
                    <NavLink to="wishlist"><button className="border-2 rounded-xl px-3 py-1">Wishlist</button></NavLink>
                </div>
                
            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default Dashboard;