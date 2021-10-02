import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    Modal,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        formModal: false
    };
}

  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
    render() {
      return (
        <footer className="footer">
          <Container>
            <Row>
              <Col md="4" className="text-center">
                <h1 className="title">SEKEN•</h1>
              </Col>
              <Col md="4">
                <Nav>
                  <NavItem>
                  <NavLink  to="/" tag={Link}>
                      Beranda
                    </NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink to="/about-us"tag={Link}>
                      Tentang
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  to="/contact-us" tag={Link}>
                      Kontak
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
              {/* <Col md="3">
                <Nav>
                  <NavItem>
                  <NavLink  to="/" tag={Link}>
                      Beranda
                    </NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink to="/about-us"tag={Link}>
                      Tentang
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  to="/contact-us" tag={Link}>
                      Kontak
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col> */}
              <Col md="4">
              <h3 className="title">Ikuti kami:</h3>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://api.whatsapp.com/send?phone=6285703126352"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <h3><i className="fab fa-whatsapp" /></h3>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  Message us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://line.me/R/ti/p/%40563taqsi"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <h3><i className="fab fa-line" /></h3>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  Add us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://instagram.com/seken.polban"
                  id="tooltip318450378"
                  target="_blank"
                >
                  <h3><i className="fab fa-instagram" /></h3>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450378">
                  Ikuti kami
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="mailto:sekenpolban@gmail.com"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <h3><i className="fa fa-envelope" /></h3>
                </Button>
              </div>
            </Col>
            </Row>

          </Container>
        </footer>
      );
    }
  }

  export default Footer;


if (document.getElementById('footer')) {
    ReactDOM.render(<Footer />, document.getElementById('footer'));
}
