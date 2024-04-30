import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Shadrack Essien",
    text: "I was impressed by the seamless shopping experience on YuppyCart. From browsing through their extensive collection to the swift delivery of my order, everything exceeded my expectations. Will definitely be shopping here again",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Judith Eshun",
    text: "YuppyCart has been my go-to online shopping destination for years now. The variety of products they offer, coupled with their excellent customer service, keeps me coming back every time. Highly recommended!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Belinda Abena Mesu",
    text: "I recently discovered YuppyCart and I'm so glad I did! Their website is user-friendly, their product descriptions are detailed, and their prices are competitive. My order arrived on time and was exactly as described. I couldn't be happier with my shopping experience",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Nana Kwesi Nyamekye",
    text: "YuppyCart truly understands customer satisfaction. Their attention to detail, from product quality to packaging, sets them apart from other online retailers. I've recommended YuppyCart to all my friends and family, and they've all had positive experiences too",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-xl pb-3 text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold">
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data, index) => (
              <div key={index} className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light italic">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
