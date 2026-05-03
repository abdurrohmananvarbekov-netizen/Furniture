const Steps = () => {
  const steps = [
    { n: "1.", title: "Purchase Securely", img: "/step1.jpg" },
    { n: "2.", title: "Ships From Warehouse", img: "/step2.jpg" },
    { n: "3.", title: "Style Your Room", img: "/step3.jpg" },
  ];

  return (
    <section className="py-20 max-w-[1260px] mx-auto px-5">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#333]">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((s) => (
          <div key={s.n} className="text-center relative">
            <div className="relative inline-block mb-6">
               <img src={s.img} alt={s.title} className="w-full h-80 object-cover rounded-2xl" />
               <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold border-4 border-white">
                 {s.n}
               </span>
            </div>
            <h3 className="mt-4 font-bold text-lg text-[#333]">{s.title}</h3>
            <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;