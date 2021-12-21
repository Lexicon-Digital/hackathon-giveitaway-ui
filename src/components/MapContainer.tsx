import React, { useEffect, useState } from "react";
import { Circle, GoogleMap, LoadScript, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Geolocation } from '@capacitor/geolocation';


const containerStyle = {
  width: "100%",
  height: "100vh",
  marginTop: "20px",
};


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

    const icons: Record<string, { icon: string }> = {
      person: {
        icon: "assets/body.svg",
      },
      listing: {
        icon: "assets/item.svg",
      },
    };

    // retrieve this later from the API
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

    const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

    // Create markers.
    for (let i = 0; i < listings.length; i++) {
      bounds.extend(listings[i].position);
      const marker = new google.maps.Marker({
        position: listings[i].position,
        icon: icons[listings[i].type].icon,
        title: "Item",
        map: map,
      });

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
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
  ) : <><div>Loading ...</div></>;
};
  
  export default MapContainer;