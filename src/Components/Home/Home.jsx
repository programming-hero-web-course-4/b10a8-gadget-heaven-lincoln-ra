import { NavLink } from "react-router-dom";
import "./home.css"
const Home = () => {
    return (
        <div className="flex gap-5">
            <div className="category w-2/12 bg-white rounded-xl p-5 ">
                <ul>
                    <li><NavLink>All Products</NavLink></li>
                    <li><NavLink>Laptops</NavLink></li>
                    <li><NavLink>Phones</NavLink></li>
                    <li><NavLink>Accessories</NavLink></li>
                    <li><NavLink>Smart Watches</NavLink></li>
                    <li><NavLink>MacBook</NavLink> </li>
                    <li><NavLink>Iphone</NavLink></li>
                </ul>
            </div>

            <div className="cards w-10/12 bg-white rounded-lg p-5">
cards will br here
            </div>
        </div>
    );
};

export default Home;