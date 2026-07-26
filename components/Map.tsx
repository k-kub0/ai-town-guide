"use client";

import { useState } from "react";
import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

import LocationInfo from "./LocationInfo";

export default function MapComponent() {
  const [clickedLocation, setClickedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  return (
    <>
      <Map
        initialViewState={{
          longitude: 139.7671,
          latitude: 35.6812,
          zoom: 14,
        }}
        style={{
          width: "100%",
          height: "600px",
        }}
        mapStyle="https://tiles.openfreemap.org/styles/liberty"
        onClick={(event) => {
          setClickedLocation({
            latitude: event.lngLat.lat,
            longitude: event.lngLat.lng,
          });
        }}
      >
        {clickedLocation && (
          <Marker
            longitude={clickedLocation.longitude}
            latitude={clickedLocation.latitude}
            anchor="bottom"
          >
            📍
          </Marker>
        )}
      </Map>

      {clickedLocation && (
        <LocationInfo
          latitude={clickedLocation.latitude}
          longitude={clickedLocation.longitude}
        />
      )}
    </>
  );
}