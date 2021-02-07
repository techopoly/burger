import React from 'react';

import classes from './spinner.module.css';

const spinner = (props) => (
    <div className={classes.Loader}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
    >Loading..</div>
);

export default spinner;