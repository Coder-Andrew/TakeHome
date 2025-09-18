import BrandBadge from "@/components/insurance/Hero/BrandBadge";
import CallBack from "@/components/insurance/Hero/CallBack";
import CallNow from "@/components/insurance/Hero/CallNow";
import HeroHeading from "@/components/insurance/Hero/HeroHeading";

const Hero = () => {
    return ( 
        <section className="bg-green-800 min-h-screen text-center">
            {/* <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(55%_35%_at_50%_10%,black,transparent)] bg-emerald-700/40" /> */}
            <div className="py-6 sm:py-10 flex flex-col items-center text-center space-y-5 sm:space-y-6">
                <BrandBadge />
                <HeroHeading />
            </div>
            <div className="w-full mb-5">
                <CallNow />
            </div>
            <div className="mb-5">
                <CallBack />
            </div>
        </section>
    );
}
 
export default Hero;