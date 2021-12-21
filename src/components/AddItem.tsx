import React from 'react';
import AddItemButton from './AddItemButton';

import './PreviewItem.css'
import defaultImage from './../images/default-img.gif'



const AddItem: React.FC = () => {
    return (
        <>
            <div className="add-item-menu-container">
                <AddItemMenu />
            </div>
        </>
    )
}

const AddItemMenu: React.FC = () => {
    return (
        <>
            <div className="preview-box">

            </div>
            <div>
                {/* <img className="item-picture" src={defaultImage} alt="couch photo" /> */}
            </div>
        </>
    )
}

export default AddItem;
