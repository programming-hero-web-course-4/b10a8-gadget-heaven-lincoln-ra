import { useContext } from "react";
import { dataContext } from "../../Context/Context";
import { FaSortNumericUpAlt } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const Cart = () => {
    
    const {cartData} = useContext(dataContext);
    const totalPrice = cartData.reduce((total, product) => total+product.price, 0);

    console.log(cartData);
    return (
        <div>
            <div className="flex justify-between items-center  m-20">
                <h3 className="font-bold text-lg">Cart</h3>
                <div className="flex gap-8 items-center">
                <h3 className="font-bold text-lg">Total Price: {totalPrice.toFixed(2)}</h3>
                <button className="flex items-center gap-2 border-2 border-purple-600 rounded-full px-3 py-2">Sort by Price <FaSortNumericUpAlt /></button>
                <button className="flex items-center gap-2 border-2 border-purple-600 rounded-full px-3 py-2">Purchase</button>
                </div>
                </div>
           {
            cartData.map((product) =>(
            <div  className="flex items-center rounded-2xl p-3 gap-5 border-2" key={product.product_id}> <img className="h-40" src={product.product_image} alt="" />
                <div className="mr-96">
                    <h3 className="font-bold text-xl">{product.product_title}</h3>
                    <p className="my-2">{product.description}</p>
                    <p className="font-bold">Price: {product.price}</p>
                </div >
                <RxCrossCircled style={{color:'red', fontSize:'24px'}} />
            </div>) )
           }
        </div>
    );
};

export default Cart;