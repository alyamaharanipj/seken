import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'reactstrap';

export default class MainContainer extends Component {
    render() {
        return (
        <div style={{borderTop: "5px solid #CC99FF",borderBottom: "5px solid #CC99FF",backgroundColor: '#404040'}}>
        <Container  align ="center" >
            <hr></hr>
            <img width="40%"src="storage\Logo2.png"/>
            <hr></hr>
        </Container>
        </div>
        );
    }
}

if (document.getElementById('mainContainer')) {
    ReactDOM.render(<MainContainer />, document.getElementById('mainContainer'));
}
