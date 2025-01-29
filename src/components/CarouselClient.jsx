import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bravo from "../assets/clients/bravo.jpg"
import chandika from "../assets/clients/chandika.jpg"
import finacc from "../assets/clients/finacc.jpg"
import prowess from "../assets/clients/prowess.jpg"

export default function CarouselClient() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides by default
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Slide every 2 seconds
    responsive: [
      {
        breakpoint: 1024, // Tailwind's lg breakpoint
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Tailwind's md breakpoint
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 overflow-x-hidden overflow-y-hidden margin">
      <p className="text-center text-2xl md:text-4xl font-bold mb-4 text-blue-950">
        Our Clients
      </p>
      <Slider {...settings}>
        <div>
          <img src={bravo} alt="" className="w-40 md:w-48 lg:h-auto lg:w-48" />
        </div>
        <div>
          <img src={chandika} alt="" className="w-40 md:w-48 h-auto lg:w-48" />
        </div>
        <div>
          <img src={finacc} alt="" className="w-40 md:w-48 h-auto lg:w-48" />
        </div>
        <div>
          <img src={prowess} alt="" className="w-40 md:w-48 h-auto lg:w-48" />
        </div>
      </Slider>
    </div>
  );
}
