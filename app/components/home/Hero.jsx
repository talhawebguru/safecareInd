"use client";
import React, { useRef } from 'react';
import Container from '../common/Container';
import * as motion from "motion/react-client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = ({ heroData }) => {
  const swiperRef = useRef(null);

  // Default slides if API data is not available
  const defaultSlides = [
    {
      id: 1,
      badge: "Welcome!",
      title: "Revolutionise care.",
      subtitle: "For people and planet.",
      description: "Safecare Medical Industries was conceived and established in the year of 2016.",
      bgImage: "/images/heroBg1.png"
    },
    {
      id: 2,
      badge: "Quality First",
      title: "Premium Medical Supplies.",
      subtitle: "Trusted Worldwide.",
      description: "Manufacturing excellence with international quality certifications and standards.",
      bgImage: "/images/heroBg2.png"
    },
    {
      id: 3,
      badge: "Innovation",
      title: "Advanced Healthcare Solutions.",
      subtitle: "For Better Tomorrow.",
      description: "Committed to delivering innovative products that enhance healthcare quality globally.",
      bgImage: "/images/heroBg3.png"
    }
  ];

  // Map API data to slides format
  const slides = heroData && heroData.length > 0
    ? heroData.map((item, index) => ({
        id: item.id || index + 1,
        badge: item.badge || "Welcome!",
        title: item.title?.split('.')[0] + '.' || "Revolutionise care.",
        subtitle: item.title?.split('.')[1]?.trim() || "For people and planet.",
        description: item.description || "",
        bgImage: item.bgImage?.url 
          ? `${process.env.NEXT_PUBLIC_API_URL}${item.bgImage.url}` 
          : `/images/heroBg${index + 1}.png`
      }))
    : defaultSlides;

  return (
    <section className="overflow-hidden relative -z-30 h-auto lg:h-[763px] flex items-center min-h-[400px]">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/70',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#02c8b0]',
        }}
        loop={true}
        className="hero-swiper -z-20 w-full h-full absolute inset-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {/* Background Image */}
            <div 
              className="absolute -z-10 inset-0 w-full h-full bg-cover bg-bottom bg-no-repeat"
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            />
            
            {/* Content */}
            <Container>
              <div className="flex items-center min-h-[400px] lg:min-h-[663px] py-12 lg:py-0 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: 'easeOut',
                    delay: 0.2
                  }}
                  className="relative w-full max-w-[623px]"
                >
                  {/* Welcome Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: 'easeOut',
                      delay: 0.4
                    }}
                    className="absolute left-0 top-0 z-10"
                  >
                    <div className="bg-[#02c8b0] rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[0px] rounded-br-[0px] px-4 sm:px-6 py-2 min-w-[140px] sm:min-w-[167px] min-h-[50px] sm:min-h-[57px] flex items-center">
                      <span className="text-white text-[22px] sm:text-[28.75px] font-normal font-roboto leading-none">
                        {slide.badge}
                      </span>
                    </div>
                  </motion.div>

                  {/* Glass Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.7, 
                      ease: 'easeOut',
                      delay: 0.5
                    }}
                    className="mt-[45px] pl-[10px] sm:pl-[14px]"
                  >
                    <div className="bg-white/50 border-l-[6px] border-[#02c8b0] backdrop-blur-[7px] p-6 sm:p-8 pt-10 sm:pt-12 relative">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          ease: 'easeOut',
                          delay: 0.7
                        }}
                      >
                        {/* First slide uses h1, others use h2 for SEO */}
                        {index === 0 ? (
                          <h1 className="text-[#1e1e1e] text-3xl sm:text-4xl font-normal font-roboto mb-4 sm:mb-6">
                            {slide.title}<br />{slide.subtitle}
                          </h1>
                        ) : (
                          <h2 className="text-[#1e1e1e] text-3xl sm:text-4xl font-normal font-roboto mb-4 sm:mb-6">
                            {slide.title}<br />{slide.subtitle}
                          </h2>
                        )}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          ease: 'easeOut',
                          delay: 0.9
                        }}
                        className="mt-2"
                      >
                        <h3 className="text-[#323232] text-lg sm:text-xl font-medium font-poppins">
                          {slide.description}
                        </h3>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-swiper {
          position: absolute !important;
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
        }

        .hero-swiper .swiper-slide {
          position: relative !important;
          width: 100% !important;
          height: 100% !important;
        }

        .hero-swiper .swiper-pagination {
          bottom: 100px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
          display: flex !important;
          gap: 8px !important;
          justify-content: center !important;
          z-index: 40 !important;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          width: 32px !important;
          border-radius: 6px !important;
        }

        @media (max-width: 640px) {
          .hero-swiper .swiper-pagination {
            bottom: 20px !important;
          }
          
          .hero-swiper .swiper-pagination-bullet {
            width: 10px !important;
            height: 10px !important;
          }
          
          .hero-swiper .swiper-pagination-bullet-active {
            width: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;