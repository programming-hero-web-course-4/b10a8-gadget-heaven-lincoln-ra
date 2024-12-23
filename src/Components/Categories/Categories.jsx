import React, { useContext } from 'react';
import { dataContext } from '../../Context/Context';
import { NavLink } from 'react-router-dom';

const Categories = () => {
    const value =useContext(dataContext);
    const {category} = value;
    // console.log(category) 

    return (
        <div  className=" category w-2/12 bg-white rounded-xl p-5 ">
            <ul>
                {category.map((category)=>(<NavLink to={`/cards/${category.catName}`} ><li key={category.id}>{category.category}</li></NavLink>))}
            </ul>
        </div>
    );
};

export default Categories;