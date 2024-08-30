import React from "react";
import FacilitiyItem from "./FacilitiyItem";

const FacilitiyItemKey = ({ itemKey, colorClass, ...props }) => {
  switch (itemKey) {
    case "electricity_backup":
      return (
        <FacilitiyItem
          color="text-green-600"
          icon="fa-solid fa-plug-circle-bolt"
          name="Electricity Backup"
          key={itemKey}
        />
      );

    case "flooring":
      return (
        <>
          <FacilitiyItem
            color="text-gray-800"
            icon="fa-solid fa-table-cells"
            name="Flooring"
            key={itemKey}
          />
        </>
      );

    case "elevator":
      return (
        <>
          <FacilitiyItem
            color="text-gray-900"
            icon="fa-solid fa-elevator"
            name="Elevators in Building"
            key={itemKey}
          />
        </>
      );

    case "apartment_facing":
      return (
        <>
          <FacilitiyItem
            color="text-gray-900"
            icon="fa-regular fa-building"
            name="Apartment Facing"
            key={itemKey}
          />
        </>
      );

    case "gas":
      return (
        <>
          <FacilitiyItem
            color="text-amber-700"
            icon="fa-solid fa-fire-flame-simple"
            name="Gas"
            key={itemKey}
          />
        </>
      );

    case "electricity":
      return (
        <>
          <FacilitiyItem
            color="text-amber-500"
            icon="fa-solid fa-bolt"
            name="Electricity"
            key={itemKey}
          />
        </>
      );

    case "floor_level":
      return (
        <>
          <FacilitiyItem
            color="text-gray-800"
            icon="fa-solid fa-layer-group"
            name="Floor Level"
            key={itemKey}
          />
        </>
      );

    case "CCTV":
      return (
        <>
          <FacilitiyItem
            color="text-green-800"
            icon="fa-solid fa-video"
            name="CCTV Security"
            key={itemKey}
          />
        </>
      );

    case "security_staff":
      return (
        <>
          <FacilitiyItem
            color="text-red-600"
            icon="fa-solid fa-user-shield"
            name="Guard/ Security Staffpets"
            key={itemKey}
          />
        </>
      );

    case "public_transport":
      return (
        <>
          <FacilitiyItem
            color="text-cyan-600"
            icon="fa-solid fa-bus-simple"
            name="Nearby Public Transport"
            key={itemKey}
          />
        </>
      );

    case "distance_airport":
      return (
        <>
          <FacilitiyItem
            color="text-cyan-600"
            icon="fa-solid fa-plane-departure"
            name="Distance From Airport (kms)"
            key={itemKey}
          />
        </>
      );

    case "parking_spaces":
      return (
        <>
          <FacilitiyItem
            color="text-green-600"
            icon="fa-solid fa-square-parking"
            name="Parking Spaces"
            key={itemKey}
          />
        </>
      );

    case "view":
      return (
        <>
          <FacilitiyItem
            color="text-cyan-600"
            icon="fa-solid fa-mountain-sun"
            name="View"
            key={itemKey}
          />
        </>
      );

    case "fire_exit":
      return (
        <>
          <FacilitiyItem
            color="text-red-600"
            icon="fa-solid fa-person-walking-dashed-line-arrow-right"
            name="Fire Exit"
            key={itemKey}
          />
        </>
      );

    case "cleaning_services":
      return (
        <>
          <FacilitiyItem
            color="text-gray-600"
            icon="fa-solid fa-broom"
            name="Cleaning Services"
            key={itemKey}
          />
        </>
      );

    case "maintenance_staff":
      return (
        <>
          <FacilitiyItem
            color="text-gray-600"
            icon="fa-solid fa-users-gear"
            name="Maintenance Staff"
            key={itemKey}
          />
        </>
      );

    case "pet_policy":
      return (
        <>
          <FacilitiyItem
            color="text-gray-800"
            icon="fa-solid fa-paw"
            name="Pet Policy"
            key={itemKey}
          />
        </>
      );
    case "furnished":
      return (
        <FacilitiyItem
          color="text-gray-600"
          icon="fa-solid fa-couch"
          name="Furnished"
          key={itemKey}
        />
      );
    case "intercom":
      return (
        <FacilitiyItem
          color="text-gray-600"
          icon="fa-brands fa-intercom"
          name="Intercom"
          key={itemKey}
        />
      );
    case "balcony_terrace":
      return (
        <FacilitiyItem
          color="text-gray-600"
          icon="fa-solid fa-cloud-moon-rain"
          name="Balcony or Terrace"
          key={itemKey}
        />
      );

    case "freehold":
      return (
        <FacilitiyItem
          color="text-gray-600"
          icon="fa-solid fa-house-circle-check"
          name="Freehold"
          key={itemKey}
        />
      );
    case "broadband_internet":
      return (
        <FacilitiyItem
          color="text-gray-600"
          icon="fa-solid fa-tower-broadcast"
          name="Broadband Internet"
          key={itemKey}
        />
      );

    case "cable_TV":
      return (
        <FacilitiyItem
          color="text-gray-600"
          icon="fa-solid fa-satellite-dish"
          name="Satellite/Cable TV"
          key={itemKey}
        />
      );
    case "fire_extinguisher":
      return (
        <FacilitiyItem
          color="text-red-800"
          icon="fa-solid fa-fire-extinguisher"
          name="Satellite/Cable TV"
          key={itemKey}
        />
      );
    case "visitor_log":
      return (
        <FacilitiyItem
          color="text-gray-800"
          icon="fa-solid fa-file-signature"
          name="Visitor Log"
          key={itemKey}
        />
      );
    case "nearby_hospitals":
      return (
        <FacilitiyItem
          color="text-red-600"
          icon="fa-solid fa-square-h"
          name="Nearby Hospitals"
          key={itemKey}
        />
      );

    case "nearby_schools":
      return (
        <FacilitiyItem
          color="text-green-600"
          icon="fa-solid fa-graduation-cap"
          name="Nearby Schools"
          key={itemKey}
        />
      );

    case "lawn_garden":
      return (
        <FacilitiyItem
          color="text-green-600"
          icon="fa-brands fa-pagelines"
          name="Lawn or Garden"
          key={itemKey}
        />
      );

    case "central_heating":
      return (
        <FacilitiyItem
          color="text-red-700"
          icon="fa-solid fa-temperature-high"
          name="Central Heating"
          key={itemKey}
        />
      );

    case "central_air":
      return (
        <FacilitiyItem
          color="text-cyan-600"
          icon="fa-regular fa-snowflake"
          name="Central Heating"
          key={itemKey}
        />
      );
    case "waste_disposal":
      return (
        <FacilitiyItem
          color="text-green-700"
          icon="fa-solid fa-recycle fa-fw"
          name="Waste Disposal"
          key={itemKey}
        />
      );

    default:
      return (
        <FacilitiyItem
          color="text-amber-600"
          icon="fa-solid fa-question"
          name={itemKey}
          key={itemKey}
        />
      );
  }
};

export default FacilitiyItemKey;
