import footerLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className=" w-full relative overflow-hidden min-h-[95px] sm:min-h-[150px] 
    bg-gray-100 flex justify-center items-center dark:bg-gray-950 
    dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[600px] bg-primary/40 absolute -top-1/3 right-4 rounded-3xl rotate-45 -z[8]"></div>
      <div className="h-[700px] w-[600px] bg-primary/40 absolute -top-1/2 right-3/4 rounded-3xl rotate-45 -z[8]"></div>

      <div className="container mt-12 z-10">
        <div className="grid md:grid-cols-3 pb-11 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              YuppyCart
            </h1>
            <p>
            YuppyCart is committed to offering you a hassle-free and enjoyable 
            online shopping experience from the convenience of your own home. 
            We have a vast selection of products, including fashionable clothing 
            and accessories, to meet your needs. It has never been easier to find 
            what you're looking for.
            </p>
            <p className=" text-gray-500 mt-3">© 2024. All rights reserved.</p>
          </div>

          {/* Footer Links */}
          <div className="mx-12 grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="mx-12 cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              
            </div>

            {/* social links */}

            <div className="mr-12">
              <div className=" flex items-center gap-3 mt-6">
                <a href="https://twitter.com/shadrackssien" target="_blank">
                  <FaTwitter className="text-3xl" />
                </a>
                <a href="https://github.com/Shadrackssien" target="_blank">
                  <FaGithub className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/shadrack-essien/" target="_blank">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Tarkwa, Ghana</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+233557561903</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
