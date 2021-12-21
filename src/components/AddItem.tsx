import React from 'react';
import { useForm } from 'react-hook-form'

import './PreviewItem.css'
import './AddItem.css'
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
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit: any = (data: any) => console.log(data);
    console.log(errors);
    return (
        <>
            <div className="preview-box">
                <div className="title-container">
                    <p className="title">Want To Give It Away</p>
                </div>
                <div className="item-picture-container">
                    <img className="item-picture" src={defaultImage} alt="couch photo" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form">
                        <label className="label" htmlFor="name-of-item">Name Of Item*</label>
                        <input id="name-of-item" className="input-field" type="text" placeholder="Couch" {...register("Name Of Item", { required: true, maxLength: 80 })} />
                        
                        <label className="label" htmlFor="description">Description*</label>
                        <textarea className="input-field" id="description" placeholder="e.g  White couch with grey stripes" {...register("Description", { required: true, maxLength: 155 })} />

                        <label className="label" htmlFor="pick-up-instruction">Pick Up Instructions*</label>
                        <input className="input-field" id="pick-up-instruction" type="text" placeholder="e.g Located on my driveway at 455 Bourke " {...register("Pick Up Instructions ", {})} />

                        <label className="label" htmlFor="email">Email*</label>
                        <input className="input-field" id="email" type="text" placeholder="e.g give@mail.com" {...register("Email", { required: true })} />

                        <label className="label" htmlFor="number">Number*</label>
                        <input className="input-field" id="number" type="tel" placeholder="e.g 0412345678" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                    </div>

                    <input type="submit" />
                </form>
            </div>
            <div>

            </div>
        </>
    )
}

export default AddItem;