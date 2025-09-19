import Testimonials from "@/components/insurance/Reviews/Testimonials";
import TrustPilot from "@/components/insurance/Reviews/Trustpilot";

const Reviews = () => {
    return (
        <section className="bg-white pt-10 pb-40">
            <TrustPilot />
            <Testimonials />
        </section>
    );
}
 
export default Reviews;