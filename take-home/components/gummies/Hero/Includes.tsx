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
        <section aria-labelledby="includes-heading">
            <h2 id="includes-heading" className="sr-only">Product attributes</h2>
            <ul className="flex flex-wrap gap-2">
                { titles.map(title => (
                    <div key={title} className="flex items-center gap-1 rounded-xl px-3 py-1 bg-white">
                        <HiMiniCheckBadge className="text-pink-500"/>
                        <span className="text-sm">{title}</span>
                    </div>
                ))}
            </ul>
        </section>
    );
}
 
export default Includes;