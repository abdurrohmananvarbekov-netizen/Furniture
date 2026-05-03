import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">

            <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: -1 }}
            />
            <div className="max-w-[1260px] mx-auto px-5 h-full flex items-center justify-end">
                <div className="bg-[#DFE9F4] p-10 md:p-14 max-w-[550px] rounded-lg shadow-sm">

                    <span className="text-sm font-bold tracking-widest text-gray-700 uppercase">
                        New Arrival
                    </span>

                    <h2 className="text-5xl font-bold text-[#05445E] mt-4 mb-6 leading-[1.1]">
                        Discover Our <br /> New Collection
                    </h2>

                    <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>

                    <button className="bg-[#05445E] text-white px-10 py-4 font-bold rounded-[50px]
            hover:bg-opacity-90 transition-all uppercase text-sm cursor-pointer">
                        Buy Now
                    </button>

                </div>
            </div>

        </section>
    );
};

export default Hero;