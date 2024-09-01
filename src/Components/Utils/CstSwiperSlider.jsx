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
              <div className="w-full flex flex-row justify-between items-center space-x-4">
                <div className="w-8/12 bg-slate-40 rounded-md border-transparent h-[420px] flex flex-col justify-center items-center">
                  <figure>
                    <img
                      src={item.image}
                      alt={item?.estate_title}
                      className="h-[420px] rounded-lg"
                    />
                  </figure>
                </div>

                <div className="w-4/12 h-[420px] bg-slate-40 p-5 border rounded-md border-transparent">
                  <div className="w-full space-y-4 flex flex-col justify-between ">
                    <div className="">
                      <h2 className="text-2xl py-3">{item?.estate_title}</h2>
                    </div>
                    <div className="flex flex-row justify-between items-center text-lg">
                      <div className="w-2/6 flex flex-col justify-center items-center ">
                        <span className="text-2xl font-bold">{item?.bead}</span>
                        <span>Beads</span>
                      </div>
                      <div className="w-2/6 flex flex-col justify-center items-center ">
                        <span className="text-2xl font-bold">
                          {item?.baths}
                        </span>
                        <span>Baths</span>
                      </div>
                      <div className="w-2/6 flex flex-col justify-center items-center ">
                        <span className="text-2xl font-bold">{item?.area}</span>
                        <span>sqft</span>
                      </div>
                    </div>

                    <div className="flex flex-row justify-between">
                      <span className="text-2xl font-bold">
                        <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                        &nbsp;{item?.price}
                      </span>
                    </div>
                    <div className="flex flex-col justify-between space-y-4">
                      <span className="bg-zinc-900 hover:bg-cyan-100 hover:border-zinc-800 hover:text-zinc-900 font-bold  text-white px-4 py-3 text-center text-lg border rounded-lg cursor-pointer ">
                        Contact
                      </span>
                      <span className="bg-zinc-900 text-white px-4 py-3 text-center text-lg border hover:bg-cyan-100 hover:border-zinc-800 hover:text-zinc-900 font-bold rounded-lg cursor-pointer ">
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
