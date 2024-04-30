import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Fashion Men's Hawaiian Ink Print Short Sleeve Beach Button Down T-Shirt Casual Tops",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "Fashion Men's Hawaiian Ink Print Short Sleeve Beach Button Down T-Shirt Casual Tops",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "Fashion Men's Hawaiian Ink Print Short Sleeve Beach Button Down T-Shirt Casual Tops",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-xl mb-3 text-primary">
            Top Rated Products for you
          </p>
          <h1 className="text-4xl font-bold">
            Best Products
          </h1>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-20 md:gap-5 place-items-center mt-5">
          {ProductsData.map((data, index) => (
            <div key={index}>
                <div
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 
              dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 
              group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px] mt-12">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="text-center mt-10 cursor-pointer bg-gradient-to-r from-primary to-secondary 
                  hover:scale-105 duration-200 text-white py-2 px-4 mt-3 rounded-full"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
