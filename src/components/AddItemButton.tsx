import React from 'react';
import {addCircle} from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import AddItem from './AddItem';

const AddItemButton:React.FC = () => {

    return (
        <div>
            <IonIcon icon={addCircle} size="large"></IonIcon>
            <div>
                <AddItem />
            </div>
        </div>
        
    )
}

export default AddItemButton