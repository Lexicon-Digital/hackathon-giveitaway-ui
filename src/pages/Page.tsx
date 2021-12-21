import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import AddItemButton from '../components/AddItemButton';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

import Logo from './../images/logo.png'

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <AddItemButton />
      <IonHeader>
        <div className="header">
          <img className="logo" src={Logo} /> 
        </div>
      </IonHeader>

      <IonContent  className="Map">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
