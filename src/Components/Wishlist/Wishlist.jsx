import { useContext } from "react";
import { dataContext } from "../../Context/Context";
import { RxCrossCircled } from "react-icons/rx";



const Wishlist = () => {
    const {wishlistData} = useContext(dataContext);

    console.log(wishlistData)
    return (
        <div className="my-10 mx-20">
             <h3 className="font-bold text-xl mb-5">Wishlist</h3>
           
           {
            wishlistData.map((product) => (
                <div  className="flex items-center rounded-2xl p-3 gap-5 border-2 mb-5" key={product.product_id}> <img className="h-40" src={product.product_image} alt="" />
               
                <div className="mr-96">
                    <h3 className="font-bold text-xl">{product.product_title}</h3>
                    <p className="my-2">{product.description}</p>
                    <p className="font-bold">Price: {product.price}</p>
                </div >
                <RxCrossCircled style={{color:'red', fontSize:'24px'}} />
            </div>
            ))
           }
            
        </div>
    );
};

export default Wishlist;