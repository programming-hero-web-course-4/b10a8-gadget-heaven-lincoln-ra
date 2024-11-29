
import { createContext, useEffect, useState } from "react";
export const dataContext = createContext([]);

const Context = ({children}) => {
    const [data , setData] = useState([])
    const [category, setCategory] =useState([]);
    const [cartData, setCartData] = useState([]);
    const [wishlistData, setWishlistData] = useState([]);

    console.log(wishlistData)


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

    const addToCart = (product) => {
        setCartData((prevCartData) => [...prevCartData, product]);
    };

    // const addToWishlist = (product) => {
    //     setWishlistData((prevWishlistData) => [...prevWishlistData, product]);
    // };



    const addToWishlist = (product) =>{
        setWishlistData((prevWishlistData) =>{
            if(prevWishlistData.find((item) => item.product_id === product.product_id))
            {
                alert("product is already in the wishlist");
                return prevWishlistData;
            };
            return[...prevWishlistData, product]
        })
    }


   


    const value = {
        data,
        category,
        cartData,
        addToCart,
        wishlistData,
        addToWishlist,
    };
    
    return (
        <dataContext.Provider value={value}>

            {children}
            
        </dataContext.Provider>
    );
};

export default Context;