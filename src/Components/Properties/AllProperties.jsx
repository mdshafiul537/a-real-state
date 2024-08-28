import React from "react";
import { NavLink } from "react-router-dom";

const AllProperty = ({ properties = [], ...props }) => {
  return (
    <React.Fragment>
      <div className="w-full min-h-screen">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
              Latest in your area
            </h2>

            <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 box-border">
          {/* property Start */}
          <NavLink
            to="/properties/1"
            title={`Go to 201 Prague Dr, San Jose, CA 95119 Details`}
          >
            <div className="w-full grid grid-cols-5 gap-3 border-b">
              <div className="p-3">
                <img src="/images/5.jpg" />
              </div>

              <div className="flex flex-col gap-2 col-span-3 p-3">
                <h3 className="mb-4 text-xl font-bold">
                  {" "}
                  201 Prague Dr, San Jose, CA 95119
                </h3>
                <div className="text-lg font-medium space-x-2">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>50 Bridge Park Drive</span>
                </div>
                <div className="text-balance font-semibold">
                  <p>
                    Creatively designed apartments aren't a usual sight. That's
                    why we go around places to get you the best deal possible.
                    Check this one out. It has balconies attached to two of the
                    bedrooms and a larg
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-3 w-full font-bold ">
                <h3 className="text-cyan-500 border-b py-2">
                  <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                  &nbsp;9500000
                </h3>
                <div className="w-full border-b py-2">
                  <i className="fa-solid fa-bed"></i> <span>4</span>{" "}
                </div>
                <div className="w-full border-b py-2">
                  <i className="fa-solid fa-bath"></i> <span>3</span>{" "}
                </div>
                <div className="w-full border-b py-2">
                  <i className="fa-solid fa-retweet"></i>{" "}
                  <span>
                    m<sup>2</sup>{" "}
                  </span>{" "}
                </div>
              </div>
            </div>
          </NavLink>
          {/* property End */}

          {/* property Start */}
          <NavLink to="/properties/2">
            <div className="w-full grid grid-cols-5 gap-3 border-b">
              <div className="p-3">
                <img src="/images/15.jpg" />
              </div>

              <div className="flex flex-col gap-2 col-span-3 p-3">
                <h3 className="mb-4 text-xl font-bold">
                  {" "}
                  201 Prague Dr, San Jose, CA 95119
                </h3>
                <div className="text-lg font-medium space-x-2">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>50 Bridge Park Drive</span>
                </div>
                <div className="text-balance font-semibold">
                  <p>
                    Creatively designed apartments aren't a usual sight. That's
                    why we go around places to get you the best deal possible.
                    Check this one out. It has balconies attached to two of the
                    bedrooms and a larg
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-3 w-full font-bold ">
                <h3 className="text-cyan-500 border-b py-2">
                  <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                  &nbsp;9500000
                </h3>
                <div className="w-full border-b py-2">
                  <i className="fa-solid fa-bed"></i> <span>4</span>{" "}
                </div>
                <div className="w-full border-b py-2">
                  <i className="fa-solid fa-bath"></i> <span>3</span>{" "}
                </div>
                <div className="w-full border-b py-2">
                  <i className="fa-solid fa-retweet"></i>{" "}
                  <span>
                    m<sup>2</sup>{" "}
                  </span>{" "}
                </div>
              </div>
            </div>
          </NavLink>
          {/* property End */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllProperty;
