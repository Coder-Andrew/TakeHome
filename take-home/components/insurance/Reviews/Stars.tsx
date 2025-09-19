import Image from "next/image";

type StarsProps = {
    number: number,
    width: number,
    height: number,
    className?: string,
}

const Stars = ({number, width, height, className}: StarsProps) => {
    return (
        <div aria-hidden="true" className={`flex ${className}`}>
            {[...Array(number)].map((_, i) => (
                <div key={i}>
                    <Image 
                        src="/icons/trustpilot-star.png"
                        width={width}
                        height={height}
                        alt="Trustpilot Rating Star"
                    />
                </div>
            ))}
        </div>
    );
}
 
export default Stars;