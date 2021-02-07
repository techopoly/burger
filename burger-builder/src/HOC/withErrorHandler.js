import React, { Component } from 'react';
import { axios1 } from '../axios/axios';
import ErrorModal from '../Component/errorModal/ErrorModal'


const withErrorHandler = (WrappedComponent) => {

    return class extends Component {

        state = {
            error: null
        }

        constructor(props) {
            super(props);
            this.request = axios1.interceptors.request.use(
                (req) => {
                    console.log(req)
                    return req
                },
                (err) => {
                    console.log(err);
                    this.setState({
                        error: err
                    })
                    return err
                });
            this.response = axios1.interceptors.response.use(
                (res) => {
                    console.log(res)
                    return res
                },
                (err) => {
                    console.log(err);
                    this.setState({
                        error: err
                    })
                    return err
                })
        }

        componentWillUnmount() {
            console.log('compWillUnmount: ' + this.request, this.response)
            axios1.interceptors.request.eject(this.request);
            axios1.interceptors.response.eject(this.response);
        }

        hideModal = ()=>{
            this.setState({
                error : null
            })
        }

        render() {
            return (
                <React.Fragment>
                    <ErrorModal 
                    show={this.state.error} 
                    message={this.state.error ? this.state.error.message : null}
                    hideModal = {this.hideModal}/>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            )
        }

    }
}

export default withErrorHandler;





