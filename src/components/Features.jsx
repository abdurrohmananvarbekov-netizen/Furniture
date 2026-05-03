const Features = () => {
  const data = [
    { id: 1, img: "/delivery.svg", title: "Free Delivery", desc: "Lorem ipsum dolor sit amet." },
    { id: 2, img: "/support.svg", title: "Support 24/7", desc: "Lorem ipsum dolor sit amet." },
    { id: 3, img: "/authentic.svg", title: "100% Authentic", desc: "Lorem ipsum dolor sit amet." },
  ];

  return (
    <section className="bg-[#F0F2F5] py-10">
      <div className="max-w-[1260px] mx-auto px-5 flex flex-wrap justify-center gap-10 md:gap-20">
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img src={item.img} alt={item.title} className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-bold text-[#333]">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;