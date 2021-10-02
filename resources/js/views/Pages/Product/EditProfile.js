import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EditProfileContainer from './EditProfileContainer';

class EditProfile extends Component {
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
                <EditProfileContainer redirect={this.state.redirect} />
            </div>
        )
    }
}

export default withRouter(EditProfile);