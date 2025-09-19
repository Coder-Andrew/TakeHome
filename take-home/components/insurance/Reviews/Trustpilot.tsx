import Stars from "./Stars";

const TrustPilot = () => {
    return (
        <section aria-labelledby="reviews-heading" className="flex flex-col items-center md:justify-around md:flex-row md:items-start pb-5">
            <div className="px-4">
                <div className="mb-8 sm:mb-12">
                    <div className="text-center mb-6 sm:mb-0 sm:text-left">
                        <h2 id="reviews-heading" className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Customer Reviews</h2>
                        <p className="text-gray-600 text-sm sm:text-base mb-4">Real feedback from real drivers. Learn how we&apos;ve helped our customers save on auto insurance.</p>

                        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-black-600 px-2 py-1 rounded text-xs sm:text-sm font-semibold">Excellent</span>
                                <div className="flex space-x-1">                                    
                                    <Stars number={5} height={20} width={20} className="flex"/>
                                    <span className="text-xs sm:text-sm text-black-600"><span className="font-bold">436 </span>reviews on</span>
                                    <span className="text-xs sm:text-sm font-semibold text-gray-800 flex flex-row">
                                        <Stars number={1} height={20} width={20} />
                                        Trustpilot
                                    </span>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-start justify-center flex-col sm:justify-end space-x-2 mt-4 sm:mt-0">
                <div className="flex items-end">
                        <Stars number={1} width={50} height={50} />
                        <h1 className="text-3xl sm:text-2xl font-bold text-gray-800">Trustpilot</h1>
                </div>
                    <div className="ml-2 sm:ml-4 flex items-center gap-2">
                        <div className="text-xs sm:text-sm font-semibold text-gray-800">FIVE STAR REVIEWS</div>
                        <div className="flex space-x-1">
                            <Stars number={5} height={20} width={20} />
                        </div>
                        <span className="sr-only">Five stars</span>
                    </div>
                </div>
            </section>
    );
}
 
export default TrustPilot;