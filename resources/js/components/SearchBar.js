import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, Container, Row, Col, Input, Media} from 'reactstrap';

export default class SearchBar extends Component {
    render() {
        return (
            <div style={{color: '#CC99FF', backgroundColor:'#404040'}}>
            <Container style={{width:'100%'}}>
                <Row style={{color: '#CC99FF', backgroundColor:'#404040'}}>
                    <Col xs="auto">
                        <Button>Search</Button>
                    </Col>
                    <Col>
                        <Input placeholder="Search" />
                    </Col>
                </Row>
                <br></br>

            </Container>
            </div>
        );
    }
}

if (document.getElementById('searchBar')) {
    ReactDOM.render(<SearchBar/>, document.getElementById('searchBar'));
}