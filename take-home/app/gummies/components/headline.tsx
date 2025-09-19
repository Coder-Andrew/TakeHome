import { IoIosArrowRoundDown } from "react-icons/io";


const Headline = () => {
    return (
        <div className="flex flex-col items-center gap-5">
            <div className="uppercase text-black text-center font-bold">
                <h1>Boost your heart</h1>
                <h1>Health & Energy With</h1>
                <h1 className="text-pink-500">Nitric Oxide Gummies</h1>
            </div>
            <div>
                <button className="text-pink-500 text-2xl h-10 w-10 flex items-center justify-center rounded-full border-1 transition">
                    <IoIosArrowRoundDown />
                </button>
            </div>
        </div>
    );
}
 
export default Headline;