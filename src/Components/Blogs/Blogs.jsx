import { useContext } from "react";
import { dataContext } from "../../Context/Context";

const Blogs = () => {

    const {newsData} = useContext(dataContext);
    console.log(newsData)

    return (
        <div>
            <h1 className="text-4xl text-center my-10 font-bold">Checkout the latest tech news with us</h1>
            {
                newsData.map((newsData) => (
                    <div className=" news flex m-10 rounded-xl bg-gray-100 shadow-md px-10 py-5 items-center">
                        <img className="w-72" src={newsData.image} alt="" />
                        <div>
                            <h2 className="font-bold mb-5 text-xl ">           {newsData.category}</h2>
                            <p className="text-sm text-gray-500">{newsData.date}</p>
                            <h3 className="font-semibold text-md mb-2">{newsData.headline}</h3>
                            <p className="mb-8">{newsData.details} </p>
                            <a className="text-purple-600 " href={newsData.url} target="_blank">{newsData.source}</a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Blogs;