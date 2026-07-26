"use client";

import { useState } from "react";
import Map, { Marker, MapLayerMouseEvent } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

import { reverseGeocode } from "@/lib/geocoding";
import LocationInfo from "./LocationInfo";

export default function MapComponent() {
  const [clickedLocation, setClickedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [address, setAddress] = useState("");

  const handleMapClick = async (event: MapLayerMouseEvent) => {
    const latitude = event.lngLat.lat;
    const longitude = event.lngLat.lng;

    setClickedLocation({
      latitude,
      longitude,
    });

    const address = await reverseGeocode(latitude, longitude);
    setAddress(address);
  };

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
        onClick={handleMapClick}
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

      {address && (
        <div
          style={{
            marginTop: "20px",
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h2>住所</h2>
          <p>{address}</p>
        </div>
      )}
    </>
  );
}