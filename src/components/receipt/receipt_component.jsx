import React from "react";
import './receipt_style.scss';


const Receipt = ({title, tipAmount}) => (
    <div className="receipt">
        <div className="receipt-text">
            <p className="receipt-title">
                {title}
            </p>
            <span>/ person</span>
        </div>
        <div className="receipt-amount">
            <p>${tipAmount}</p>
        </div>
    </div>
)


export default Receipt;