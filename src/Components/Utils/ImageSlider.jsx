import React, { useState } from "react";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ImageSlider = ({ images = [], ...props }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <React.Fragment>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <div className="w-full min-h-[450px]">
          {/* Slider Start */}
          <div className="h-[360px]">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              loop={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
              className="mySwiper2 w-full justify-center items-center  h-[360px]"
            >
              {images?.map((url) => {
                return (
                  <SwiperSlide key={url} className="h-[360px]">
                    <img src={url} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Slider End */}
          {/* Thum Start */}
          <div className="h-100 w-full border-2 border-cyan-600 py-1 px-2 my-2">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={5}
              slidesPerView={8}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper border border-gray-300 box-border"
            >
              <div className="border border-cyan-600 w-full rounded-2xl">
                {images?.map((url) => {
                  return (
                    <SwiperSlide
                      key={`thumb-${url}`}
                      className="cursor-pointer"
                    >
                      <img className="w-26 h-20 my-2" src={url} />
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
          {/* Thum End */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageSlider;
