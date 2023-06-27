import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";
import ExtraSec1 from "../extraSection/ExtraSec1";
import ExtraSec2 from "../extraSection/ExtraSec2";


const HOme = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-8 gap-4" >
                <ExtraSec1></ExtraSec1>
                <ExtraSec2></ExtraSec2>
            </div>
        </div>
    );
};

export default HOme;