import Image from "next/image";

const Logo = () => {
    return (
        <div className="sticky top-0 h-14 z-50">
            <div className="sticky z-50 py-2 bg-white">
                <Image
                    className="mx-auto"
                    src="/logos/snap.svg"
                    alt="SNAP Logo"
                    width={70}
                    height={50}
                />
            </div>
        </div>
    );
}
 
export default Logo;