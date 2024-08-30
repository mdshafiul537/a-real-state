import React from "react";
import FontIcon from "./FontIcon";

const FacilitiyItem = ({ icon, color, name, ...props }) => {
  return (
    <div className="flex flex-col justify-center items-center border p-2 font-bold rounded-lg gap-2">
      <FontIcon className={`text-xl ${color} ${icon}`} />
      <h5 className="text-center ">{name}</h5>
    </div>
  );
};

export default FacilitiyItem;
