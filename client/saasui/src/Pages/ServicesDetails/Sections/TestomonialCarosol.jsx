import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// images
import img1 from "../../../assets/About Us/person (1).jpg"
import img2 from "../../../assets/About Us/person (2).jpg"
import img3 from "../../../assets/About Us/singlePersson.jpg"

function TestomonialCarosol() {
    const testimonials = [
    {
      quote: '"You made it so simple. My new site is so much faster & easier to work"',
      author: 'Anondo Uday',
      title: 'Founder of Taskio',
      image: img1,
    },
    {
      quote: '"Amazing support and design! Highly recommend their services."',
      author: 'Jane Doe',
      title: 'CEO of Example Co.',
      image: img2,
    },
    {
      quote: '"The best team I’ve worked with. Great results every time!"',
      author: 'John Smith',
      title: 'Product Manager',
      image: img3,
    },
  ];
  return (
    <section>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={true}
          pagination={{ clickable: true }}
          className="max-w-xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="card bg-purple-50 text-gray-800 rounded-2xl p-6 text-center max-w-md mx-auto h-full">
                <p className="text-lg italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--primary)]">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  )
}

export default TestomonialCarosol