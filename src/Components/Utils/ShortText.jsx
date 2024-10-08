import { NavLink } from "react-router-dom";
import { isEmptyOrNull } from "../../utility/helper";

const ShortText = ({ text, size, url, ...props }) => {
  // console.log("Text size ", size, ", ", text.length);
  if (!isEmptyOrNull(text)) {
    if (text.length > size) {
      return (
        <>
          {text.substring(0, size)}
          <span className="text-cyan-700 underline">
            {" "}
            <NavLink to={url}>&nbsp;[Read more...]</NavLink>{" "}
          </span>
        </>
      );
    }
    return <span>{text}</span>;
  }
  return <span></span>;
};

export default ShortText;
