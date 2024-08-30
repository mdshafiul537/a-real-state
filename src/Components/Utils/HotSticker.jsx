import React from "react";

const HotSticker = ({ isHot = false, ...props }) => {
  if (isHot) {
    return (
      <span className="text-md font-bold bg-gradient-to-r from-yellow-400  to-red-500 rounded-md px-3 py-1 ">
        <i className="text-white fa-solid fa-fire"></i> &nbsp;Hot Price
      </span>
    );
  }
  return <span></span>;
};

export default HotSticker;
