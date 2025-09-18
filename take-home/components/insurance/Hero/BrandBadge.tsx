import Image from "next/image";

const BrandBadge = () => {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md">
            <Image 
                src="/icons/shield-car.svg"
                alt="Shield with car"
                width={32}
                height={32}
                className="h-8 w-8"
            />
            <p>
                Civil Car
            </p>
            <span className="text-green-700">Policy</span>
        </div>
    );
}
 
export default BrandBadge;