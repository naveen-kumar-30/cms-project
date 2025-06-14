import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    {
      title: "React Developer Roles in Karur",
      subtitle: "Explore opportunities in Karur's growing tech sector",
    },
    {
      title: "Frontend Positions in Namakkal",
      subtitle: "Join innovative teams in Namakkal working on React projects",
    },
    {
      title: "React Native Jobs in Rasipuram",
      subtitle: "Build cross-platform apps with leading companies in Rasipuram",
    },
    {
      title: "Full-Stack Openings in Salem",
      subtitle: "Contribute to dynamic projects in Salem's IT landscape",
    },
  ];

  return (
    <section className="bg-indigo-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full text-center"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                {slide.title}
              </h1>
              <p className="my-4 text-xl text-white">{slide.subtitle}</p>
            </SwiperSlide>
          ))}
          {/* Pagination Dots Below the Titles */}
          <div className="mt-8">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
