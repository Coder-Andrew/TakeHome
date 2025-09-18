import Image from "next/image";

const CallNow = () => {
    return (
        <button className="text-sm rounded-md bg-green-500 inline-flex gap-2 px-10 py-1 font-semibold shadow-[0_0_15px_3px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_6px_rgba(34,197,94,0.8)] transition">
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