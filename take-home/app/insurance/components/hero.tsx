import BrandBadge from "@/components/insurance/Hero/BrandBadge";
import CallBack from "@/components/insurance/Hero/CallBack";
import CallNow from "@/components/insurance/Hero/CallNow";
import HeroHeading from "@/components/insurance/Hero/HeroHeading";

const Hero = () => {
    return ( 
        <main className="bg-green-800 pb-20 text-center">
            <div className="pt-6 sm:pt-10 flex flex-col items-center text-center space-y-5 sm:space-y-6">
                <BrandBadge />
                <HeroHeading />
            </div>
            <div className="w-full mb-15">
                <CallNow />
            </div>
            <div className="px-3">
                <CallBack />
            </div>
        </main>
    );
}
 
export default Hero;