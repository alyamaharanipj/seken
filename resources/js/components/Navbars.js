import React, {Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
// import '../css/nav.css';
// import Logo from '../assets/logoFlodora.png';

export default class Navbars extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {},
            isLoggedIn: false,
            id : ''
        };
        this.logout = this.logout.bind(this);
    }

    componentDidMount(){
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState.user});
            this.setState({ id: AppState.user.id });
        }
        console.log(this.state.id);
    }

    logout(){
        let appState = {
            isLoggedIn: false,
            user: {}
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
        this.props.history.push('/login');
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="navbar-brand">
                    <Link to="/">Seken.</Link>
                </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                        {this.state.isLoggedIn &&
                            <ul className="navbar-nav ml-auto navbar-right bg-toggle">
                                <li className="nav-item active">
                                    <Link className="theme-dark-li active" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="theme-dark-li" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="theme-dark-li" to="/content">Content</Link>
                                </li>
                                <li className="nav-item">
                                    
                                    <a className="theme-dark-li" href="/api/logout" onClick={this.logout}>Logout</a>
                                </li>
                            </ul>
                            } 
                        {!this.state.isLoggedIn &&
                            <ul className="navbar-nav ml-auto navbar-right bg-toggle">
                                <li className="nav-item active">
                                    <Link className="theme-dark-li active" to="/">Home</Link>
                                </li>
                                <li className="nav-item"> 
                                    <Link className="theme-dark-li" to="/about-us">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="theme-dark-li" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="theme-dark-li" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="theme-dark-li" to="/contact-us">Contact</Link>
                                </li>  
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        )
    }
}
