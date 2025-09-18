import Testimonials from "@/components/insurance/Reviews/Testimonials";
import TrustPilot from "@/components/insurance/Reviews/Trustpilot";

const Reviews = () => {
    return (
        <div className="bg-white py-8 sm:py-12 md:py-16">
            <TrustPilot />
            <Testimonials />
        </div>
    );
}
 
export default Reviews;