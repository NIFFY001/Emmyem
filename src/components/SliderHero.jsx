import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from "../assets/hero.jpeg";
import arc from "/src/assets/arc.svg";
import Btn from "./Btn";

function SliderHero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: " custom-dots ",
  };

  return (
    <div className="container-slide m-auto overflow-hidden h-[85vh] md:h-[90vh]">
      <Slider {...settings}>
        <div className="relative h-[85vh] md:h-[90vh] outline-none">
          <img
            src={hero}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <SlideContent
            title1="Emmyem Agrobiz Limited"
            image={arc}
            content="Where Quality Cocoa Meets Global Standards. We are Committed to Providing World-Class Cocoa Storage, Precision Handling, and Seamless Distribution Solutions That Support Farmers and Elevate Global Standards."
          />
        </div>
        <div className="relative h-[85vh] md:h-[90vh] outline-none">
          <img
            src={hero}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <SlideContent
            title1="Where Quality Cocoa Meets Global Standards"
            image={arc}
            content="Committed to Providing World-Class Cocoa Storage, Precision Handling, and Seamless Distribution Solutions That Support Farmers and Elevate Global Standards."
          />
        </div>
        <div className="relative h-[85vh] md:h-[90vh] outline-none">
          <img
            src={hero}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <SlideContent
            title1="Connecting Cocoa Farmers to Global Markets with Excellence  "
            image={arc}
            content="Empowering Local Producers with Reliable Storage, Expert Handling, and Seamless Distribution Solutions That Meet International Standards."
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderHero;

function SlideContent({ title1, title2, content, image, to }) {
  return (
    <div className="absolute top-0 bg-[#0000007d] h-full w-full">
      <div className="container-w m-auto h-full">
        <div className="text-white px-10 md:ml-14 w-full md:w-[70%] leading-loose lg:w-[50%] h-full flex flex-col justify-center items-start gap-5">
          <div className="flex flex-col">
            <h1 className="text-[25px] md:text-[40px] font-bold">{title1}</h1>
            <img className="w-40 mb-2" src={image} alt="" />
            <h1 className="text-[25px] md:text-[40px] font-bold">{title2}</h1>
          </div>
          <p className="md:text-[17px]">{content}</p>
        </div>
      </div>
    </div>
  );
}
