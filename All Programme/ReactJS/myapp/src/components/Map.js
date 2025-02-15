import React, { useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const MapComponent = ({ onLocationSelect }) => {
  const [map, setMap] = useState(null);

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      mapInstance.setCenter({ lat: latitude, lng: longitude });
    });
  };

  return (
    <Wrapper apiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <div style={{ height: "400px", width: "100%" }} ref={map}></div>
    </Wrapper>
  );
};

export default MapComponent;
