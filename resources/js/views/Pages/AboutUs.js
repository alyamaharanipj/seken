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
  Container,
  UncontrolledTooltip,
  Row,
  Col
} from "reactstrap";

// core components

class AboutUs extends React.Component {
  render() {
    return (
        <>
        <Container>
        <div className="wrapper">
          <div className="section">
            <Container>
              {/* <h1 className="text-white">
                Tentang Kami,    {" "}
                <span className="text-primary"> Tentang Seken.</span>
              </h1> */}
              <br />
              <h1 className="text-white text-center">
                Ini Kami,    {" "}
                <span className="text-primary"> Team Seken.</span>
                
              </h1>
              <br />
              <UncontrolledTooltip delay={0} target="tooltip230450809">
                Chief Excecutive Officer
              </UncontrolledTooltip>
              <UncontrolledTooltip delay={0} target="tooltip230450802">
                Chief Technology Officer
              </UncontrolledTooltip>
              <UncontrolledTooltip delay={0} target="tooltip230450803">
                Technology Officer
              </UncontrolledTooltip>
              <UncontrolledTooltip delay={0} target="tooltip230450804">
                Chief Marketing Officer
              </UncontrolledTooltip>
              <UncontrolledTooltip delay={0} target="tooltip230450805">
                Marketing Officer
              </UncontrolledTooltip>
              <Row className="text-center">
                <Col sm="3" xs="6" >
                  <img
                  id="tooltip230450809"
                  alt="..."
                  className="rounded-circle shadow-lg"
                  src="assets/img/member/eki.jpg"
                  style={{ width: "150px" }}
                />          
                <br />
                <p className="d-block text-uppercase font-weight-bold">      
                <br />
                  M. Rezky Bayusetya
                </p>
              </Col>
              <Col sm="3" xs="6">
                  <img
                    id="tooltip230450802"
                    alt="..."
                    className="rounded-circle shadow-lg"
                    src="assets/img/member/alya.jpg"
                    style={{ width: "150px" }}
                  />          
                  <p className="text-uppercase font-weight-bold mb-4">      
                <br />
                    Alya Maharani
                  </p>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                  <img
                  id="tooltip230450803"
                  alt="..."
                  className="rounded-circle shadow-lg"
                  src="assets/img/member/agung1.jpg"
                  style={{ width: "150px" }}
                />          
                <p className="d-block text-uppercase font-weight-bold mb-4 text-center">      
                <br />
                  Agung Tri Atmojo
                </p>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                  <img
                  id="tooltip230450803"
                  alt="..."
                  className="rounded-circle shadow-lg"
                  src="assets/img/member/ikhsan.jpg"
                  style={{ width: "150px" }}
                />          
                <p className="d-block text-uppercase font-weight-bold mb-4 text-center">      
                <br />
                  Ikhsan Setiawan
                </p>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <img
                  id="tooltip230450804"
                  alt="..."
                  className="rounded-circle shadow-lg"
                  src="assets/img/member/satria.jpg"
                  style={{ width: "150px" }}
                />    
                <p className="d-block text-uppercase font-weight-bold mb-4 text-center">      
                <br />
                  Satria Nata Bhaskara
                </p>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <img
                  id="tooltip230450805"
                  alt="..."
                  className="rounded-circle shadow-lg"
                  src="assets/img/member/fuad.jpg"
                  style={{ width: "150px" }}
                /> 
                  <p className="d-block text-uppercase font-weight-bold mb-4 text-center">     
                  <br />
                    Fuad Sheri Firdaus
                  </p>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                  <img
                  id="tooltip230450805"
                  alt="..."
                  className="rounded-circle shadow-lg"
                  src="assets/img/member/hana.jpg"
                  style={{ width: "150px" }}
                />     
                <p className="d-block text-uppercase font-weight-bold mb-4 text-center">     
                <br />
                  Hana Kirana
                </p>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                  <img
                  id="tooltip230450805"
                  alt="..."
                  className="rounded-circle shadow-lg"
                  src="assets/img/member/bima_1.jpg"
                  style={{ width: "150px" }}
                />      
                <p className="d-block text-uppercase font-weight-bold mb-4 text-center">
                <br />
                  M. Ridwansyah
                </p>
              </Col>
              </Row>
              </Container>
            </div>
          </div>
            <Container>
              <Row className="row-grid justify-content-center align-items-center">
                <Col lg="5" md="12">
                  <h1 className="text-primary">
                    Cerita Hadirnya Seken.<br />
                  </h1>
                  <p className="text-justify">
                    Seken dikembangkan pada tahun 2020 oleh kelompok mata kuliah Proyek 4 mahasiswa Jurusan
                    Teknik Komputer dan Informatika Politeknik Negeri Bandung untuk 
                    memfasilitasi jual beli barang bekas di lingkungan POLBAN.
                  </p>
                  <br />
                  <br />
                </Col>
                <Col  lg="5" md="12" className="text-center">
                  <img
                    width="75%"
                    alt="..."
                    className="img-fluid img-center text-center"
                    src="assets/img/2020 v2.png"
                  />
                </Col>
                <Col  lg="5" md="12"className="text-center">
                  <img
                    width="50%"
                    alt="..."
                    className="img-fluid img-center text-center"
                    src="assets/img/visi misi web.png"
                  />
                </Col>
                <Col lg="5" md="12">
                  <h1 className="text-primary">
                    Misi Kami<br />
                  </h1>
                  <p className="text-justify">
                    Seken dapat menjadi platform yang bisa bermanfaat untuk
                    masyarakat POLBAN dalam memfasilitasi mereka untuk mendapatkan
                    akses jual beli barang bekas yang mudah, efisien, dan terpercaya.
                  </p>
                </Col>
              </Row>
            </Container><br/><br/>
        </Container>
      </>
    );
  }
}

export default AboutUs;