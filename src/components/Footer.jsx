const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Newsletter */}
      <div className="bg-[#F0F2F5] py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Mailing List</h2>
        <p className="text-gray-500 mb-8">Sign up to receive inspiration, product updates, and special offers.</p>
        <div className="max-w-md mx-auto flex overflow-hidden rounded-lg shadow-md">
          <input type="email" placeholder="example@gmail.com" className="flex-1 p-4 outline-none border-none" />
          <button className="bg-[#05445E] text-white px-8 font-bold">Submit</button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#032d3f] text-white py-20 px-5">
        <div className="max-w-[1260px] mx-auto flex flex-col md:flex-row gap-20">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6">Beauty Care</h3>
            <p className="text-gray-400 mb-6">Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h4 className="font-bold text-xl mb-4">Follow Us</h4>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-8">Instagram Shop</h3>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`/insta${i}.jpg`} className="w-full aspect-square object-cover rounded-md hover:opacity-75 cursor-pointer transition-all" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;