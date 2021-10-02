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
    CardImg,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput
} from "reactstrap";

import ModalBarang from "../../../../components/Modal.js";
import DataPenjual from "../../../../components/DataPenjual.js";
import { Link } from "react-router-dom";
export default class Component extends React.Component {
    constructor(props) {
        super();
        this.state = {
            Barang: [],
            miniModal: false,
            newBarangData: {
                harga_terendah: "",
                harga_tertinggi: ""
            }
        };
        this.loadBarang = this.loadBarang.bind(this);
    }
    toggleModal = modalState => {
        this.setState({
            [modalState]: !this.state[modalState]
        });
    };
    loadBarang() {
        let barangdata = this.state.newBarangData;
        let fd = new FormData();
        fd.append("data1", barangdata.harga_terendah);
        fd.append("data2", barangdata.harga_tertinggi);
        axios.get("/api/byvalue/", fd).then(response => {
            this.setState({
                Barang: response.data
            });
        });
    }

    toogleNewProductModal() {
        this.setState({
            miniModal: true
        });
    }
    // toogleNeProductkModal2() {
    //     this.setState({
    //         miniModal: false
    //     });
    // }

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

        return (
            <div>
                <Row>{Barang}</Row>
                <Modal
                    isOpen={this.state.miniModal}
                    // toggle={this.toogleNewProductModal.bind(this)}
                >
                    <Form>
                        <FormGroup>
                            <Label for="harga_terendah">Harga Terendah</Label>
                            <Input
                                type="text"
                                id="harga_terendah"
                                placeholder="Masukkan harga terendah"
                                value={this.state.newBarangData.harga_terendah}
                                onChange={e => {
                                    let { newBarangData } = this.state;
                                    newBarangData.harga_terendah =
                                        e.target.value;
                                    this.setState({ newBarangData });
                                }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="harga_tertinggi">Harga Tertinggi</Label>
                            <Input
                                type="text"
                                id="harga_tertinggi"
                                placeholder="Masukkan harga tertinggi"
                                value={this.state.newBarangData.harga_tertinggi}
                                onChange={e => {
                                    let { newBarangData } = this.state;
                                    newBarangData.harga_tertinggi =
                                        e.target.value;
                                    this.setState({ newBarangData });
                                }}
                            ></Input>
                        </FormGroup>
                        <Button
                            color="primary"
                            className="align-items-center btn-simple btn-round"
                            onClick={this.loadBarang.bind(this)}
                        >
                            Cari
                        </Button>
                    </Form>
                </Modal>
                <Button
                    color="primary"
                    className="align-items-center btn-simple btn-round"
                    onClick={this.toogleNewProductModal.bind(this)}
                >
                    Cari
                </Button>
            </div>
        );
    }
}
