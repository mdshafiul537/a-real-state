import React from "react";

const AllAgent = ({ agents = [], ...props }) => {
  return (
    <React.Fragment>
      <div className="w-full my-10">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
              Agents
            </h2>

            <p className="hidden text-gray-500 dark:text-gray-300 md:block">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="w-full flex flex-col items-center gap-5 border border-gray-300 p-4">
            <div className="flex flex-row items-center justify-center gap-5">
              <div className="w-1/2">
                <img src="/images/agent-1.jpg" className="rounded-full" />
              </div>
              <div className="w-1/2 text-xl text-center font-semibold">

                <span>5.0</span> <i className="text-amber-500 fa-solid fa-star"></i>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold">Fletcher Morse</h3>
              <p className="text-md font-medium">289 properties sold</p>
              <button className="rounded-3xl border border-gray-300 py-1 px-4 font-bold hover:bg-gray-500 hover:text-white transition-all duration-500">Contact</button>

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllAgent;
