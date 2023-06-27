import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

const ExtraSec1 = () => {
    const [descriptions, setDescriptions] = useState([]);

    useEffect(() => {
        fetch('shortStory.json')
            .then(res => res.json())
            .then(data => setDescriptions(data))
            .catch(error => console.error(error))
    }, []);

    useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

    return (
        <div className="col border border-blue-600  my-4" >
            <p className="text-center my-4 text-xl font-bold text-blue-800">Information About Manga</p>
            {
                descriptions.map(description => <div key={description.id} className=" border border-black p-4 m-4" >
                    <img src={description.image} alt="" className="w-1/2 mx-auto my-2" data-aos="fade-up" data-aos-duration="1000" />
                    <p className="text-blue-800 font-bold text-center text-xl my-4" data-aos="fade-left" data-aos-duration="500" >{description.name}</p>
                    <div className="text-slate-500 m-2 " data-aos="fade-right"
          data-aos-duration="1000">{description.description}</div>

                </div>)
            }
        </div>
    );
};

export default ExtraSec1;