import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 20% off on all Men's Wear",
    description:
      "Looking to save on men's fashion? We can help with 20% discounts. Whether you are looking for a suit, wardrobe essentials, or pyjamas, we offer discounts with leading retailers and brands so you can get the look for less.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Take a look at our women's clothing sale, where you can find a great variety of products at discounted prices. You can update your casual wardrobe with our women's t-shirt sale, stay cozy during winter with our women's jacket sale, or find the perfect home comforter from our women's hoodie sale.",
  },
  {
    id: 3,
    img: Image3,
    title: "50% off on all Products Sale",
    description:
      "YuppyCart provides a range of high-quality men's and women's clothing and accessories that are both ready-to-wear and made-to-measure. We stock clothing and accessories from 20 top luxury brands. Currently, we are offering a 50% discount on all of our products.",
  },
];

const Hero = ({handleOrderPopup}) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] 
    bg-gray-100 flex justify-center items-center dark:bg-gray-950 
    dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-4 rounded-3xl rotate-45 -z[8]"></div>
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-3/4 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data, index) => (
             <div key={index}>
             <div className="grid grid-cols-1 sm:grid-cols-2">
                 {/* text content section */}
                 <div className="flex flex-col justify-center gap-4 pt-12 
                 sm:pt-0 text-center sm:text-left order-2 sm:order-1 
                 relative z-10">
                     <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                        {data.title}
                    </h1>
                     <p className="text-sm">
                         {data.description}
                     </p>
                     <div>
                         <button onClick={handleOrderPopup}
                         className="bg-gradient-to-r from-primary to-secondary 
                         hover:scale-105 duration-200 text-white py-2 px-4 mt-3 rounded-full">
                             Order Now
                         </button>
                     </div>
                 </div>
                  {/* image section */}
                  <div className="order-1 sm:order-2">
                   <div
                     data-aos="zoom-in"
                     data-aos-once="true"
                     className="relative z-10"
                   >
                    <img src={data.img} alt=""
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] 
                    sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                   </div>
                 </div>
 
             </div>
         </div> 
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
