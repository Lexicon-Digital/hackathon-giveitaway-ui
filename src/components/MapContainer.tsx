import React, { useEffect, useState } from "react";
import { Circle, GoogleMap, LoadScript, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Geolocation } from '@capacitor/geolocation';


const containerStyle = {
  width: "100%",
  height: "100vh",
  marginTop: "20px",
};

interface Listing {
  id: number,
  lat: number,
  lng: number
}

const MapContainer: React.FC = () => {
  


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBMD-fm0mgErpOGU5G9mJlaSGp3y0HJ_II"
  })
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(async function callback(map) {
    
    const coordinates = await Geolocation.getCurrentPosition();
    
    var myPlace = new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude);
    console.log('myPlace', myPlace);

    const bounds = new window.google.maps.LatLngBounds(myPlace);
    bounds.extend(myPlace);
    map.setCenter(myPlace);
    map.fitBounds(bounds);
    map.setZoom(16);

    const iconBase =
    "http://maps.google.com/mapfiles/kml/shapes/";

    const icons: Record<string, { icon: string }> = {
      person: {
        icon: iconBase + "man.png",
      },
      listing: {
        icon: iconBase + "grocery.png",
      },
    };

    const listings = [
      {
        position: new google.maps.LatLng(coordinates.coords.latitude - 0.0010, coordinates.coords.longitude + 0.0010),
        type: "listing",
      },
      {
        position: new google.maps.LatLng(coordinates.coords.latitude + 0.0020, coordinates.coords.longitude - 0.0020),
        type: "listing",
      },
      {
        position: new google.maps.LatLng(coordinates.coords.latitude - 0.0030, coordinates.coords.longitude + 0.0030),
        type: "listing",
      },
      {
        position: myPlace,
        type: "person"
      }
    ]

    // Create markers.
    for (let i = 0; i < listings.length; i++) {
      bounds.extend(listings[i].position);
      const marker = new google.maps.Marker({
        position: listings[i].position,
        icon: icons[listings[i].type].icon,
        map: map,
      });
      
    }

    setMap(map);
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  return isLoaded ? ( 
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={{ streetViewControl: false, fullscreenControl: false }}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      </GoogleMap>
  ) : <></>;
};
  
  export default MapContainer;