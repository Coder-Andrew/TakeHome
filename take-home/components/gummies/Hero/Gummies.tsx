import Image from "next/image";

const Gummies = () => {
    return (
    <div className="relative w-full max-w-[400px] lg:max-w-[500px] mx-auto">
      <div className="relative h-[300px] lg:h-[400px]">
        <Image
          className="absolute left-0 top-0 z-20 w-[220px] lg:w-[280px] h-auto object-contain"
          src="/icons/gummy-1.svg"
          alt="Nitric Oxide Gummy 1"
          width={280}
          height={320}
        />
        <Image
          className="absolute left-[60px] lg:left-[100px] top-[20px] lg:top-[40px] z-10 w-[180px] lg:w-[240px] h-auto object-contain opacity-90"
          aria-hidden="true"
          src="/icons/gummy-2.svg"
          alt="Nitric Oxide Gummy 2"
          width={240}
          height={280}
        />
      </div>
    </div>
    );
}
 
export default Gummies;