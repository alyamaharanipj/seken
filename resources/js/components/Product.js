import React from "react";
import {
    Container,
    Button,
    Modal
  } from "reactstrap";
  import { Link } from "react-router-dom";
  import NumberFormat from 'react-number-format';
import ButtonSold from "./ButtonSold"
import Sold from "./Sold"
class Product extends React.Component{

    state = {
      product_detail: [],
      kontak: "",
      user: [],
      formModal: false
    }
    toggleModal = modalState => {
      this.setState({
          [modalState]: !this.state[modalState]
      });
  };
    componentDidMount () {
      const { match: { params } } = this.props;
      console.log(this.props)
      axios
        .get(`/api/findDetail/${params.id}`)
        .then(response => {
        this.setState({
          product_detail: response.data[0],
          kontak: response.data[0].kontak.substring(1)
        });
      });
      let state = localStorage["appState"];
      if (state) {
          let AppState = JSON.parse(state);
          this.setState({
              user: AppState.user
          });
      }
    }

    render(){
        return (
          <Container>
            <br/><br/>
          <section class="banner-bottom-wthreelayouts py-lg-5 py-3">
          <div class="container">
            <div class="inner-sec-shop pt-lg-4 pt-3">
              <div class="row">
                  <div class="col-lg-6 single-right-left text-center">
                      <div class="grid images_3_of_2">
                        <div class="flexslider1">
                          <ul class="slides">
                            <li data-thumb="images/d2.jpg">
                            
                              <div class="thumb-image">{this.state.product_detail.isSold==1 && (
                                <div style={{marginLeft:"120px"}}>
                                    <ButtonSold Barang={this.state.product_detail}/>
                                    </div>
                                )} <img src={"/data_file/" + this.state.product_detail.foto} style={{width: "300px", height: "300px"}}data-imagezoom="true" class="img-fluid" alt=" "/> </div>
                            </li>
                          </ul>
                          <div class="clearfix"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="col-lg-6 single-right-left simpleCart_shelfItem">
                    <Container>
                      <h3 className="text-white">{this.state.product_detail.nama_barang}</h3>
                      <h3 className="text-primary"><NumberFormat value={this.state.product_detail.harga} displayType={'text'} decimalSeparator={","} thousandSeparator={"."}  prefix={'Rp '} /></h3>

          <div class="single_page">
            <h6 className="text-white mt-2">kategori</h6>
            <p>{this.state.product_detail.kategori}</p>
          </div>
          <div class="single_page">
            <h6 className="text-white mt-2">deskripsi</h6>
            <p>{this.state.product_detail.deskripsi}</p>
          </div>
          <div class="single_page">
            <h6 className="text-white mt-2">PENJUAL</h6>
            <p>{this.state.product_detail.nama}</p>
            {this.state.user.id != this.state.product_detail.id_penjual &&
            <Link to={`/toko/${this.state.product_detail.id_penjual}`}>
            <Button className="btn btn-simple btn-primary">Kunjungi Toko</Button>
            </Link>}
            {this.state.user.id != this.state.product_detail.id_penjual && 
            <Button href={"https://api.whatsapp.com/send?phone=62"+ this.state.kontak} className="btn btn-simple btn-primary">Chat Sekarang</Button>
          }
          {this.state.user.id == this.state.product_detail.id_penjual && 
          
            <>
            <Link>
            <Button className="btn btn-simple btn-primary">Edit Barang</Button>
            </Link>
          </>
    }
    {this.state.user.id == this.state.product_detail.id_penjual && this.state.product_detail.isSold == 0 &&
    <>
      <Button className="btn btn-simple btn-primary" onClick={() => this.toggleModal("formModal")}>Sold</Button>
      <Modal
                                modalClassName="modal-black"
                                isOpen={this.state.formModal}
                                // toggle={() => this.toggleModal("formModal")}
                            >
                                <div className="modal-header justify-content-center">
                                    <button
                                        className="close"
                                        onClick={() =>
                                            this.toggleModal("formModal")
                                        }
                                    >
                                        <i className="tim-icons icon-simple-remove text-white" />
                                    </button>
                                    <div className="text-muted text-center ml-auto mr-auto">
                                        <h3 className="mb-0 text-primary">
                                            Tandai sebagai terjual
                                        </h3>
                                    </div>
                                </div>
                                <div className="modal-body">
                                  <Sold Barang={this.state.product_detail}/>
                                        
                                </div>
                            </Modal>
                            </>
    }
                  </div>
                  </Container>
        </div>
              </div>
            </div>
          </div>
          </section>
           
        </Container>
        );
    }
}

export default Product;
