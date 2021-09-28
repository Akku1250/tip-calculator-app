import React from "react";
import './section_style.scss';

const Section = ({addClass, children}) => (
    <div className={`section ${addClass ? addClass : '' }`}>
      {children}
    </div>
)

export default Section;