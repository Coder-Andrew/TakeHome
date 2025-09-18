import Image from "next/image";

interface StarsProps {
    number: number,
    width: number,
    height: number,    
}

const Stars = ({number, width, height}: StarsProps) => {
    return (
        <>
            {[...Array(number)].map((_, i) => (
                <div key={i} className="">
                    <Image 
                        src="/icons/trustpilot-star.png"
                        width={width}
                        height={height}
                        alt="Trustpilot Rating Star"
                    />
                </div>
            ))}
        </>
    );
}
 
export default Stars;