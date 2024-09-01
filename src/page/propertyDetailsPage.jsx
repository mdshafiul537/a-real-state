import React, { useEffect, useState } from "react";
import ImageSlider from "../Components/Utils/ImageSlider";
import UtilLocation from "../Components/Utils/UtilLocation";
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import { isEmptyOrNull, onNotify } from "../utility/helper";
import FacilitiyItemKey from "../Components/Utils/FacilitiyItemKey";
import Loading from "../Components/Utils/Loading";

const PropertyDetailsPage = () => {
  const params = useParams();

  const propertiesResp = useLoaderData();

  const [property, setProperty] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isEmptyOrNull(propertiesResp.data)) {
      if (!isEmptyOrNull(propertiesResp.data.properties)) {
        const item = propertiesResp.data.properties.find(
          (item) => item.id === Number(params.id)
        );
        setProperty(item);
        setIsLoading(false);
      }
    }
  }, [propertiesResp]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log("values ", values);
    onNotify("Your Request has been receive. We will contact you soon");
  };

  const [isHidden, setIsHidden] = useState(true);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }
  const {
    estate_title,
    segment_name,
    image,
    images,
    description,
    price,
    isSale,
    location,
    position,
    facilities,
    bead,
    baths,
    isHotSale,
    area,
    floorNo,
  } = property;

  return (
    <React.Fragment>
      <div className="w-full min-h-screen flex flex-col my-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="w-full flex flex-col gap-6">
              <div className="w-full">
                <ImageSlider images={images} />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">{estate_title}</h1>
                <h1 className="text-xl font-bold">Segment: {segment_name}</h1>
                <h4 className="font-bold">
                  <i className="fa-solid fa-location-dot"></i>&nbsp;{location}
                </h4>
                <h4 className="font-extrabold text-xl">
                  <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                  &nbsp;{price}{" "}
                </h4>

                <div className="w-1/3 xs:w-full sm:w-full md:w-1/3 flex flex-row xs:flex-col sm:flex-col md:flex-row lg:flex-row">
                  <div className="w-full border-b py-2">
                    <i className="fa-solid fa-bed"></i> <span>{bead}</span>{" "}
                  </div>
                  <div className="w-full border-b py-2">
                    <i className="fa-solid fa-bath"></i> <span>{baths}</span>{" "}
                  </div>
                  <div className="w-full border-b py-2">
                    <i className="fa-solid fa-vector-square"></i>{" "}
                    <span>
                      {area} M<sup>2</sup>{" "}
                    </span>{" "}
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="overview">
                    <h5 className="text-3xl font-bold border-b border-cyan-500 py-3 my-4">
                      Overview
                    </h5>
                    <p className="text-neutral">{description}</p>
                  </div>

                  <div className="amenities">
                    <h4 className="text-3xl font-bold border-b border-cyan-500 py-3 my-4">
                      Amenities
                    </h4>
                    <div className="grid grid-cols-7 gap-5">
                      {facilities?.map((item) => {
                        return <FacilitiyItemKey itemKey={item} />;
                      })}
                    </div>
                  </div>

                  <div className="location">
                    <h3 className="text-3xl font-bold border-b border-cyan-500 py-3 my-4">
                      Location
                    </h3>
                    <h4 className="font-bold  my-3">
                      <span className="border-b border-double py-2">
                        <i className="fa-solid fa-location-dot"></i>&nbsp;
                        {location}
                      </span>
                    </h4>
                    <div className="!w-[900px] h-96 mt-5">
                      <UtilLocation position={position} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 h-screen relative">
            <div className=" sticky sm:relative xs:relative md:sticky z-20 top-px-0 right-0">
              <div className="card glass w-full bg-gradient-to-tl from-cyan-50 to-slate-40 drop-shadow-lg ">
                <div className="card-body">
                  <h2 className="card-title my-6">Ask about the property</h2>

                  <div className="w-full card-actions justify-center items-center relative border border-cyan-200 py-3 rounded-lg">
                    <h4 className="text-center">+8801725686029</h4>
                    <div
                      className={`w-full h-full transition-all duration-700 absolute top-0 right-0 ${
                        !isHidden ? "opacity-0" : ""
                      }`}
                    >
                      <div className="w-2/3 h-full absolute top-0 right-0 z-40 bg-gradient-to-r from-slate-300 to-gray-900 px-5 py-2 opacity-90 rounded-r-lg"></div>
                      <button
                        onClick={() => {
                          setIsHidden(false);
                        }}
                        className="absolute top-2 right-2 bg-gray-900 px-4 py-1 z-50 text-white text-lg font-bold rounded-lg"
                      >
                        Show Number
                      </button>
                    </div>
                  </div>
                  <div className="w-full">
                    <form
                      className="flex flex-col gap-4"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <label className="input input-bordered flex items-center gap-2">
                        <input
                          type="text"
                          className="grow !bg-transparent focus:!bg-transparent"
                          placeholder="Frist Name"
                          {...register("fristName")}
                        />
                      </label>
                      <label className="input input-bordered flex items-center gap-2">
                        <input
                          type="text"
                          className="grow !bg-transparent focus:!bg-transparent"
                          placeholder="Last Name"
                          {...register("lastName")}
                        />
                      </label>
                      <label className="input input-bordered flex items-center gap-2">
                        <i className="fa-solid fa-phone"></i>
                        <input
                          type="text"
                          className="grow !bg-transparent focus:!bg-transparent"
                          placeholder="Phone No."
                          {...register("phoneNo")}
                        />
                      </label>

                      <label className="input input-bordered flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-4 w-4 opacity-70"
                        >
                          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input
                          {...register("email")}
                          type="text"
                          className="grow !bg-transparent focus:!bg-transparent"
                          placeholder="Email"
                        />
                      </label>

                      <button className="input input-bordered bg-gray-900 text-white text-xl font-bold">
                        <i className="fa-solid fa-phone"></i>&nbsp;Contact
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PropertyDetailsPage;
