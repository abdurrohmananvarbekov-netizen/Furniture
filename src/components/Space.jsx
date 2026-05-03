const Space = () => {
  return (
    <section className="bg-[#F2F5FF] py-20 overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-5 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-[#333] mb-6">Beautify Your Space</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <button className="bg-[#05445E] text-white px-10 py-4 rounded-full font-bold hover:bg-[#032d3f] transition-all shadow-lg">
            LEARN MORE
          </button>
        </div>
        <div className="flex-1 relative">
          <img src="/girl.svg" alt="Space" className="rounded-tl-[100px] rounded-br-[100px] w-[400px] shadow-2xl" />
          <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-[#05445E] -z-10 rounded-full opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Space;