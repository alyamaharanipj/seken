import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Container,
    Row,
    Col,
    CardImg,
    Button
  } from "reactstrap";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';
import ButtonSold from "./ButtonSold";
import EditBarang from "./EditBarang";
import Sold from "./Sold";
class Toko extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            store_detail: [],
            kontak: "",
            results: {},
            loading: false,
            message: "",
            offset: 0,
            data: [],
            perPage: 18,
            currentPage: 0,
            Sold: "",
            id : ""
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    receivedData() {
        const { match: { params } } = this.props;
            axios.get(`/api/findStore/${params.id_penjual}`).then(res => {
                const data = res.data;
                const slice = data.slice(
                    this.state.offset,
                    this.state.offset + this.state.perPage
                );
                const postData = slice.map(pd => (
                        <Col xs="6" md="2">
                            <Link to={`/product/${pd.id}`}>
                                <Card
                                    key={pd.id}
                                    className="card-plain card-product"
                                >
                                {pd.isSold==1 && (
                                    <ButtonSold />
                                )}
                                    <CardImg
                                        alt="Card Image Cap"
                                        src={"/data_file/" + pd.foto}
                                        className="img-center"
                                        width="100%"
                                        height="170px"
                                    />
                                    <CardBody style={{padding: "0.75rem" }}>
                                        <h5 className="text-truncate text-capitalize mt-0 mb-0">
                                            <b>{pd.nama_barang}</b></h5>
                                            <h4 className="mt-0 mb-0"><NumberFormat value={pd.harga} displayType={'text'} decimalSeparator={","} thousandSeparator={"."}  prefix={'Rp '} /></h4>
                                    </CardBody>
                                    
                                </Card>
                            </Link>
                        </Col>
                ));
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    postData,
                    store_detail: res.data[0],
                    kontak: res.data[0].kontak.substring(1)
                });
            });
    }
    handlePageClick = e => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState(
            {
                currentPage: selectedPage,
                offset: offset
            },
            () => {
                this.receivedData();
            }
        );
    };
    componentDidMount() {
        this.receivedData();
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({
                isLoggedIn: AppState.isLoggedIn,
                user: AppState.user
            });
            this.setState({ id: AppState.user.id });
        }
    }
    render(){
        return(
        <div>
        <Container>
        <div className="wrapper">
          <div className="section">
            <Container>
            <Container>
                <Container className="mt-4 mb-4">
                <Row className="text-center">
                <Col >
                  <img
                  alt="..."
                  className="rounded-circle shadow-lg"
                  src="assets/img/people.png"
                  style={{ width: "130px" }}
                />          
                <br />
                <p className="d-block text-uppercase font-weight-bold">      
                <br />
                {this.state.store_detail.nama}
                </p>
                {this.state.id == this.state.store_detail.id_penjual &&
                    <Link to={"/editprofile"}>
                        <Button className="btn btn-simple btn-primary">Edit Profile</Button>
                    </Link>
                }
                {this.state.id != this.state.store_detail.id_penjual &&
                    <Button href={"https://api.whatsapp.com/send?phone=62"+ this.state.kontak} className="btn btn-simple btn-primary">Chat Sekarang</Button>
                }
              </Col>
              </Row>
                </Container>
                    <Row>
                        {this.state.postData}    
                    </Row>
                    <Row className="pagination justify-content-center">
                        <ReactPaginate
                            previousLabel={<i className="fas fa-chevron-left"></i>}
                            nextLabel={<i className="fas fa-chevron-right"></i>}
                            breakLabel={<span className="gap">...</span>}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            breakClassName={'page-item'}
                            breakLinkClassName={'page-link'}
                            containerClassName={'pagination'}
                            pageClassName={'page-item'}
                            pageLinkClassName={'page-link'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link'}
                            activeClassName={'active'}
                        /><br/><br/><br/>
                    </Row>
            </Container>
            </Container>
            </div>
            </div>
            </Container>
            </div>
        );
    }
}

export default Toko;
