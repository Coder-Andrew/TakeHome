'use client'

import Image from "next/image";

const CallNow = () => {
    const handleClick = () => {
        console.log("cta_click");
    };

    return (
        <button 
            className="text-sm rounded-md bg-green-500 inline-flex gap-2 px-25 py-4 font-semibold shadow-[0_0_15px_3px_rgba(34,197,94,0.25)] hover:shadow-[0_0_25px_6px_rgba(34,197,94,0.8)] transition"
            onClick={handleClick}
        >
            Call Now
            <Image 
                src="/icons/call-outbound.svg"
                width={12}
                height={12}
                alt="Outbound Phone Call"
            />
        </button>
    );
}
 
export default CallNow;