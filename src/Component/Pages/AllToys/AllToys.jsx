import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Provider/AuthProvider";
import SearchButton from "./SearchButton";
// import SearchButton from "./SearchButton";



const AllToys = () => {

    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch('https://manga-anime-shop-server.vercel.app/all')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(error=>console.error(error))
    },[])

console.log(data)
    const { user } = useContext(AuthContext);
    const handleButtonClick = () => {
        user ? toast.success('Thank you for visiting') :
            toast.success('Please Login first');
    };



  
    console.log(data);
    // Show all data button implement
    const [showAll, setShowAll] = useState(false);
    const allToys = showAll ? data : data.slice(0, 20);

    const handleShowAll = () => {
        setShowAll(true);
    };

    // Search data button implement

    // const [filteredData, setFilteredData] = useState([]);
    // setFilteredData(allToys)


    // 
const handleSearch = (searchTerm) => {
        const filteredItems = data.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setData(filteredItems);
     };

    return (
        <div>
            <SearchButton onSearch={handleSearch} />

            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allToys.map(toy => <div key={toy._id} className="col card w-96 bg-base-100 shadow-xl ">
                        <figure className="px-10 pt-10">
                            <img src={toy.toys['0'].image} className="rounded-xl w-52 h-52" />
                        </figure>
                        <div className="card-body  ">
                            <h2 className="card-title">{toy.seller.name}</h2>
                            <p className="text-xl font-bold text-blue-800">{toy.name}</p>
                            <div className="flex text-xl text-blue-600">
                                <p className="">{toy.category}</p>
                                <p className="mr-8">{toy.toys['0'].price}</p>
                            </div>
                            <p className="text-xl text-blue-600">Available Toys: {toy.quantity}</p>
                            <div className="card-actions flex">
                                <Link to={`/allToys/${toy._id}`} className="btn btn-outline btn-primary" onClick={handleButtonClick}>Veiw Details</Link>
                                <ToastContainer />


                                <button className="btn btn-primary">Buy Now</button>


                            </div>
                        </div>
                    </div>
                    )
                }

            </div>
            {!showAll && (
                <div className="text-center">
                    <button className="btn btn-active btn-secondary my-8" onClick={handleShowAll}>Show All</button>
                </div>
            )}
        </div>
    );
};

export default AllToys;