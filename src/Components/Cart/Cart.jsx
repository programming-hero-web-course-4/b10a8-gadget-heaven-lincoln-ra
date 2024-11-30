import { useContext, useState } from "react";
import { dataContext } from "../../Context/Context";
import { FaSortNumericDownAlt } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    
    

    const {cartData, setCartData} = useContext(dataContext);
    

    const [sortedCartData, setSortedCartData] = useState(cartData);

    const [finalTotalPrice, setFinalTotalPrice] = useState(0);

    const navigate = useNavigate()

    const totalPrice = sortedCartData.reduce((total, product) => total+product.price, 0);

    const sortByPrice = () => {
        const sortedData = [...sortedCartData].sort((a, b) => b.price - a.price);
        setSortedCartData(sortedData);
      };

    const handlePurchase = () => {
        document.getElementById('my_modal_1').showModal();
        setFinalTotalPrice(totalPrice);
        setCartData([]);
        setSortedCartData([]);

    };
    
    const handleClose =() => {
        navigate('/');
        window.scrollTo(0, 0);
    }

    // console.log(cartData);
    return (
        <div>


            {/* Open the modal using document.getElementById('ID').showModal() method */}



            <div className="flex justify-between items-center  m-20">
                <h3 className="font-bold text-lg">Cart</h3>
                <div className="flex gap-8 items-center">
                <h3 className="font-bold text-lg">Total Price: {totalPrice.toFixed(2)}</h3>
                <button className="flex items-center gap-2 border-2 border-purple-600 rounded-full px-3 py-2" onClick={sortByPrice}>Sort by Price <FaSortNumericDownAlt /></button>
                <button className={`flex items-center gap-2 border-2 border-purple-600 rounded-full px-3 py-2 ${sortedCartData.length !== 0 ? 'bg-purple-600 text-white' : ''}`}onClick={handlePurchase}
                disabled={sortedCartData.length ===0 }>Purchase</button>
                </div>
                </div>
                <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex flex-col items-center">
                    <img src="https://i.ibb.co.com/4NgBmNg/Group.png" alt="" />
                    <h3 className="font-bold text-lg">Success</h3>
                    <p className="py-4">Product Purchased Successfully</p>
                    <p className="font-bold">Total Price: {finalTotalPrice.toFixed(2)}</p>
                     <div className="modal-action">
                         <form method="dialog">
       
                            <button onClick={handleClose} className="btn">Close</button>
                        </form>
                     </div>
                 </div>
                </dialog>
           {
            sortedCartData.map((product) =>(
            <div  className="flex items-center justify-between rounded-2xl p-3 gap-5 border-2 mb-5 pr-10" key={product.product_id}> 
            <div className="flex items-center gap-10">
            <img className="h-40" src={product.product_image} alt="" />
                <div className="">
                    <h3 className="font-bold text-xl">{product.product_title}</h3>
                    <p className="my-2">{product.description}</p>
                    <p className="font-bold">Price: {product.price}</p>
                </div >
            </div>
                <RxCrossCircled style={{color:'red', fontSize:'24px'}} />
            </div>) )
           }
        </div>
    );
};

export default Cart;