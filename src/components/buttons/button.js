import React from 'react';
import './button.scss';

import * as GrIcons from "react-icons/gr"

function Button(label, icon) {

    const icone = GrIcons[icon];

    return (
        <button className="button">
            <icone />
            {label.text}
        </button>
    );
}

export default Button;