import React from 'react';

const Collection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1260px] mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#333] mb-4">Inspiration Collection</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          <div className="h-[500px] overflow-hidden rounded-tl-[100px]">
            <img 
              src="/collection1.png" 
              alt="Inspiration 1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* O'rtadagi rasm - oddiy to'rtburchak (yoki hamma burchagi bir xil) */}
          <div className="h-[600px] overflow-hidden rounded-xl shadow-lg">
            <img 
              src="/collection2.png" 
              alt="Inspiration 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* O'ngdagi rasm - pastki o'ng burchagi aylana */}
          <div className="h-[500px] overflow-hidden rounded-br-[100px]">
            <img 
              src="/collection3.png" 
              alt="Inspiration 3" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Collection;