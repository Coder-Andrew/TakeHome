import CTASupport from "./components/ctasupport";
import Headline from "./components/headline";
import Hero from "./components/hero";
import Logo from "./components/logo";

const page = () => {
    return (
        <div className="bg-white pt-10 mx-auto">
            <Logo />
            <Headline />
            <Hero />
            <CTASupport />
        </div>
    );
}
 
export default page;