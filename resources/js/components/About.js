import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Row, Col, Input, Media} from 'reactstrap';

export default class About extends Component {

    render() {
        return (
          <div>
            <Container style={{padding: '30px', color: '#CC99FF', backgroundColor:'#404040', width:'100%'}}>
                <h3><b>DESCRIPTION</b></h3>
             </Container>
            <Container style={{padding: '30px', color: '#606060', backgroundColor:'#fff', width:'100%'}}>
                <div className="row">
                  <div className="col-md-3">
                    <img width ="200px" src="storage\Logo pilihan.png" className="center"/>
                  </div>
                  <div className="col-md-9">
                  <p style={{padding: '40px', color: '#606060', backgroundColor:'#fff', width:'100%'}}>
                    <font size="4">
                      Seken adalah website market place yang memfasilitasi mahasiswa POLBAN untuk menjual ataupun membeli barang bekas secara online yang menyediakan jasa mid-man.
                    </font>
                  </p>
                </div>
                </div>
            </Container>
            <Container style={{padding: '30px', color: '#CC99FF', backgroundColor:'#404040', width:'100%'}}>
                <h3><b>VISION</b></h3>
            </Container>
            <Container style={{padding: '30px', color: '#606060', backgroundColor:'#fff', width:'100%'}}>
                <div className="row">
                  <div className="col-md-6">
                    <p style={{padding: '15px', color: '#606060', backgroundColor:'#fff', width:'100%'}}>
                    <font size="4">
                      Menjembatani kegiatan jual beli barang bekas mahasiswa POLBAN.
                    </font>
                  </p>
                  </div>
                  <div className="col-md-6">
                  <p style={{padding: '15px', color: '#606060', backgroundColor:'#fff', width:'100%'}}>
                    <font size="4">
                      Menjadi salah satu platform jual beli barang unggulan di lingkungan kampus POLBAN.
                    </font>
                  </p>
                </div>
                </div>
            </Container>
            <Container style={{padding: '30px', color: '#CC99FF', backgroundColor:'#404040', width:'100%'}}>
                <h3><b>CONTACT</b></h3>
            </Container>
            <Container style={{padding: '30px', color: '#606060', backgroundColor:'#fff', width:'100%'}}>
                <img width ="80px" src="\storage\line.png"/>
                <a href="https://www.instagram.com/seken.polban">
                <img width ="60px" src="\storage\instagram.png"/>
                </a>
            </Container>

          </div>
      );
    }
}

if (document.getElementById('about')) {
    ReactDOM.render(<About />, document.getElementById('about'));
}
