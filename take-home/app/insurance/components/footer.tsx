import BrandContainer from "@/components/insurance/Footer/BrandContainer";
import Disclaimer from "@/components/insurance/Footer/Disclaimer";
import Header from "@/components/insurance/Footer/Header";
import NavLinks from "@/components/insurance/Footer/NavLinks";

const Footer = () => {
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
 
export default Footer;