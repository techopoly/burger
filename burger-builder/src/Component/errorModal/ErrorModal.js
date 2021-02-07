import React, { Component } from 'react';

import classes from './errorModal.module.css';


class ErrorModal extends Component {

    render () {
        return (
            <React.Fragment>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                    onClick= {this.props.hideModal}>
                    <h3>{this.props.message}</h3>
                </div>
            </React.Fragment>
        )
    }
}

export default ErrorModal;