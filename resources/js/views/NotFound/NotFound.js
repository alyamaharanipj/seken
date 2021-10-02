import React, {Component} from 'react';
import {Table, Button, Row, Col, Container} from 'reactstrap'
import {Link} from "react-router-dom";

class NotFound extends Component{
    render(){
        return (
            <div className="section text-center">
            
            <br/>

              <Container>
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-center">
                  
                  <img
                    alt="..."
                    src="assets/img/ErrorPage404.png"
                  />
                <Col lg="4" md="6">
                <br/><br/>
                  <h1 className="text-primary">
                    Yah,{" "}
                    
                    <span className="text-white">halaman tidak ditemukan</span>
                  </h1>
                  <div className="btn-wrapper mb-3">
                  <Button 
                        className="align-items-center btn-simple btn-round text-center"
                        color="primary"
                        to="/" tag={Link}
                    >
                        Kembali
                    </Button>
                  </div>
                </Col>
              </Row>
            </div></Container>
            </div>

                      
        );
    }
}
export default NotFound;