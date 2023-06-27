import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";


const Category3 = () =>{
     const [data,setData]=useState([]);

useEffect(()=>{
    fetch('https://manga-anime-shop-server.vercel.app/category/%20Upper%20Moon%20Demon')
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(error=>console.error(error))
},[])

const {user}=useContext(AuthContext);
const handleButtonClick=()=>{


    user? toast.success('Thank you for visiting'):
    toast.success('Please Login first');
  

}

return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            data.map(toy=><div key={toy._id} className="col card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={toy.toys['0'].image}  className="rounded-xl w-52 h-52" />
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
                <Link to={`/${toy._id}`} className="btn btn-outline btn-primary" onClick={handleButtonClick}>Veiw Details</Link>
               <ToastContainer />

               
                    <button className="btn btn-primary">Buy Now</button>
                    

                </div>
            </div>
        </div>
                )
        }
        
    </div>
);
};



export default Category3;