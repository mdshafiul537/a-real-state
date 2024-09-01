import React from "react";

import "swiper/css";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CstSwiperSlider = ({ slides = [] }) => {
  return (
    <div className="h-[450px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        slidesPerView={1}
        modules={[Pagination, Navigation, Autoplay]} //
        className="mySwiper !h-full w-full"
      >
        {slides?.map((item) => {
          return (
            <SwiperSlide>
              <div className="w-full flex flex-row sm:flex-col xs:flex-col md:flex-row justify-between items-center space-x-4">
                <div className="w-8/12 xs:w-full sm:w-full md:w-8/12 h-[420px] xs:h-56 sm:h-96 md:h-[420px] bg-slate-40 rounded-md border-transparent flex flex-col justify-center items-center">
                  <figure>
                    <img
                      src={item.image}
                      alt={item?.estate_title}
                      className="max-h-[95%] rounded-lg"
                    />
                  </figure>
                </div>

                <div className="w-4/12 xs:w-full sm:w-full md:w-4/12 xs:h-52 sm:h-52 md:h-[420px] h-[420px] bg-slate-40 p-5 xs:p-2 sm:p-2 border rounded-md border-transparent">
                  <div className="w-full h-full space-y-4 flex flex-col justify-between ">
                    <div className="">
                      <h2 className="text-2xl py-3 md:py-3 md:text-2xl xs:text-base sm:text-base xs:py-1 xs:font-bold sm:font-bold md:font-semibold sm:py-2">
                        {item?.estate_title}
                      </h2>
                    </div>
                    <div className="flex flex-row justify-between items-center text-base  sm:text-base xs:text-base">
                      <div className="w-2/6 flex flex-col md:flex-col xs:flex-row sm:flex-row justify-center items-center ">
                        <span className="text-2xl md:text-2xl font-bold">
                          {item?.bead}&nbsp;
                        </span>
                        <span>Beads</span>
                      </div>
                      <div className="w-2/6 flex flex-col md:flex-col xs:flex-row sm:flex-row justify-center items-center ">
                        <span className="text-2xl  md:text-2xl sm:text-base xs:text-base font-bold">
                          {item?.baths}&nbsp;
                        </span>
                        <span>Baths</span>
                      </div>
                      <div className="w-2/6 flex flex-col md:flex-col xs:flex-row sm:flex-row justify-center items-center ">
                        <span className="text-2xl  md:text-2xl sm:text-xl xs:text-xl font-bold">
                          {item?.area}&nbsp;
                        </span>
                        <span>sqft</span>
                      </div>
                    </div>

                    <div className="flex flex-row justify-between">
                      <span className="text-2xl  md:text-2xl sm:text-xl xs:text-xl font-bold">
                        <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                        &nbsp;{item?.price}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-col xs:flex-row sm:flex-row justify-between xs:space-y-0 sm:space-y-0 md:space-y-4 lg:space-y-4  space-y-4 xs:px-4 sm:px-6 md:px-0 sm:pb-1 xs:pb-1 lg:mt-8 ">
                      <span className="bg-zinc-900 hover:bg-cyan-100 hover:border-zinc-800 hover:text-zinc-900 font-bold  text-white xs:text-base xs:px-2 sm:px-2 xs:py-1 sm:py-1 px-4 py-3 text-center text-lg border rounded-lg cursor-pointer ">
                        Contact
                      </span>
                      <span className="bg-zinc-900 text-white xs:text-base xs:px-2 sm:px-2 xs:py-1 sm:py-1 px-4 py-3 text-center text-lg border hover:bg-cyan-100 hover:border-zinc-800 hover:text-zinc-900 font-bold rounded-lg cursor-pointer ">
                        Request a tour
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CstSwiperSlider;
