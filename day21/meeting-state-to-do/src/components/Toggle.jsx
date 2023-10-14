import React, { useState } from 'react';
import './Toggle.css'

export const Toggle = () => {
    const [src, setSrc] = useState(0)

    const srcFunction = (src) => {
        if (src <= 1) {
            return src + 1
        } else {
            return src = 0
        }
    }

    const toggleclass = () => {
        setSrc(srcFunction(src))
    }

    const getClassName = () => {
        let imagebd = 'check'
        switch (src) {
            case 0:
            imagebd = 'check'
            break;
            case 1:
            imagebd = 'cross'
            break;
            case 2:
            imagebd = 'qmark'
            break;
        }
        return imagebd
    }



    return (
        <>
            <div onClick={toggleclass} className={getClassName()}></div>
        </>
    )
}