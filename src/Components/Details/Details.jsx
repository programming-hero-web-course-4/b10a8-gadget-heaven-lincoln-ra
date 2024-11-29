import { useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useContext } from "react";
import { dataContext } from "../../Context/Context";
import RatingStars from "../RatingStars/RatingStars";

const Details = () => {

    const {addToCart} = useContext(dataContext);
    const {addToWishlist} = useContext(dataContext);

    const location = useLocation();
    const {product} = location.state ;
    const {product_title, product_image,availability, price, rating,specification,description} = product;




    return (
        <div className="bg-purple-600 p-10 rounded-xl relative pb-24" >
            <h3 className="font-bold text-4xl text-center text-white">Product Details</h3>
            <p className="text-center mx-48 mt-3 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <div className="bg-white flex my-5 rounded-xl p-10 left-24 w-10/12 absolute  gap-10">
                <img className="rounded-xl h-[350px]" src={product_image} alt="" />
                <div >
                    <h3 className="font-bold text-2xl">{product_title}</h3>
                    <p className="font-bold">Price: {price}</p>
                    <div>
                        {availability? (<p className="bg-[#2f9c084f] border-2 border-green-600 px-3 py-1 rounded-full w-4/12">in stock</p>): (<p className="bg-[#f2a19b] border-2 border-red-600 px-3 py-1 rounded-full w-5/12">out of stock</p>)}
                    </div>
                    <p className="text-[#6b6969]">{description}</p>
                    <h4 className="font-bold">Specification:</h4>
                    <ol className="list-decimal list-inside">
                        <li>{specification.os}</li>
                        <li>{specification.processor}</li>
                        <li>{specification.ram}</li>
                        <li>{specification.screen_size}</li>
                        <li>{specification.storage}</li>
                        
                    </ol>
                    <h4 className="flex items-center gap-2"> <RatingStars rating = {rating}></RatingStars> {rating}  </h4>
                    <div className="flex items-center gap-5 ">
                    <button className="flex items-center gap-1 bg-purple-600 rounded-full px-3 py-1 text-white font-semibold" onClick={() =>addToCart(product)}>Add to Cart <IoCartOutline /></button>
                    <button onClick={() => addToWishlist(product)} className="border-2 border-[#adadad] p-1 rounded-full"><FaRegHeart /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;