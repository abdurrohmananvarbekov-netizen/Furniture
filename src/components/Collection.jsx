const Collection = () => {
  const cats = [
    { name: "Dining", img: "/dining.png" },
    { name: "Living", img: "/living.png" },
    { name: "Bedroom", img: "/bedroom.png" },
  ];

  return (
    <section className="py-20 max-w-[1260px] mx-auto px-5">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#333]">Browse The Range</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cats.map((cat) => (
          <div key={cat.name} className="text-center group cursor-pointer">
            <div className="overflow-hidden rounded-[60px]">
              <img src={cat.img} alt={cat.name} className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;