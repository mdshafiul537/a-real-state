import React from "react";
import { NavLink } from "react-router-dom";
import ShortText from "../Utils/ShortText";

const AllProperty = ({ properties = [], ...props }) => {
  return (
    <React.Fragment>
      <div className="w-full min-h-screen">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex md:flex-row flex-row xs:flex-col sm:flex-col items-center gap-12 my-6">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
              All Residential Properties
            </h2>

            <p className="max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              Our Residential Projects are designed with a focus on enhancing
              community living. We utilize intelligent architecture to maximize
              natural light and air flow. We also offer a complete ecosystem of
              services so our tenants can feel at home in new residences with
              ease.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 box-border">
          {/* property Start */}

          {properties.map((property, idx) => {
            return (
              <div className="w-full grid grid-cols-5 xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 md:grid-cols-5 gap-3 border-b">
                <div className="p-3">
                  <img src={property.image} alt={property.estate_title} />
                </div>

                <div className="flex flex-col gap-2 col-span-3 p-3">
                  <h3 className="mb-4 text-xl font-bold">
                    {" "}
                    {property.estate_title}
                  </h3>
                  <div className="text-lg font-medium space-x-2">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{property.location}</span>
                  </div>
                  <div className="text-balance font-semibold">
                    <p>
                      <ShortText text={property.description} size={180} url={`/properties/${property.id}`} />
                    </p>
                  </div>
                  <div className="w-full my-5 xs:hidden sm:hidden md:block">
                    <NavLink
                      key={`property-${idx}`}
                      to={`/properties/${property.id}`}
                      title={`Go to ${property.estate_title}`}
                      className="bg-cyan-700 hover:bg-cyan-900 px-3 py-2 text-white font-bold cursor-pointer "
                    >
                      Details View
                    </NavLink>
                  </div>
                </div>

                <div className="flex flex-col gap-2 p-3 w-full font-bold ">
                  <h3 className="text-cyan-500 border-b py-2">
                    <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                    &nbsp;{property.price}
                  </h3>
                  <div className="w-full border-b py-2">
                    <i className="fa-solid fa-bed"></i>{" "}
                    <span>{property.bead}</span>{" "}
                  </div>
                  <div className="w-full border-b py-2">
                    <i className="fa-solid fa-bath"></i>{" "}
                    <span>{property.baths}</span>{" "}
                  </div>
                  <div className="w-full border-b py-2">
                    <i className="fa-solid fa-retweet"></i>{" "}
                    <span className="">
                      {property.area} &nbsp; M<sup>2</sup>{" "}
                    </span>{" "}
                  </div>

                  <div className="w-full my-5 ">
                    <NavLink
                      key={`property-${idx}`}
                      to={`/properties/${property.id}`}
                      title={`Go to ${property.estate_title}`}
                      className="bg-cyan-700 hover:bg-cyan-900 px-3 py-2 text-white text-center font-bold cursor-pointer md:hidden lg:hidden xl:hidden sm:block xs:block"
                    >
                      Details View
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}

          {/* property End */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllProperty;
