import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Footer from './Footer';
import cs from "../../public/security.png"
import js from "../../public/js.png"
import python from "../../src/assets/python.png"

const CommunityCarousel = () => {
  const swiperRef = useRef(null);

  const nextImage = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevImage = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
   <>
    <div className="flex-col space-y-6 p-6 h-full"> {/* Reduced space-y from 8 to 6 */}
      <div className="flex-col relative">
        <h1 className="text-titleColor text-lg sm:text-2xl md:text-3xl font-bold text-center">
          Communities Active at ICEC
        </h1>
        <div className="py-6"> {/* Reduced padding on Y-axis */}
          <Swiper
            ref={swiperRef}
            spaceBetween={12}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="swiper-container"
          >
            <SwiperSlide className="swiper-slide mb-16 bg-baseBackground">
              <div className="grid place-content-center place-items-center space-y-2 rounded w-full shadow-md p-8 h-[200px]">
               <img src={python}  stroke="currentColor"
                  strokeWidth="0"
                  role="img"
                  color="#666"
                  style={{ color: '#666' }}
                  height="80"
                  width="80" alt="Python " />
                <h1 className="text-lg font-semibold text-center p-4">
                  Python Community
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide mb-4 bg-baseBackground"> {/* Reduced margin bottom */}
              <div className="grid place-content-center place-items-center space-y-2 rounded w-full shadow-md p-4 h-[200px]">
                <img src={cs} stroke="currentColor" strokeWidth="0" role="img" color="#666" style={{ color: '#666' }} height="80" width="80" alt="" />
                <h1 className="text-lg font-semibold text-center p-2"> {/* Reduced padding */}
                  Cyber Security Community
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide mb-4 bg-baseBackground"> {/* Reduced margin bottom */}
              <div className="grid place-content-center place-items-center space-y-2 rounded w-full shadow-md p-4 h-[200px]">
                <img src={js} stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" color="#666" style={{ color: '#666' }} height="80" width="80" alt="" />
                <h1 className="text-lg font-semibold text-center p-2"> {/* Reduced padding */}
                  Javascript Community
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide mb-4 bg-baseBackground"> {/* Reduced margin bottom */}
              <div className="grid place-content-center place-items-center space-y-2 rounded w-full shadow-md p-4 h-[200px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  color="#666"
                  style={{ color: '#666' }}
                  height="80"
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.3515-.228a13.6906 13.6906 0 00-.2794-.2036l.0897-1.1814a.3519.3519 0 00-.346-.3915l-1.4252.0556a7.4099 7.4099 0 00-.3786-.6834l.7134-1.3193a.3492.3492 0 00-.1543-.4112l-1.3492-.2284a.3461.3461 0 00-.42.2293l-.6572 1.1834a14.7101 14.7101 0 00-.6974-.2538l-.5465-1.4877a.3465.3465 0 00-.5944-.1075l-1.1181.5648a.3495.3495 0 00-.1798.4166l.2322 1.3652a14.7064 14.7064 0 00-.3744.0173l-1.1256-.228a.3515.3515 0 00-.3813.3432l.0282 1.4834a14.6846 14.6846 0 00-1.3889.2658l-.7594-1.4247a.3485.3485 0 00-.4603-.1462l-1.1416.6834a.3494.3494 0 00-.1543.4112l.5272 1.3286c-.2968.0862-.5977.1779-.8935.2744l-1.2058-1.0221a.3483.3483 0 00-.5472.1372l-1.1066 1.418a.3471.3471 0 00.0862.4957l1.0425 1.032a.3565.3565 0 00.4917.0712l1.3912-1.0511a10.1418 10.1418 0 00.6623.2067l.2123 1.0611c.007.0414.0239.0822.065.1147l.066.1135a1.5031 1.5031 0 01-.1181.2932l-1.2806 2.4075a.3488.3488 0 00.2265.4633l1.1181.5648a.347.3470 0 00.5944-.1075l.7593-1.4876a14.8729 14.8729 0 001.0956.1424l.8269 1.3778a.3483.3483 0 00.5221.1466l1.3039-.6835a.3465.3465 0 00.1766-.4178l-.2279-1.3624a14.6195 14.6195 0 001.3628-.2618l1.1115.4574a.3483.3483 0 00.5939-.1075l.6504-1.1667a14.6343 14.6343 0 001.4463.0205l.0093 1.4535a.3515.3515 0 00.38.3432l1.3867-.0701a10.1456 10.1456 0 001.022-.0581l-.2578-1.4174a.3478.3478 0 00-.4233-.2019l-1.3491.2284a.3483.3483 0 00-.2265.5444l.6638 1.1345a10.0575 10.0575 0 00.2845.3436l1.2908-.3916a.3484.3484 0 00.4428.1826l1.1256-.5666a.3474.3474 0 00.1931-.4175l-.5261-1.0667c.2671-.0514.5317-.1091.7884-.1724l.8702 1.4721a.3485.3485 0 00.4624.1675l1.1181-.5647a.3473.3473 0 00.1766-.4178l-.3741-1.0283A14.4715 14.4715 0 0020.11 12l.007-1.6631.0047-.0123-1.02-1.0157-.008.0127.0334.0573.3046.2536a14.7956 14.7956 0 00-4.2675 1.5863z"></path>
                </svg>
                <h1 className="text-lg font-semibold text-center p-2"> {/* Reduced padding */}
                  Web Development Community
                </h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Navigation buttons container */}
        <div className="flex justify-between mb-4"> 
          <button
            onClick={prevImage}
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 mb-10"
          >
            <FaAngleLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 mb-10 "
          >
            <FaAngleRight size={24} />
          </button>
        </div>
      </div>
      <Footer />
    </div>
   </>
  );
};

export default CommunityCarousel;
