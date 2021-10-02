/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from 'react-dom'
// react plugin used to create charts
// reactstrap components
import {
  Button,
  Card,
  TabContent,
  UncontrolledAlert,
  TabPane,
  Table,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  UncontrolledTooltip,
  Row,
  Col
} from "reactstrap";

// core components

class ContactUs extends React.Component {
  render() {
  return (
      <div className="section">
          <Container>
          <div className="title">
            <Container>
                  <h1 className="text-primary text-center">
                    Ada pertanyaan?
                  </h1>
              </Container>
            </div>
            <Row className="justify-content-between align-items-center">
              <Col className="text-center" lg="7">
                <img
                    alt="..."
                    className="img-fluid"
                    src="assets/img/contact6.png"
                  />
                <a href="http://www.freepik.com">Designed by Freepik</a>
              </Col>
              <Col className="mb-1" lg="4" >
                <br/>
                <h2 className="text-white text-center ">Hubungi kami</h2>
                <h1>
                  <a className="text-white" href="https://api.whatsapp.com/send?phone=6282115222339">
                    <i className="offset-1 fab fa-whatsapp align-middle"></i>
                    <h4 className="offset-1 d-inline align-middle" >
                      082115222339
                    </h4>
                  </a>
                </h1>
                <h1>
                  <a className="text-white" href="https://line.me/R/ti/p/%40563taqsi">
                    <i className="offset-1 fab fa-line align-middle"></i>
                    <h4 className="offset-1 d-inline align-middle" >
                      @563taqsi
                    </h4>
                  </a>
                </h1>
                <h2>
                  <a className="text-white" href="mailto:sekenpolban@gmail.com">
                    <i className=" offset-1 fa fa-envelope align-middle"></i>
                    <h4 className="offset-1 d-inline align-middle" >
                      seken.polban@gmail.com
                    </h4>
                  </a>
                </h2>
                <h1>
                  <a className="text-white" href="https://instagram.com/seken.polban">
                    <i className="offset-1 fab fa-instagram align-middle"></i>
                    <h4 className="offset-1 d-inline align-middle">
                      @seken.polban
                    </h4>
                  </a>
                </h1>
              </Col>
              <div className="info info-horizontal text-center">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-square-pin" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Temukan kami disini</h4>
                      <p className="text-center">
                        Gedung Jurusan <br/>
                        Teknik Komputer dan Informatika<br/>
                        Politeknik Negeri Bandung<br/>
                        Jl. Gegerkalong Hilir, Ds. Ciwaruga<br/>
                        Bandung, Jawa Barat  <br/>
                      </p>
                    </div>
                  </div>
            </Row>
        </Container>

        </div>
    );
  }
}

export default ContactUs;
