// import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate=useNavigate();

    const handleGoBack =() =>{
        navigate(-1);
    }

    return (
        <div className=" flex flex-col gap-5 p-40 bg-black text-white text-center h-screen">
            <h1 className="text-7xl font-bold">Oops!</h1>
            <h1 className="text-5xl font-bold"> You’ve time-traveled into my future</h1>
            <p className="font-semibold text-lg">(nothing here, please go back)</p>
            {/* <Link to="/"><button className="bg-cyan-200 rounded-lg px-3 py-2 text-black">Go Back</button></Link> */}
            <button onClick={handleGoBack} className="bg-cyan-200 rounded-lg px-3 py-2 text-black w-24 mx-auto"> Go Back </button>
        </div>
    );
};

export default ErrorPage;