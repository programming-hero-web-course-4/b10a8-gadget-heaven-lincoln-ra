
const Footer = () => {
    return (
        <footer className="p-10">
            <div className="text-center mx-auto">
                <h2 className="font-bold text-3xl">Gadget Heaven</h2>
                <p className="mt-2 mb-4">Leading the way in cutting-edge technology and innovation.</p>
                <hr />
                <div className="flex justify-around mx-48 m-8" >

                   <ul>
                    <h3 className="font-bold text-xl">Service </h3>
                    <li>Product Support </li>
                    <li>Order Tracking </li>
                    <li>Shipping & Delivery </li>
                    <li>Returns </li>
                   </ul>
                   <ul>
                    <h3 className="font-bold text-xl">Company</h3>
                    <li>About US </li>
                    <li>Careers </li>
                    <li>Contact</li>
                    
                   </ul>
                   <ul>
                    <h3 className="font-bold text-xl">Legal</h3>
                    <li>Terms of Service </li>
                    <li>Privacy Policy </li>
                    <li>Cookie Policy </li>
                    
                   </ul> 
                </div>
            </div>


        </footer>
    );
};

export default Footer;