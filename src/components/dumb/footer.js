import React from 'react';

// COMP 38C
const Footer = (props) => {
    console.log(props);
    return (
        <div>
            {/* COMP 38D RENDER PROPS */}
            <p>You are currently in the {props.location} page.</p>
        </div>
    )
}

export default Footer;