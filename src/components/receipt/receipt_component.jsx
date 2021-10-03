import React from "react";
import './receipt_style.scss';


const Receipt = ({title,subText,amount}) => (
    <div className="receipt">
        <div className="receipt-text">
            <p className="receipt-title">
                {title}
            </p>
            <span>{subText}</span>
        </div>
        <div className="receipt-amount">
            <p>${amount}</p>
        </div>
    </div>
)


export default Receipt;