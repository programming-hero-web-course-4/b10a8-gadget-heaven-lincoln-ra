
import { createContext, useEffect, useState } from "react";
export const dataContext = createContext([]);
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Context = ({children}) => {
    const [data , setData] = useState([])
    const [category, setCategory] =useState([]);
    const [cartData, setCartData] = useState([]);
    const [wishlistData, setWishlistData] = useState([]);
    const [newsData , setNewsData] = useState([])

    


    useEffect ( () => {
        fetch("products.json")
        .then (res => res.json())
        .then(data => setData(data))
    }, [])

    useEffect(() => {
        fetch("category.json")
        .then (res => res.json() )
        .then (data => setCategory(data))
    },[] );

    useEffect(() => {
        fetch("news.json")
        .then (res => res.json() )
        .then (data => setNewsData(data))
    },[]);


    // console.log(newsData)

    const addToCart = (product) => {
        setCartData((prevCartData) => [...prevCartData, product]);
        toast.success("product added to cart", {position: "top-center",
            autoClose: 1000,})
        
    };

    // const addToWishlist = (product) => {
    //     setWishlistData((prevWishlistData) => [...prevWishlistData, product]);
    // };



    const addToWishlist = (product) =>{
        setWishlistData((prevWishlistData) =>{
            if(prevWishlistData.find((item) => item.product_id === product.product_id))
            {
                toast.error("product is already in the wishlist", {position: "top-center",
                    autoClose: 1000,});
                return prevWishlistData;
            };
            toast.success("product added to wishlist", {position: "top-center",
                autoClose: 1000,})
            return[...prevWishlistData, product]
            
        })
    }


   


    const value = {
        data,
        category,
        cartData,
        setCartData,
        addToCart,
        wishlistData,
        addToWishlist,
        newsData,
    };
    
    return (
        <dataContext.Provider value={value}>

            {children}
            <ToastContainer/>
        </dataContext.Provider>
    );
};

export default Context;