import Stars from "./Stars";
import { FaCheckCircle } from "react-icons/fa";


const Testimonials = () => {
    const testimonials = [
        { title: "The ultimate go-to", age:"2 weeks ago",  name: "Zaire Bator", circleColor: "#F5A623", review: "The signup process was a breeze, and the savings are real. I'm recommending this to everyone!"},
        { title: "Nothing else compares", age:"3 weeks ago",  name: "Jaylon George", circleColor: "#1CA9A6" ,review: "Switching to this insurance saved me money without compromising on service. Highly recommend!"},
        { title: "So simple, anyone can use it", age:"4 days ago",  name: "Chance Siphron", circleColor: "#6B7280", review: "Very helpful customer service and a great price for my van insurance. Saved me $120 a month after shopping around."},
    ];

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n.charAt(0)).join('');
    };

    return (
        // Maybe move off into own component, then iterate
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3 lg:max-w-7xl px-4  mx-auto">
            { testimonials.map(t => (
                <div key={t.name} className="bg-white shadow-lg rounded-xs p-6 border-gray-300/30 border">
                    {/* <span className="pointer-events-none relative -top-2  text-7xl leading-none text-green-600">“</span> */}
                    <div className="relative h-11">
                        <span className="absolute -top-2 -left-1 leading-none text-8xl text-green-600">“</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">
                        {t.title}
                    </h3>
                    <div className="flex mb-2">
                        <Stars number={5} width={20} height={20} />
                        <p className="text-gray-600 font-medium px-2">{t.age}</p>
                    </div>
                    <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                        &quot;
                        {t.review}
                        &quot;
                        </p>
                    <div className="flex items-center gap-3">
                        <div>
                            <svg width={50} height={50} viewBox="0 0 100 100">
                                <circle cx={50} cy={50} r={50} fill={t.circleColor}/>
                                <text
                                    x="50%" y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fontFamily="Helvetica, Arial, sans-serif"
                                    fontSize={50}
                                    fontWeight={500}
                                    fill="000000"                                
                                >
                                    {getInitials(t.name)}
                                </text>
                            </svg>
                        </div>
                        <div className="flex-col">
                            <p className="font-semibold text-gray-800">{t.name}</p>
                            <p className="text-sm font-semibold text-green-600 flex items-center gap-1"><FaCheckCircle /> Verified Buyer</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//   {/* Card 1 */}
//   <div className="bg-white shadow-md rounded-lg p-6">
//     <p className="text-gray-600 mb-4">"The signup process was a breeze, and the savings are real."</p>
//     <div className="flex items-center space-x-3">
//       <div className="h-10 w-10 rounded-full bg-gray-200"></div>
//       <div>
//         <p className="font-semibold text-gray-800">Zaire Bator</p>
//         <p className="text-sm text-green-600">Verified Buyer</p>
//       </div>
//     </div>
//   </div>

//   {/* Repeat for other cards */}
// </div>
    );
}
 
export default Testimonials;