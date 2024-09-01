import React from "react";
import HotSticker from "../Utils/HotSticker";
import { NavLink } from "react-router-dom";

const Latest = ({ properties, ...props }) => {
  return (
    <React.Fragment>
      <div className="w-full flex flex-col space-y-7 min-[600px]:">
        <div className="w-full">
          <div className="bg-white dark:bg-gray-800 min-h-screen py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex flex-col min-h-[120px]">
              <div className="mb-4 flex flex-col items-center justify-between gap-8 sm:mb-8 md:mb-12 xs:border-b sm:border-b xs:pb-8 sm:pb-5 md:border-b-transparent ">
                <div className="flex sm:flex-col xs:flex-col md:flex-row items-center gap-12 xs:gap-6 sm:gap-8 md:gap-12 ">
                  <div className="w-4/12 md:w-4/12 lg:w-4/12 xs:w-full sm:w-full">
                    <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white w-full xs:w-full sm:w-full">
                      Latest in your area
                    </h2>
                  </div>

                  <div className="w-8/12 md:w-8/12 xs:w-full sm:w-full">
                    <p className="max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                      Recommendations are based on your location and search
                      activity, such as the homes you've viewed and saved and
                      the filters you've used. We use this information to bring
                      similar homes to your attention, so you don't miss out.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full min-h-[400px] xs:mt-10 sm:mt-8 md:mt-0 sm:mb-10 xs:mb-10 md:mb-4">
                <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {/* Start */}
                  {properties?.map((item) => {
                    return (
                      <NavLink to={`/properties/${item?.id}`}>
                        <div className="flex flex-col gap-4">
                          <div className="h-64 w-full flex flex-col justify-center items-center">
                            <img
                              className="h-full rounded-lg"
                              src={item.image}
                              alt={item.estate_title}
                            />
                          </div>
                          <div className="flex flex-col gap-3 px-2 ">
                            <h2 className="text-md py-3">
                              {item?.estate_title}
                            </h2>

                            <div className="flex flex-row justify-between items-center">
                              <span className="text-md font-bold">
                                <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                                &nbsp;{item.price}
                              </span>
                              <HotSticker isHot={item.isHotSale} />
                            </div>

                            <div className="flex flex-row justify-between items-center text-sm">
                              <div className="w-2/6 flex flex-col justify-center">
                                <span className="font-bold">
                                  {item?.bead} Beads
                                </span>
                              </div>

                              <div className="w-2/6 flex flex-col justify-center">
                                <span className="font-bold">
                                  {item?.baths} Baths
                                </span>
                                <span></span>
                              </div>

                              <div className="w-2/6 flex flex-col justify-center">
                                <span className="font-bold">
                                  {item?.area} sqft
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    );
                  })}
                  {/* End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Latest;
