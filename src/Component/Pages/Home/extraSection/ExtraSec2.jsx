import AOY from '../../../../assets/Images/animeOfYear.webp'
import AMOY from '../../../../assets/Images/AMOY.webp'
import BAOY from '../../../../assets/Images/ANIMATION.webp'
import CAOY from '../../../../assets/Images/COMEDY.webp'


import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const ExtraSec2 = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS library
    }, []);
    return (
        <div className="col border border-blue-600 my-4">
            <p className="text-center my-4 text-xl font-bold text-blue-800">Animation Award News</p>
            <div className=" border border-black p-4 m-4">
                <p className='text-center text-blue-800 font-bold text-2xl my-8 ' data-aos="fade-left" data-aos-duration="1000">Anime of the Year</p>
                <p className="text-slate-500 m-2 my-4 " data-aos="fade-up"
                    data-aos-duration="1000 " >This category received votes from 82,306 people, and the results are not surprising, but they are quite interesting. Attack on Titan has taken the top spot, with Bleach coming in second. The top four series ranked are all sequels, making Cyberpunk: Edgerunners the best new anime of 2022.</p>
                <img src={AOY} alt="" className='h-72 mx-auto my-8' data-aos="fade-down" data-aos-duration="1000" />

            </div>
            <div className=" border border-black p-4 m-4">
                <p className='text-center text-blue-800 font-bold text-2xl my-8' data-aos="fade-left" data-aos-duration="1000">Anime Movie of the Year</p>
                <p className="text-slate-500 m-2 my-4 " data-aos="fade-up"
                    data-aos-duration="1000 " >This category received votes from 31,150 people, with a significant gap between the top two positions. Jujutsu Kaisen 0 has taken the top spot, followed by The Quintessential Quintuplets‘ finale in the second and the newest One Piece film in the third.</p>
                <img src={AMOY} alt="" className='h-72 mx-auto my-8' data-aos="fade-down" data-aos-duration="1000" />

            </div>
            <div className=" border border-black p-4 m-4">
                <p className='text-center text-blue-800 font-bold text-2xl my-8 ' data-aos="fade-left" data-aos-duration="1000">Best Animation of the Year</p>
                <p className="text-slate-500 m-2 my-4 " data-aos="fade-up"
                    data-aos-duration="1000 " >This category received votes from 48,206 people, with Demon Slayer: Kimetsu no Yaiba – Entertainment District Arc and BOCCHI THE ROCK! finishing first and second, respectively.The difference in votes between the top two positions is less than 0.15%, which is incredible given how different the genres are. All of the nominees delivered a unique animation style, which definitely made them more enjoyable to watch.</p>
                <img src={BAOY} alt="" className='h-72 mx-auto my-8' data-aos="fade-down" data-aos-duration="1000" />

            </div>
            <div className=" border border-black p-4 m-4">
                <p className='text-center text-blue-800 font-bold text-2xl my-8 ' data-aos="fade-left" data-aos-duration="1000">Comedy Anime of the Year</p>
                <p className="text-slate-500 m-2 my-4 " data-aos="fade-up"
                    data-aos-duration="1000 " >This category received votes from 40,074 people, with SPY x FAMILY taking first place, followed by Kaguya-sama and BOCCHI THE ROCK!. The top three, as well as the other nominations, made us laugh a lot and are definitely worth watching if you like comedy shows.</p>
                <img src={CAOY} alt="" className='h-72 my-8 mx-auto' data-aos="fade-down" data-aos-duration="1000" />

            </div>



        </div>
    );
};

export default ExtraSec2;