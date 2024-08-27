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
    <div className="h-[400px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // loop={true}
        slidesPerView={1}
        modules={[Pagination, Navigation]} //Autoplay
        className="mySwiper !h-full w-full"
      >
        <SwiperSlide>
          <div className="w-full flex flex-row justify-between items-center space-x-4">
            <div className="w-8/12 bg-slate-40 rounded-md border-transparent">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                  alt="Album"
                />
              </figure>
            </div>

            <div className="w-4/12 h-[400px] bg-slate-40 p-5 border rounded-md border-transparent">
              <div className="w-full space-y-4 flex flex-col justify-between ">
                <div className="">
                  <h2 className="text-2xl py-3">
                    201 Prague Dr, San Jose, CA 95119
                  </h2>
                </div>
                <div className="flex flex-row justify-between items-center text-lg">
                  <div className="w-2/6 flex flex-col justify-center items-center ">
                    <span className="text-2xl font-bold">4</span>
                    <span>Beads</span>
                  </div>
                  <div className="w-2/6 flex flex-col justify-center items-center ">
                    <span className="text-2xl font-bold">3</span>
                    <span>Baths</span>
                  </div>
                  <div className="w-2/6 flex flex-col justify-center items-center ">
                    <span className="text-2xl font-bold">1868</span>
                    <span>sqft</span>
                  </div>
                </div>

                <div className="flex flex-row justify-between">
                  <span className="text-2xl font-bold">$16500000</span>
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
        <SwiperSlide>
          <div className="card lg:card-side bg-[#f8f9fa] shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CstSwiperSlider;
