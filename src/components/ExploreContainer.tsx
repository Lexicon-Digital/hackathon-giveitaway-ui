import './ExploreContainer.css';
import MapComponent from './MapComponent';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        <MapComponent center={center} zoom={zoom} />
    </div>
  );
};

export default ExploreContainer;
