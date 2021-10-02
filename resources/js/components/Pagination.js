import React, { Component } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import NumberFormat from "react-number-format";
import { Card, CardBody, CardFooter, Row, Col, CardImg } from "reactstrap";

import ButtonSold from "./ButtonSold";

import { Link } from "react-router-dom";
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: null,
            results: {},
            loading: false,
            message: "",
            offset: 0,
            data: [],
            perPage: 18,
            currentPage: 0,
            formModal: false,
            Sold: ""
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    handleOnInputChange = event => {
        // const query = event.target.value;
        this.setState({ query: event.target.value });
        this.receivedData();
    };
    toggleModal = modalState => {
        this.setState({
            [modalState]: !this.state[modalState]
        });
    };
    receivedData() {
        if (this.state.query == null) {
            axios.get("/api/").then(res => {
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
                                {pd.isSold == 1 && <ButtonSold />}
                                <CardImg
                                    alt="Card Image Cap"
                                    src={"/data_file/" + pd.foto}
                                    className="img-center"
                                    width="100%"
                                    height="170px"
                                />
                                <CardBody style={{ padding: "0.75rem" }}>
                                    <h5 className="text-truncate text-capitalize mt-0 mb-0">
                                        <b>{pd.nama_barang}</b>
                                    </h5>
                                    <h4 className="mt-0 mb-0">
                                        <NumberFormat
                                            value={pd.harga}
                                            displayType={"text"}
                                            decimalSeparator={","}
                                            thousandSeparator={"."}
                                            prefix={"Rp "}
                                        />
                                    </h4>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                ));

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    postData
                });
            });
        } else {
            axios.get("/api/find/" + this.state.query).then(res => {
                const data = res.data;
                const slice = data.slice(
                    this.state.offset,
                    this.state.offset + this.state.perPage
                );
                const postData = slice.map(pd => (
                    // <React.Fragment>
                    <Col xs="6" md="3">
                        <Link
                            className="text-white"
                            onClick={() => this.toggleModal("formModal")}
                        >
                            <Card key={pd.id} className="card-coin card-plain">
                                {pd.isSold == 1 && <ButtonSold />}
                                <CardImg
                                    alt="Card Image Cap"
                                    src={"/data_file/" + pd.foto}
                                    width="100%"
                                    height="150vw"
                                    object-fit="cover"
                                />
                                <CardBody>
                                    <Row>
                                        <Col className="text-center" md="12">
                                            <h5 className="text-truncate">
                                                <b> {pd.nama_barang}</b>
                                            </h5>
                                            <h4>
                                                <NumberFormat
                                                    value={pd.harga}
                                                    displayType={"text"}
                                                    decimalSeparator={","}
                                                    thousandSeparator={"."}
                                                    prefix={"Rp "}
                                                />
                                            </h4>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter>
                                    <ModalBarang Barang={pd} />
                                </CardFooter>
                            </Card>
                        </Link>
                    </Col>
                ));

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    postData
                });
            });
        }
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
    }
    render() {
        return (
            <div>
                <Row>{this.state.postData}</Row>
                <Row className="pagination justify-content-center">
                    <ReactPaginate
                        previousLabel={<i className="fas fa-chevron-left"></i>}
                        nextLabel={<i className="fas fa-chevron-right"></i>}
                        breakLabel={<span className="gap">...</span>}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        containerClassName={"pagination"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        activeClassName={"active"}
                    />
                    <br />
                    <br />
                    <br />
                </Row>
            </div>
        );
    }
}
