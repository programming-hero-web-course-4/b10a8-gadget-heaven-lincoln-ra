
import "./home.css"

import Categories from "../Categories/Categories";
// import { Outlet, useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
const Home = () => {
    // const categories = useLoaderData();
    // console.log(categories)
    
    return (
       <div>
        <Banner></Banner>
         <div className="category flex gap-5">
            <Categories ></Categories>
            <Outlet></Outlet>
            {/* <Cards></Cards> */}
        </div>
       </div>
    );
};

export default Home;