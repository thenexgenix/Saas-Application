import img1 from "../../assets/About Us/person (1).jpg";
import img2 from "../../assets/About Us/person (2).jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Review() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reviews = [
    {
      title: "Sasency is Rank Number #1 SAAS Agency!",
      description:
        "My over-all experience was very good with Sasency. I enjoyed their services. They are very cool and helpful teams. We will work again. Best of luck the for Sasency service.",
      author: "Evin Lara",
      role: "CEO at Aeroland",
      rating: 5,
      image: img1,
    },
    {
      title: "Great Design!",
      description:
        "I’m very helped in making a website and business development that makes the product that I have to have a quality for use by the user",
      author: "Mang Oleh",
      role: "Product Designer",
      rating: 5,
      image: img2,
    },
    {
      title: "Amazing Support!",
      description:
        "The support team was incredible, helping us resolve issues quickly and efficiently. Highly recommend their services!",
      author: "Jane Doe",
      role: "Project Manager",
      rating: 4.5,
      image: img1,
    },
    {
      title: "Top-Notch Quality!",
      description:
        "The quality of their work exceeded our expectations. A truly professional team!",
      author: "John Smith",
      role: "Developer",
      rating: 4.8,
      image: img2,
    },
  ];
  return (
    <section>
      <div className="flex flex-col md:flex-row relative w-full justify-between items-center">
        {/* heading */}
        <h1 className="max-w-3xl text-4xl md:text-5xl lg:text-[56px] font-bold">
          Take A Look At Some Of Our Amazing Past Clients{" "}
          <span className="inline-block">
            {" "}
            Review
            <div className="-mt-3 h-3 w-full bg-[var(--accent-yellow)]"></div>
          </span>
        </h1>
        <div className="flex items-center justify-end gap-4">
          {/* Custom Navigation Buttons */}
          {/* prev button */}
          <button className="swiper-button-prev-custom text-[var(--primary-light)] rounded-full p-3 hover:text-[var(--primary)] cursor-pointer">
            <IoIosArrowBack className="text-5xl font-bold"/>
          </button>

          {/* next button */}
          <button className="swiper-button-next-custom text-[var(--primary-light)] rounded-full p-3 hover:text-[var(--primary)] cursor-pointer">
            <IoIosArrowForward  className="text-5xl font-bold"/>
          </button>
        </div>
      </div>

      {/* slider start */}
      <div>
        <Swiper
          modules={[ Navigation]}
          grabCursor
          centeredSlides={true}
          speed={900}
          loop={true}
          initialSlide={2}
          spaceBetween={30}
          slidesPerView={2}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
         
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={swiper => swiperRef.current = swiper}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="mt-6 md:mt-8 lg:mt-12">
              {activeIndex === index % reviews.length ? (
                // active slide
                <div className="card rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 max-w-4xl">
                  {/* Image */}
                  <div className="w-full h-full md:w-1/2">
                    <div className="rounded-lg overflow-hidden ">
                      <img
                        src={review.image}
                        alt={review.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text and Rating */}
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {/* <StarRatings
                        rating={5}
                        starRatedColor="#FFD700"
                        starEmptyColor="#D1D5DB"
                        starDimension="24px"
                        starSpacing="2px"
                        numberOfStars={5}
                        name="rating"
                      /> */}
                    </div>
                    <h2 className="text-2xl text-[var(--primary)] font-bold mb-4">
                      {review.title}
                    </h2>
                    <p className="mb-4">{review.description}</p>
                    <p className="text-sm font-semibold text-[var(--primary)]">
                      <span className="font-bold text-xl">{review.author}</span>{" "}
                      | {review.role}
                    </p>
                  </div>
                </div>
              ) : (
                // inactive slide
                <div className="card bg-purple-50 text-gray-800 rounded-2xl p-6 text-center max-w-md mx-auto">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-4">
                    {review.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">{review.description}</p>

                  {/* Star Rating */}
                  <div className="flex justify-center mb-4">
                    {/* <StarRatings
                      rating={5}
                      starRatedColor="#FFD700"
                      starEmptyColor="#D1D5DB"
                      starDimension="24px"
                      starSpacing="2px"
                      numberOfStars={5}
                      name="rating"
                    /> */}
                  </div>

                  {/* Author Details */}
                  <div className="flex items-center justify-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={review.image}
                          alt={review.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {review.author}
                      </p>
                      <p className="text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
       
      </div>
    </section>
  );
}

export default Review;
