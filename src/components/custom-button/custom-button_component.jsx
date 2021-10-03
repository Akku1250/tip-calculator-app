import React from 'react';
import './custom-button_style.scss';

const CustomButton = ({children, addClass, ...otherProps}) => (
    <button className={`custom-button ${addClass ? addClass : '' }`} {...otherProps}>
       {children}
    </button>
)

export default CustomButton;