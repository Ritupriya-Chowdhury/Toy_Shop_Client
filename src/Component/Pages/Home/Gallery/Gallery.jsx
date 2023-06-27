import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const Gallery = () => {
    const [toysPic, setToysPic]=useState([]);

    useEffect(()=>{
        fetch('gallery.json')
        .then(res=>res.json())
        .then(data=>setToysPic(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div>
            <p className="text-center font-bold text-3xl text-blue-800 italic my-4">Toys Gallery</p>
           <div>
            {
                toysPic.map(manga=> <div key={manga.id} className="mx-8  my-4 p-4 border-2 border-black">
                    <p className="text-2xl font-semibold text-blue-800 my-4 ">{manga.name}</p>
                    <Marquee speed={20}>
                        {
                            manga.figureToys.map(toy=> <div key={toy.id} className=" mx-4 border border-red-600 rounded">
                           <img src={toy.image} alt="" className="w-52 h-48  border border-blue-600 rounded m-4" />
                           <p className="text-center mb-2 text-xl mx-2 font-bold text-blue-600">{toy.name}</p>
                            </div>)
                        }
                    </Marquee>
                </div>)
            }
           </div>
        </div>
    );
};

export default Gallery;