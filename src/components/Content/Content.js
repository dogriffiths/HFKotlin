import React from "react";

import './Content.css';

const Content = (props) => {
    return <div className='Content-container'>
        <div className='Content-inner' {...props}>
            {props.children}
        </div>
    </div>;
};

export default Content;