import { useContext } from "react";
import { dataContext } from "../../Context/Context";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";

const Cards = () => {

    const obj = useParams();
    // console.log(obj)

    const value = useContext(dataContext)
    const {data} = value;
    // console.log(data)

    const filteredProducts = obj.category === "allProducts" || !obj.category
        ? data.products
        : data.products?.filter((product) => product.category === obj.category);

    return (
        <div className="cards w-10/12 rounded-lg grid grid-cols-3 gap-4">
            {filteredProducts?.length > 0 ? (
                filteredProducts.map((product) => (
                    <Card key={product.product_id} product={product} />
                ))
            ) : (
                <p className="font-bold w-[800px] text-4xl">No products found for this category.</p>
            )}
        </div>
    );
};

export default Cards;