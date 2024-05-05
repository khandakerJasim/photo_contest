//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {/* 1st slide */}
      <div className="relative">
        <img
          className="w-full h-[350px] md:h-[750px]"
          src="https://img.freepik.com/free-photo/camera-photographic-with-smartphone-devices-generative-ai_188544-12171.jpg?size=626&ext=jpg&ga=GA1.2.834674141.1685085168&semt=robertav1_2_sidr"
          alt=""
        />
        <div className="w-[100%] h-[100%] top-0 left-0 absolute flex opacity-100 items-center justify-center flex-col">
          <h1 className="text-center text-white text-6xl tracking-[16px] font-bold mt-[250px]">
            hello
          </h1>
          <p className="text-center text-2xl font-semibold my-1 text-white">
            Join over Photographers and get Photo Contest Updates Delivered
            Weekly.
          </p>
          <p className="text-center text-lg text-white">
            The world’s largest collection of photo contests and photography
            competitions – Hand-picked for photographers of all levels.
            <br />
            Get the best photo contests and competitions from around the world
            delivered weekly!
          </p>
        </div>
      </div>
      {/* 2nd slide */}
      <div className="relative">
        <img
          className="w-full h-[350px] md:h-[750px]"
          src="https://img.freepik.com/free-photo/backpacker-relax-mountain-with-camera-adn-sunset_1150-7755.jpg?size=626&ext=jpg&ga=GA1.1.834674141.1685085168&semt=robertav1_2_sidr"
          alt=""
        />
        <div className="w-[100%] h-[100%] top-0 left-0 absolute flex opacity-100 items-center justify-center flex-col">
          <h1 className="text-center text-white text-6xl tracking-[16px] font-bold mt-[250px]">
            hello
          </h1>
          <p className="text-center text-2xl font-semibold my-1 text-white">
            Join over Photographers and get Photo Contest Updates Delivered
            Weekly.
          </p>
          <p className="text-center text-lg text-white">
            The world’s largest collection of photo contests and photography
            competitions – Hand-picked for photographers of all levels.
            <br />
            Get the best photo contests and competitions from around the world
            delivered weekly!
          </p>
        </div>
      </div>
      {/* 3rd slide */}
      <div className="relative">
        <img
          className="w-full h-[350px] md:h-[750px]"
          src="https://img.freepik.com/free-photo/vinatge-camera-with-bokeh-nature-blackground_1150-18221.jpg?size=626&ext=jpg&ga=GA1.1.834674141.1685085168&semt=robertav1_2_sidr"
          alt=""
        />
        <div className="w-[100%] h-[100%] top-0 left-0 absolute flex opacity-100 items-center justify-center flex-col">
          <h1 className="text-center text-white text-6xl tracking-[16px] font-bold mt-[250px]">
            hello
          </h1>
          <p className="text-center text-2xl font-semibold my-1 text-white">
            Join over Photographers and get Photo Contest Updates Delivered
            Weekly.
          </p>
          <p className="text-center text-lg text-white">
            The world’s largest collection of photo contests and photography
            competitions – Hand-picked for photographers of all levels.
            <br />
            Get the best photo contests and competitions from around the world
            delivered weekly!
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
