import BrandBadge from "@/components/insurance/BrandBadge";
import CallBack from "@/components/insurance/CallBack";
import CallNow from "@/components/insurance/CallNow";
import HeroHeading from "@/components/insurance/HeroHeading";
import Image from "next/image";

const Hero = () => {
    return ( 
        <section className="bg-green-900 text-center font-white">
            <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(55%_35%_at_50%_10%,black,transparent)] bg-emerald-700/40" />
            <div className="py-6 sm:py-10 flex flex-col items-center text-center space-y-5 sm:space-y-6">
                <BrandBadge />
                <HeroHeading />
            </div>
            <div className="w-full">
                <CallNow />
            </div>
            <div className="w-full">
                <CallBack />
            </div>
        </section>
    );
}
 
export default Hero;