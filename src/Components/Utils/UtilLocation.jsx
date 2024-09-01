import React from "react";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const UtilLocation = ({ position, ...props }) => {
  return (
    <React.Fragment>
      <div className="w-full h-full box-border">
        <MapContainer
          className="w-full h-full"
          center={position}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </React.Fragment>
  );
};

export default UtilLocation;