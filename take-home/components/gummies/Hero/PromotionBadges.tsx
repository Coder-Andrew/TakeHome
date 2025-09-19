import CircleBadge from "./CircleBadge";

const PromotionBadges = () => {
    return (
        <section aria-labelledby="promo-heading">
            <h2 id="promo-heading" className="sr-only">Promotional offers</h2>
            <CircleBadge
                size={100}
                rotateDeg={15}
                className="absolute bottom-16 left-30 z-21"
                title="That's only $0.71 a day"
            >
                <div className="flex flex-col items-center leading-none text-center">
                  <span className="text-xs font-semibold opacity-90">That&apos;s only</span>
                  <span className="text-3xl font-extrabold tracking-tight">$0.71</span>
                  <span className="text-xs font-semibold opacity-90">A Day!</span>
                </div>
            </CircleBadge>              
            <CircleBadge
            size={60}
            rotateDeg={15}
            bgClass="bg-pink-500"
            textClass="text-white"
            ringClass="ring-2 ring-pink-600/30"
            className="absolute bottom-30 right-30 z-22"
            title="Free bottle offer"
            >
                <div className="text-center leading-tight">
                  <div className="text-sm font-extrabold">FREE</div>
                  <div className="text-xs font-semibold opacity-90">bottle</div>
                </div>
            </CircleBadge>
        </section>
    );
}
 
export default PromotionBadges;