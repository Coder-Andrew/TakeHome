import Image from "next/image";

const Features = () => {
      const features = [
        {
            imgPath: "/icons/gummy-feature-1.svg",
            imgAlt: "Image indicating nutritional boost",
            title: "Daily Nutrition Boost",
            description: "Nutrient-rich gummies packed with essential vitamins and minerals for daily energy and vitality.*",
        },
        {            
            imgPath: "/icons/gummy-feature-2.svg",
            imgAlt: "Image indicating heart health support",
            title: "Supports Heart Health",
            description: "A blend of antioxidants and nitric oxide to boost circulation and promote a heart-friendly lifestyle.*",
        },
        {
            imgPath: "/icons/gummy-feature-3.svg",
            imgAlt: "Image indicating vitality and energy boost",
            title: "Supports Healthy Digestion",
            description: "With turmeric, beets, kale, and broccoli, these gummies aid detoxification and liver health.*",
        },
    ]


    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid sm:grid-cols-1 px-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 text-left space-y-4 border-1 rounded-4xl shadow-sm">
                            <div className="flex justify-left">
                                <Image 
                                    src={feature.imgPath}
                                    alt={feature.imgAlt}
                                    width={46}
                                    height={46}
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Features;