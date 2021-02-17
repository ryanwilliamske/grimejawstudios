import React from 'react';
// import Link from 'react-router-dom';

const STYLES = ['btn-pri','btn-seccondary'];
const SIZES = ['btn-lg','btn-sm'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize}) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
        const CheckButtonSize = SIZES.includes(buttonSize) ? buttonSize :   SIZES[0] ;

        return(
            <button
            className={`btn ${checkButtonStyle} ${CheckButtonSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        )

};

