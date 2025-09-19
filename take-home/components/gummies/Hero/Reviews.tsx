import Image from "next/image";
import { FaStar } from "react-icons/fa";


const Reviews = () => {
    const images = [
        "/portraits/port-1.svg",
        "/portraits/port-2.svg",
        "/portraits/port-3.svg",
        "/portraits/port-4.svg",
    ];

    const width = 35;

    return (
        <figure className="flex items-center gap-3">
            <div className="flex relative">
                {images.map((img, i) => (                
                    <Image 
                        key={i}
                        src={img}
                        width={width}
                        height={width}
                        alt="Reviewer Portrait"
                        className={i === 0 ? "" : "-ml-3"}
                    />
                ))}
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <div className="flex" aria-hidden="true">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400"/>
                        ))}
                    </div>
                    <p className="text-black">4.8</p>
                </div>
                <div>
                    <p className="text-gray-700 text-xs">+ 1,200 with Verified Reviews</p>
                </div>
            </div>
        </figure>
    );
}
 
export default Reviews;