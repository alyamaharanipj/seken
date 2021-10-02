import React, {Component} from 'react';
import Navbars from './PagesNavbar';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component{
    // 1.1
    constructor(props) {
        super(props);
        this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn
        };
    }
    render(){   
        return (
            <div>
                <Navbars user={this.state.user} isLoggedIn={this.state.isLoggedIn}/>
            </div>
        );
    }
}

export default withRouter(Header);