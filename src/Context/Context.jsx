
import { createContext, useEffect, useState } from "react";
export const dataContext = createContext([]);

const Context = ({children}) => {
    const [data , setData] = useState([])
    const [category, setCategory] =useState([]);
    // const [cartData, setCartData] = useState([]);

    // console.log(category)


    useEffect ( () => {
        fetch("products.json")
        .then (res => res.json())
        .then(data => setData(data))
    }, [])

    useEffect(() => {
        fetch("category.json")
        .then (res => res.json() )
        .then (data => setCategory(data))
    },[] )


    // const[addToCart] =(product) => {
    //     setCartData((prevCartData)=> [...prevCartData, product]);
    // };


    const value = {
        data,
        category,
        // cartData,
        // addToCart,
    };
    
    return (
        <dataContext.Provider value={value}>

            {children}
            
        </dataContext.Provider>
    );
};

export default Context;