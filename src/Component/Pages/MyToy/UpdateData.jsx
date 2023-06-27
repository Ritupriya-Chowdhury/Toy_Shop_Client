import { useState } from "react";
// import { useLoaderData } from "react-router-dom";


const UpdateData = () => {
    // const data=useLoaderData();
    const [toyDes, setToyDes] = useState('');
    const [toyPrice, setToyPrice] = useState('');
    const [toyQun, setToyQun] = useState('');

    const handleUpdate = () => {
        const updatedToy = {
            description: toyDes,
            price: toyPrice,
            quantity: toyQun
        };
        console.log(updatedToy);

        // Send the update request to the server
    //     fetch(`https://manga-anime-shop-server.vercel.app/addAToy/${data.id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(updatedToy),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('Toy updated successfully:', data);
    //             // Clear the input fields after a successful update
    //             
    //         })
    //         .catch((error) => {
    //             console.error('Error updating toy:', error);
    //         });
                  setToyDes('');
                setToyPrice('');
                setToyQun('');

     }

    return (

        <div className="mx-8 my-20">

            <div className="card bg-base-100 shadow-xl">
                <div className="mx-4 my-4 grid grid-col-1 md:grid-cols-2 gap-2">


                    <div className="col">
                        <p className=" text-2xl font-bold mx-4">
                            Toy Description
                        </p>
                        <input type="text" name="description" placeholder="Ass Toy Description" className="border border-blue-800 p-4 my-2 text-xl rounded text-blue-800 w-3/4" onChange={(e) => setToyDes(e.target.value)} />
                    </div>
                </div>


                <div className="mx-4 grid grid-col-1 md:grid-cols-2 gap-2">
                    <div className="col my-4">
                        <p className=" text-2xl font-bold ">
                            Price
                        </p>
                        <input type="text" name="price" placeholder="Add Price" className="border border-blue-800 p-4 my-2 text-xl rounded text-blue-800 w-2/3" onChange={(e) => setToyPrice(e.target.value)} />
                    </div>


                </div>


                <div className=" m-4">
                    <p className=" text-2xl font-bold  ">
                        Toy Quantity
                    </p>
                    <input type="text" name="quantity" placeholder="Toy Quantity" className="border border-blue-800 p-4 my-2 text-xl rounded text-blue-800 w-2/3" onChange={(e) => setToyQun(e.target.value)}></input>
                </div>

                <div>
                    <button className="btn btn-outline btn-primary mx-auto my-4" onClick={handleUpdate} >Submit</button>
                </div>
            </div>





          </div>  );
};

            export default UpdateData;