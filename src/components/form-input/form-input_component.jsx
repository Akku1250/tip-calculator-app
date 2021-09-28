import React from 'react';

import './form-input_style.scss';

const FormInput = ({handleChange, label, imageURL,alt,...otherProps}) => (
    <div className="input-group">
        {
            label ?
                (<div className="label-container">
                    <label className={`form-input-label`}>
                        {label}
                    </label>
                </div>)
                :null
        }
        <div className="input-container">
            {
                imageURL? 
                (<img className="form-input-icon" src={imageURL} alt={alt}/>)
                : null
            }
            <input 
                className={`form-input ${imageURL? 'add-spacing': ''}`} 
                onChange={handleChange} 
                {...otherProps}/>   
        </div>
    </div>
)

export default FormInput;