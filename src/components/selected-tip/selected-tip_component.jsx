import React from "react";
import CustomButton from "../custom-button/custom-button_component";
import FormInput from "../form-input/form-input_component";
import './selected-tip_style.scss';

const SeletedTip = ({label, tips, handleTipSelection, handleCustomTip, customTip}) => (
    <div className="select-tip">
        <div className="label-container">
            <label className={`form-input-label`}>
                {label}
            </label>
        </div>
        <div className="d-grid">
            {tips.map((tip) => (
                tip.type === 'button' 
                    ? (<CustomButton key={tip.id} 
                            name={tip.name} 
                            value={tip.value}
                            onClick={handleTipSelection} 
                            addClass={`${tip.active ? 'button-active' : '' } custom-button`}
                        >
                            {`${tip.value}%`}
                        </CustomButton>)
                    : (<FormInput key={tip.id}
                            name={tip.name}
                            value={customTip} 
                            type="number" 
                            placeholder={tip.placeholder}
                            handleChange = {handleCustomTip}
                            addClass={`${tip.active ? 'input-active' : '' } custom-input`}
                       />)
            ))}
        </div>
    </div>
)


export default SeletedTip;