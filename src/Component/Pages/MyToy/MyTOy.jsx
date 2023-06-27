import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const MyTOy = () => {
    const [AddData,setData]=useState([]);
      
    const navigate=useNavigate();

    const {user}=useContext(AuthContext);
    const url=`https://manga-anime-shop-server.vercel.app/addAToy?email=${user.email}`
 
    useEffect(()=>{
      fetch(url,{
        method:'GET',
        headers:{
          authorization:`Bearer ${localStorage.getItem('manga-token')}`
        }
        
       
      })
      .then(res=>res.json())
      .then(data=>{
        if(!data.error){
          setData(data)
        }
        else{
          console.log(data.error);
           navigate('/')
        }
      })
      .catch(error=>console.error(error))
  },[url,navigate])

// DELETE Data
    const handleDelete=id=>{
        const proceed=confirm('Are you sure you want to delete?');
        if(proceed){
            fetch(`https://manga-anime-shop-server.vercel.app/addAToy/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    alert('delete successfully');
                    const remainingToys = AddData.filter(dData=>dData._id !== id)
                    setData(remainingToys);
                }
            })

        }
    }


    
    // Sort data

    const handleSortData=()=>{
      const sorted = [...AddData].sort((a, b) => ((parseInt(a.price)- parseInt(b.price)).toString())
      );
      
     console.log(sorted);
    setData(sorted);
    

    }
    return (
        <div>
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th></th>
              <th></th>
              <th><button onClick={handleSortData} className="btn btn-outline btn-primary"
          >Sort</button></th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {AddData.map(addedToy=> <tr key={addedToy._id} className="">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={addedToy.image} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{addedToy.toyName}</div>
                    
                  </div>
                </div>
              </td>
              <td className="text-blue-800 text-xl">
              {addedToy.category}
              </td>
                
              <td className="text-red-800 text-xl">
              {addedToy.price}/=
                </td>
                <td className="text-red-800 text-xl">
              {addedToy.quantity}
                </td>
                <td className="text-red-800 text-xl">
              {addedToy.rating}
                </td>
                
              <th><Link to={`/myToys/${addedToy._id}`}
                    className="btn btn-outline btn-primary">Edit</Link></th>
              <th>

                <button
                    className="btn btn-outline btn-primary">Update</button>
              </th>
              <th>
              <button className="btn btn-primary" onClick={()=>handleDelete(addedToy._id)}>Delete</button>
              </th>
            </tr>)}
           
            
          </tbody>
          
          
        </table>
      </div>
      </div>
    );
};

export default MyTOy;