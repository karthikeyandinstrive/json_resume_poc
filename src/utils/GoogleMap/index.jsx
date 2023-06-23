import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import React from "react";
import { GOOGLE_MAP_KEY } from "../../services/Env/index";

const mapStyles = {
  width: "100%",
};

const MapContainer = React.memo(function MapContainer(props) {
  const { lat = "11.4102038", lng = "76.6950324" } = props;

  return (
    <Map
      google={props.google}
      zoom={16}
      style={mapStyles}
      center={{
        lat: lat,
        lng: lng,
      }}
      initialCenter={{
        lat: lat,
        lng: lng,
      }}
    >
      <Marker title={""} name={""} position={{ lat: lat, lng: lng }} />
    </Map>
  );
});

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_KEY,
})(MapContainer);
