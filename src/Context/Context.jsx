
import { createContext, useEffect, useState } from "react";
export const dataContext = createContext([]);

const Context = ({children}) => {
    const [data , setData] = useState([])
    const [category, setCategory] =useState([]);

    console.log(category)


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



    const value = {
        data,
        category,
    };
    
    return (
        <dataContext.Provider value={value}>

            {children}
            
        </dataContext.Provider>
    );
};

export default Context;