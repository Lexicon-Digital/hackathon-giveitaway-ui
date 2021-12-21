import React from 'react';

import './PreviewItem.css'
const defaultImage = 'assets/hard-rubbish-collection.jpeg';

const PreviewItem: React.FC = () => {

    return (
        <div className="preview-box-container">
            <div className="preview-box">
                <div className="title-container">
                    <p className="title">Want To Take It Away</p>
                </div>
                <div>
                    <img className="item-picture" src={defaultImage} alt="couch photo" />
                </div>
                <div className="name-of-product-container">
                    <p className="name-of-product">Couch</p>
                </div>
                <div className="description-container">
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ex perferendis aut repellat, adipisci sequi, molestias labore error, corrupti eum alias assumenda a magni perspiciatis quia iure neque fuga vero!</p>
                </div>
                <div className="pickup-instructions-container">
                    <p className="pickup-instructions">
                        Located on  my driveway at 455 Bourke st
                    </p>
                </div>
                <div className="publish-date-container">
                    <p className="publish-date">
                        08/10/2021 13:00
                    </p>
                </div>

            </div>

        </div>
    )
}

export default PreviewItem;