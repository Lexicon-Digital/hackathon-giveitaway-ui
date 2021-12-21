import './ExploreContainer.css';
import MapContainer from './MapContainer';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  return (
    <div className="container">
        <MapContainer />
    </div>
  );
};

export default ExploreContainer;
