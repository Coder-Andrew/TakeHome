import Image from "next/image";

const ApprovedBy = () => {
    const paths = [
        {path: "/icons/usa.svg", alt: "Manufactured in USA stamp"},
        {path:"/icons/fda.svg", alt: "Made in DFA registered facility stamp"},
        {path:"/icons/gmp.svg", alt: "Good Manufacturing Practices stamp"},
    ];

    return (
        <div className="flex justify-evenly flex-row lg:flex-col">
            {paths.map((img, i) => (
                <Image
                    key={i}
                    src={img.path}
                    alt={img.alt}
                    width={75}
                    height={75}
                />
            ))}
        </div>
    );
}
 
export default ApprovedBy;