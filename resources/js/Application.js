import React, { Component } from 'react';
// import './css/App.css';
import {BrowserRouter, Link, Switch, Route, HashRouter} from 'react-router-dom';
import Main from './Router';
import Header from './components/Header';
import Footer from './components/Footer';


class Application extends Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn: false,
            user: {}
        };
    }

    componentDidMount(){
        let state = localStorage["appState"];
        if(state){
            let AppState = JSON.parse(state);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user});
        }
    }

    render() {
        return (
            <div>
                <HashRouter>
                    <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
                    <Route default component={Main}/>
                    <Footer />  
                </HashRouter>
            </div>
        );
    }
}

export default Application;