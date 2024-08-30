import React, { useEffect, useState } from "react";

import "swiper/css";
import CstSwiperSlider from "../Components/Utils/CstSwiperSlider";
import Latest from "../Components/Home/Latest";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull } from "../utility/helper";

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [slider, setSlider] = useState([]);

  const propertiesResp = useLoaderData();

  console.log("propertiesResp, ", propertiesResp);

  useEffect(() => {
    if (!isEmptyOrNull(propertiesResp)) {
      if (!isEmptyOrNull(propertiesResp.data)) {
        if (!isEmptyOrNull(propertiesResp.data.properties)) {
          setSlider(propertiesResp.data.properties.slice(0, 6));

          const items = [];

          propertiesResp.data.properties.forEach((item) => {
            if (item.isHotSale) {
              items.push(item);
            }
          });
          setProperties(items);
        }
      }
    }
  }, [propertiesResp]);

  return (
    <React.Fragment>
      <section className="w-full">
        {/* Start Home Slider */}
        <div className="w-full h-[450px] py-4 my-6 bg-gradient-to-r from-slate-100 to-cyan-100 rounded-md p-5 ">
          <CstSwiperSlider slides={slider} />
        </div>
        {/* End Home Slider */}
      </section>
      <section>
        <div className="border-b border-gray-400 py-4">
          <h1 className="text-3xl my-6 font-bold"><span className="border-b border-cyan-500 py-2">Welcome U-Estate</span></h1>
          <p>
            U-Estate prioritizes the development of projects with a dual
            emphasis on reliability and sustainability. Our dedicated team
            provides comprehensive Engineering, Procurement, and Construction
            (EPC) solutions, crafting luxurious spaces and iconic architecture.
            At U-Estate, we continually push the boundaries of innovation to
            enrich the living standards of Dhaka’s residents. Our residential
            projects are meticulously designed with a focus on enhancing
            community living with a complete ecosystem of services. Meanwhile,
            our commercial ventures are strategically located, boasting
            intelligently designed spaces and state-of-the-art amenities
            tailored to meet the demands of modern businesses. Presently, we are
            focused on enhancing our building management, maintenance, and
            security services, ensuring a seamless experience for our clientele.
          </p>
        </div>
      </section>
      <section>
        <Latest properties={properties} />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
