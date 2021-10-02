import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardColumns, CardGroup
  } from 'reactstrap';
import axios from 'axios';

export default class Cards extends Component {

  constructor(props){
    super(props);
    this.state={
      Barang:[],
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8100/api/').then(response =>{
      this.setState({
        Barang:response.data,
      })
    })
  }

    render() {
      let Barang = this.state.Barang.map((Barang) =>{
        return (
            <Card key = {Barang.id} style={{border:'5px solid #CC77FF',margin:'20px'}} >
                <CardImg top width="100%" src={Barang.foto} alt="Card image cap" />
                <CardBody style={{backgroundColor: '#404040'}}>
                <div style={{padding:'5px', backgroundColor: '#606060'}}>
                <CardTitle align="center" style={{color: '#CC77FF'}}><h4>{Barang.nama_barang}</h4></CardTitle>
                <br></br>
                <CardSubtitle style={{color: '#FFFFFF'}}>Rp {Barang.harga}</CardSubtitle>
                <CardText style={{color: '#FFFFFF'}}>{Barang.deskripsi}</CardText>
                </div>
                </CardBody>
            </Card>

        )
    })

    return (
      <div>
        <CardColumns style={{marginRight:'30px'}}>
              {Barang}
        </CardColumns>
      </div>
      )
    }
  }

if (document.getElementById('cards')) {
    ReactDOM.render(<Cards />, document.getElementById('cards'))
}
