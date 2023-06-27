
import DmS from '../../../../assets/Images/demonSlayer.jpg';
import JJK from '../../../../assets/Images/JujutsuKaisen.jpg';
import Naru from '../../../../assets/Images/naruto.jpg';
import Oshi from '../../../../assets/Images/oshinoko.jpg';



const Banner = () => {

  return (
    <div className="carousel w-full">
      
      <div id="slide1" className="carousel-item relative w-full m-8 h-2/5">
        <img src={Oshi} className="w-3/4 mx-auto h-96" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4">

          <a href="#slide4" className="btn btn-circle">❮</a>
          <p className='font-bold text-blue-700 text-4xl mt-20 '>Oshi No ko</p>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full m-8 h-2/5">
        <img src={DmS} className="w-3/4 mx-auto h-96" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4">

          <a href="#slide1" className="btn btn-circle">❮</a>
          <p className='font-bold text-white text-4xl mt-12 md:mt-20'>Demon Slayer</p>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full m-8 h-2/5">
        <img src={JJK} className="w-3/4 mx-auto h-80" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4">

          <a href="#slide2" className="btn btn-circle">❮</a>
          <p className='font-bold text-blue-600 text-4xl mt-12 md:mt-20'>Jujutsu Kaisen</p>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full m-8 h-2/5">
        <img src={Naru} className="w-3/4 mx-auto h-96" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4">

          <a href="#slide3" className="btn btn-circle">❮</a>
          <p className='font-bold text-blue-800 text-4xl mt-20'><span className='text-orange-600'>Nar</span>uto</p>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;