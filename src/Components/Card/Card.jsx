import "./card.css"
const Card = ({product}) => {
    // console.log(product)

    const {product_title, product_image, price} = product;
    // console.log(product_image)
   
    return (
        <div className="card bg-white mr-3 mb-3 p-5 rounded-xl">
            <img className="h-[50%] rounded-xl mx-auto" src={product_image} alt="" />
            <h3 className="mt-3 font-bold text-xl">{product_title}</h3>
            <p>Price: {price}</p>
            <button className="border-2 border-purple-600 rounded-3xl px-3 py-1 mt-auto mx-auto mb-5">View Details</button>
        </div>
    );
};

export default Card;