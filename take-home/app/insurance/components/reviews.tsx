import Testimonials from "@/components/insurance/Reviews/Testimonials";
import TrustPilot from "@/components/insurance/Reviews/Trustpilot";

const Reviews = () => {
    return (
        <div className="bg-white pt-10 pb-40">
            <TrustPilot />
            <Testimonials />
        </div>
    );
}
 
export default Reviews;