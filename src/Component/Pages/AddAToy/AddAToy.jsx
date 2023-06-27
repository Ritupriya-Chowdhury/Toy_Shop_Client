import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import {useLoaderData} from 'react-router-dom';


const AddAToy = () => {
// const addToy=useLoaderData();
// const {toyName,_id,photo,name,email,category,price,quantity,description,rating }=addToy;


    const { user } = useContext(AuthContext)

    const handleAddedData=(event)=>{
        event.preventDefault();
        const form=event.target;
       const name=user?.displayName;
       const email=user?.email;
       const photo=form.photo.value;
       const category=form.category.value;
       const price=form.price.value;
       const quantity=form.quantity.value;
       const rating=form.rating.value;
       const toyName=form.toyName.value;
       const description=form.description.value;

       const AddAToy={
        toyName,photo,name,email,category,price,quantity,description,rating

       }
       event.target.reset();
       
       console.log(AddAToy);
       fetch('https://manga-anime-shop-server.vercel.app/addAToy',{
        method:'POST',
        headers:{
            'content-type':'application/json'

        },
        body:JSON.stringify(AddAToy)

       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
       })
       


        

    }

    return (
        <div className="mx-8 my-20">
            <form onSubmit={handleAddedData}>
                <div className="card bg-base-100 shadow-xl">
                    <div className="mx-4 my-4 grid grid-col-1 md:grid-cols-2 gap-2">

                        <div className="col">
                            <p className=" text-2xl font-bold ">
                                Toy Name
                            </p>
                            <input type="text" name="toyName" placeholder="Insert A Toy Name" className="border border-blue-800 p-4 my-2 text-xl rounded text-blue-800" />
                        </div>
                        <div className="col">
                            <p className=" text-2xl font-bold mx-4">
                                Toy Description
                            </p>
                            <input   type="text" name="description" placeholder="Ass Toy Description" className="border border-blue-800 p-4 my-2 text-xl rounded text-blue-800 w-3/4" />
                        </div>
                    </div>
                    <div className="mx-4 my-4">

                        <p className=" text-2xl font-bold ">
                            Toy Photo
                        </p>
                        <input type="text" name="photo" placeholder="Insert A Photo URL" className="border border-blue-800 p-4 my-2 text-xl rounded text-blue-800 w-3/4" />

                    </div>
                    <div className="mx-4 grid grid-col-1 md:grid-cols-2 gap-2">
                        <div className="col my-4">
                            <p className=" text-2xl font-bold ">
                                Seller Name
                            </p>
                            <input type="text" name="name" defaultValue={user?.displayName}className="border border-blue-800 p-4 my-2 text-xl rounded text-blue-800 w-2/3"></input>
                        </div>
                        <div className="col my-4">
                            <p className=" text-2xl font-bold  ">
                                Seller Email
                            </p>
                            <input type="email" name="email" defaultValue={user?.email} className="border border-blue-800 p-4 my-2 text-xl rounded text-blue-800 w-2/3"></input>
                        </div>

                    </div>
                    <div className="mx-4 grid grid-col-1 md:grid-cols-2 gap-2">
                        <div className="col my-4">
                            <p className=" text-2xl font-bold ">
                                Price
                            </p>
                            <input type="text" name="price" placeholder="Add Price" className="border border-blue-800 p-4 my-2 text-xl rounded text-blue-800 w-2/3"></input>
                        </div>
                        <div className="col my-4">
                            <p className=" text-2xl font-bold  ">
                                Toy Category
                            </p>
                            <input type="text" name="category" placeholder="Toy Category" className="border border-blue-800 p-4 my-2 text-xl rounded text-blue-800 w-2/3"></input>
                        </div>

                    </div>
                    <div className="mx-4 grid grid-col-1 md:grid-cols-2 gap-2">
                        <div className="col my-4">
                            <p className=" text-2xl font-bold ">
                                Rating
                            </p>
                            <input type="text" name="rating" placeholder="Add Rating" className="border border-blue-800 p-4 my-2 text-xl rounded text-blue-800 w-2/3"></input>
                        </div>
                        <div className="col my-4">
                            <p className=" text-2xl font-bold  ">
                                Toy Quantity
                            </p>
                            <input type="text" name="quantity" placeholder="Toy Quantity" className="border border-blue-800 p-4 my-2 text-xl rounded text-blue-800 w-2/3"></input>
                        </div>

                    </div>
                    <input type="submit" value="Submit" name="" className="btn btn-outline btn-primary mx-auto my-4" />
                </div>
               

            </form >

        </div >
    )
};

export default AddAToy;