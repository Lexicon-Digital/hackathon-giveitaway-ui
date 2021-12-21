import GoogleMapReact from 'google-map-react';

interface ContainerProps {
    center: any;
    zoom: number;
  }

  
const MapComponent : React.FC<ContainerProps> = ({ center, zoom }) => {
    
  
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBMD-fm0mgErpOGU5G9mJlaSGp3y0HJ_II" }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            {/* <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            /> */}
          </GoogleMapReact>
        </div>
      );
    
  }
  
  export default MapComponent;