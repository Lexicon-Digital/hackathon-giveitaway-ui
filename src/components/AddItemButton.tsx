import React from 'react';
import { addCircle, caretDownCircle } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import AddItem from './AddItem';

import './AddItemButton.css'

const AddItemButton: React.FC = () => {

    const [clicked, setClicked] = React.useState(false);

    const openAddItemMenu: any = () => {
        if (clicked === false) {
            setClicked(true)
        }
        else {
            setClicked(false)
        }
    }

    return (
        <div>
            {clicked ?
                <>
                    <IonIcon className="icon" icon={caretDownCircle}  onClick={openAddItemMenu} />
                    <div id="add-item-container" className="add-item-container">
                        <AddItem />
                    </div>
                </>
                :
                <>
                    <IonIcon className="icon" icon={addCircle}  onClick={openAddItemMenu} ></IonIcon>
                </>
            }

        </div>

    )
}



export default AddItemButton