import React, { useEffect, useState } from "react";
import AllProperty from "../Components/Properties/AllProperties";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull } from "../utility/helper";

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);

  const propertiesResp = useLoaderData();

  useEffect(() => {
    if (!isEmptyOrNull(propertiesResp)) {
      if (!isEmptyOrNull(propertiesResp.data)) {
        setProperties(propertiesResp.data.properties);
      }
    }
  }, [propertiesResp]);

  return (
    <React.Fragment>
      <AllProperty properties={properties} />
    </React.Fragment>
  );
};

export default PropertiesPage;
