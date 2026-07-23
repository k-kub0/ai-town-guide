"use client";

import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapComponent() {
  return (
    <Map
      initialViewState={{
        longitude: 139.7671,
        latitude: 35.6812,
        zoom: 12,
      }}
      style={{
        width: "100%",
        height: "600px",
      }}
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
    />
  );
}