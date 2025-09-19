import { IoShieldCheckmark } from "react-icons/io5";
import { HiMiniCheckBadge } from "react-icons/hi2";

import CTA from "@/components/gummies/Hero/CTA";
import Gummies from "@/components/gummies/Hero/Gummies";
import Headlines from "@/components/gummies/Hero/Headlines";
import Reviews from "@/components/gummies/Hero/Reviews";
import StatsBadge from "@/components/gummies/Hero/StatsBadge";
import Includes from "@/components/gummies/Hero/Includes";
import ApprovedBy from "@/components/gummies/Hero/Approved";
import PromotionBadges from "@/components/gummies/Hero/PromotionBadges";
import MobilePromotionBadges from "@/components/gummies/Hero/MobilePromotionBadges";

const Hero = () => {
return (
    <main className="px-4 py-8 text-black">
    {/* Mobile Layout */}
    <div className="block lg:hidden">
        <div className="flex flex-col items-center space-y-6 bg-white-800 px-3 rounded-2xl py-6">
        {/* Product Image with Badges - Mobile */}        
        <div className="relative w-full max-w-sm -top-14 left-10">
            <Gummies />
            <MobilePromotionBadges />
        </div>

        {/* Reviews - Mobile */}
        <Reviews />

        {/* Headlines - Mobile */}
        <div className="text-center">
            <Headlines />
        </div>

        {/* Description - Mobile */}
        <p className="text-sm text-gray-600 text-center">
            Heart-boosting gummies for daily vitality & overall well-being
        </p>

        {/* CTA - Mobile */}
        <CTA />

        {/* Guarantees - Mobile */}
        <div className="flex flex-col gap-3">
            <StatsBadge icon={IoShieldCheckmark} text="100% Money Back Guarantee" />
            <StatsBadge icon={HiMiniCheckBadge} text="90 Day No-Risk Trial" />
        </div>
                {/* Includes Section - Desktop */}
        <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="font-semibold mb-4 text-lg">Includes</h2>
            <Includes />
        </div>
        </div>
    </div>

    {/* Desktop Layout */}
    <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto bg-white-800 px-3 rounded-2xl py-6">
        <div className="grid grid-cols-3 gap-12 items-center">
            {/* Left Content Section - Desktop */}
            <div className="space-y-6">
            <Reviews />
            <Headlines />
            <p className="text-sm text-gray-600">
                Heart-boosting gummies for daily vitality & overall well-being
            </p>
            <CTA />
            <div className="space-y-3">
                <StatsBadge icon={IoShieldCheckmark} text="100% Money Back Guarantee" />
                <StatsBadge icon={HiMiniCheckBadge} text="90 Day No-Risk Trial" />
            </div>
            </div>

            {/* Center Product Image - Desktop */}
            <div className="relative">
                <Gummies /> 
                <PromotionBadges />
            </div>

            {/* Right Certifications - Desktop */}
            <div className="flex justify-center">
                <ApprovedBy />
            </div>
        </div>

        {/* Includes Section - Desktop */}
        <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="font-semibold mb-4 text-lg">Includes</h2>
            <Includes />
        </div>
        </div>
    </div>
    </main>
);
};

export default Hero;