import React from "react";

import "swiper/css";
import CstSwiperSlider from "../Components/CstSwiperSlider";
import { LabelList } from "recharts";
import Latest from "../Components/Home/Latest";

const HomePage = () => {
  return (
    <React.Fragment>
      <section className="w-full">
        {/* Start Home Slider */}
        <div className="w-full py-4 my-6 bg-gradient-to-r from-slate-100 to-cyan-100 rounded-md p-5">
          <CstSwiperSlider slides={[]} />
        </div>
        {/* End Home Slider */}
      </section>
      <section>
        <Latest />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
