import { IoIosArrowRoundForward } from "react-icons/io";

const CTA = () => {
    return (
        <div>
            <button
                className="text-sm bg-pink-500 inline-flex items-center text-white px-15 lg:w-11/12 py-3 rounded-xl justify-center"
            >
                Order Now
                <IoIosArrowRoundForward aria-hidden="true" focusable="false" size={25}/>
            </button>
        </div>
    );
}
 
export default CTA;