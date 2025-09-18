import BrandContainer from "@/components/insurance/Brands/BrandContainer";
import Disclaimer from "@/components/insurance/Brands/Disclaimer";
import Header from "@/components/insurance/Brands/Header";
import NavLinks from "@/components/insurance/Brands/NavLinks";

const Brands = () => {
    return (
        <div className="bg-blue-100 pt-20 pb-20 flex flex-col gap-7 text-center">
            <div>
                <Header />
                <BrandContainer />
            </div>
            <Disclaimer />
            <NavLinks />
        </div>
    );
}
 
export default Brands;