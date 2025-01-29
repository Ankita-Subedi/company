import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Carousel({Title, img1, img2, img3, img4, img5, img6, img7, img8}) {
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
        {Title}
      </p>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" className="w-40 md:w-48 lg:h-auto lg:w-48" />
        </div>
        <div>
          <img src={img2} alt="" className="w-40 md:w-48 h-auto lg:w-48" />
        </div>
        <div>
          <img src={img3} alt="" className="w-40 md:w-48 h-auto lg:w-48" />
        </div>
        <div>
          <img src={img4} alt="" className="w-40 md:w-48 h-auto lg:w-48" />
        </div>
        <div>
          <img src={img5} alt="" className="w-40 md:w-48 h-auto lg:w-48" />
        </div>
        <div>
          <img src={img6} alt="" className="w-40 md:w-48 h-auto lg:w-48" />
        </div>
        <div>
          <img src={img7} alt="" className="w-40 md:w-52 h-auto lg:w-48" />
        </div>
        <div>
          <img src={img8} alt="" className="w-40 md:w-52 h-auto lg:w-48" />
        </div>
      </Slider>
    </div>
  );
}
