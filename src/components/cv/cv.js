import React, { useState } from 'react';
import Button from '../buttons/button';
import './cv.scss';

function CV() {

    const textButton = "TÉLÉCHARGER LE CV"
    const icon = "download"

    return (
        <div className="cv">
            <h2>CV</h2>
            <div className="content">
                <span>Progress barre 1</span>
                <span>Progress barre 2</span>
                <span>Progress barre 3</span>
                <span>Progress barre 4</span>
                <Button text={textButton} icon={icon} />
            </div>
        </div>
    );
}

export default CV;