import { useLoaderData } from "react-router-dom";


const AllDetail = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-2">

            <div className="col">
                <p className="text-center text-blue-800 text-3xl font-bold  my-12">{data.name} Toy</p>

                {
                    data.toys.map(toy => <div key={toy.rating} className="mx-auto my-4">

                        <div className="mx-auto col card w-96 bg-base-100 shadow-xl ">
                            <figure className="px-10 pt-10">
                                <img src={toy.image} className="rounded-xl h-52" />
                            </figure>
                            <div className="card-body text-2xl text-center">

                                <p>Rating: {toy.rating}</p>
                                <div className="text-red-800 ">
                                    Price= {toy.price}
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <div className="col md:my-auto mx-4">
                <div className="text-center mt-12 mb-4 text-2xl ">
                    <p>Seller name: {data.seller.name}</p>
                    <p>Seller email: {data.seller.email}</p>
                    <p>Available Toys: {data.quantity}</p>
                    <p className="  my-4 text-blue-600 mb-4">{data.toy_description}</p>

                </div>
               


            </div>

        </div>
    );
};

export default AllDetail;