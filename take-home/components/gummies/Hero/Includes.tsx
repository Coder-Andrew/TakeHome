import { HiMiniCheckBadge } from "react-icons/hi2";

const Includes = () => {
    const titles = [
        "Free of Big 9 Allergens",
        "Vegan",
        "Soy Free",
        "Caffeine Free",
        "100% Drug Free",
        "Non GMO",
        "Gluten Free"
    ]

    return (
        <div className="flex flex-wrap gap-2">
            { titles.map(title => (
                <div key={title} className="flex items-center gap-1 rounded-xl px-3 py-1 bg-white">
                    <HiMiniCheckBadge className="text-pink-500"/>
                    <span className="text-sm">{title}</span>
                </div>
            ))}
        </div>
    );
}
 
export default Includes;