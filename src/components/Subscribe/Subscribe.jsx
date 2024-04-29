const BannerImg = {
  backgroundImage: `url(https://i.pinimg.com/564x/ef/7d/3d/ef7d3d425a6f0cee968a40fd041aed76.jpg)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
       <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <div className="flex gap-3">
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 text-black dark:text-white outline-none"
          />
          <button className="bg-gradient-to-r from-primary to-secondary transition-all
                hover:scale-105 duration-200 text-white py-1 px-4 rounded-full
                flex items-center gap-3 group">
            Subscribe
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
