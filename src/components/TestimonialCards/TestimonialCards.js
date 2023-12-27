

function TestimonialCard() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative p-10 bg-[#F4D1AE] w-full max-w-4xl mx-auto my-8 shadow-lg">
                <div className="absolute top-0 left-0 ml-4 mt-4">
                    <div className="w-16 h-1 bg-black animate-slideInFromLeft" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-12 h-1 bg-black mt-2 animate-slideInFromLeft" style={{animationDelay: '0.7s'}}></div>
                    <div className="w-8 h-1 bg-black mt-2 animate-slideInFromLeft" style={{animationDelay: '0.9s'}}></div>
                </div>
                <div className="absolute top-0 right-0 mr-4 mt-4">
                    <div className="w-24 h-24 bg-pink-500 rounded-full animate-expand" style={{animationDelay: '1s'}}></div>
                    <div className="w-16 h-16 bg-green-300 rounded-full absolute right-0 bottom-0 mr-5 mb-5 animate-expand" style={{animationDelay: '1.2s'}}></div>
                </div>
                <blockquote className="text-2xl font-bold text-center">
                    “TurboWeb demuestra que conocen el arte de la sutileza.”
                </blockquote>
                <p className="text-center mt-4 font-semibold">webflow</p>
            </div>
        </div>
    );
}

export default TestimonialCard