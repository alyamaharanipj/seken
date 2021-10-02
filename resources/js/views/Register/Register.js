import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RegisterContainer from './RegisterContainer';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: props.location
        };
    }
    render() {
        return (
            <div className="content">
                <br/>
                <RegisterContainer redirect={this.state.redirect} />
            </div>
        )
    }
}

export default withRouter(Register);