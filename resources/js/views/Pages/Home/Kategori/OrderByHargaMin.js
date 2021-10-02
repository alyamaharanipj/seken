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
import ReactDOM from "react-dom";
// react plugin used to create charts
// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Modal,
    Row,
    Col,
    CardImg
} from "reactstrap";

import Barang from "../../../../components/Barang.js";
import ModalBarang from "../../../../components/Modal.js";
import DataPenjual from "../../../../components/DataPenjual.js";
import { Link } from "react-router-dom";
export default class Component extends React.Component {
    constructor(props) {
        super();
        this.state = {
            Barang: [],
            miniModal: false
        };
    }
    toggleModal = modalState => {
        this.setState({
            [modalState]: !this.state[modalState]
        });
    };
    loadBarang() {
        axios.get("/api/bymin/").then(response => {
            this.setState({
                Barang: response.data
            });
        });
    }

    componentWillMount() {
        this.loadBarang();
    }
    render() {
        let Barang = this.state.Barang.map(Barang => {
            return (
                <Col xs="6" md="2">
                    <Link className="text-white">
                        <Card key={Barang.id} className="card-coin card-plain">
                            <CardImg
                                alt="Card Image Cap"
                                // src="{{ url('/data_file/'.Barang.foto}}"
                                src={"/data_file/" + Barang.foto}
                                className="img-center"
                                width="100%"
                                height="150vw"
                                object-fit="cover"
                            />
                            <CardBody>
                                <Row>
                                    <Col className="text-center" md="12">
                                        <h5 className="text-truncate">
                                            <b>{Barang.nama_barang}</b>
                                        </h5>
                                        <span>Rp {Barang.harga}</span>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <ModalBarang Barang={Barang} />
                                <DataPenjual Barang={Barang} />
                            </CardFooter>
                        </Card>
                    </Link>
                </Col>
            );
        });
        return <Row>{Barang}</Row>;
    }
}
