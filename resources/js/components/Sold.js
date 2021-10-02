import {
    ButtonToggle,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";
import React, { Component } from "react";
import { Link, Redirect, withRouter, NavLink } from "react-router-dom";
import Axios from "axios";
export default class Sold extends Component {
    constructor(props) {
        super();
        this.state = {
            isRegistered: false,
            error: "",
            errorMessage: "",
            modalSuccess: false,
            modalFail: false,
            formSubmitting: false,
            modalPenjual: false,
            Barang: {
                isSold: true
            }
        };
        this.addBarang = this.addBarang.bind(this);
    }

    componentDidMount() {
        if (this.state.isRegistered) {
            return this.props.history.push("/");
        }
    }
    toogleModalSucces1() {
        this.setState({
            modalSuccess: true
        });
    }
    toogleModalSucces2() {
        this.setState({
            modalSuccess: false
        });
    }
    toogleModalFail1() {
        this.setState({
            modalFail: true
        });
    }

    toogleModalFail2() {
        this.setState({
            modalFail: false
        });
    }
    toogleNewProductModal() {
        this.setState({
            modalPenjual: true
        });
    }
    toogleNeProductkModal2() {
        this.setState({
            modalPenjual: false
        });
    }
    addBarang() {
        let bo = this.state.Barang;
        Axios.put("/api/editsold/" + this.props.Barang.id, bo)
            .then(response => {
                return response;
            })
            .then(res => this.setState({ modalSuccess: true }))

            // .catch(err => this.setState({  }))
            .catch(error => {
                alert("Error");
            })
            .finally(this.setState({ error: "" }));
    }

    render() {
        return (
            <div>
             <div className="text-center ">
                                            <h4 className="text-white text-center">
                                                Apakah kamu yakin?
                                            </h4>
                                            <div className="modal-footer">
                                                    <Button
                                                        className="btn-simple btn-primary btn-round"
                                                        type="button"
                                                        onClick={this.addBarang.bind(this)}
                                                    >
                                                        Ya
                                                    </Button>
                                                <Button
                                                    className="btn-simple btn-primary btn-round"
                                                    // color="link"
                                                    onClick={this.toogleNeProductkModal2.bind(this)}
                                                    type="button"
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </div> 
                                        <Modal
                                        // modalClassName="modal-success"
                                        isOpen={this.state.modalSuccess}
                                        toggle={() =>
                                            window.location.assign("/")
                                        }
                                    >
                                        <div className="modal-header justify-content-center">
                                            <button
                                                className="close"
                                                onClick={() =>
                                                    window.location.assign("/")
                                                }
                                            >
                                                <i className="tim-icons icon-simple-remove text-success" />
                                            </button>
                                            <div className="text-muted text-center ml-auto mr-auto">
                                                <h3 className="mb-0 text-success">
                                                    Selamat!
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <h1 className="text-success text-center">
                                                <i className="tim-icons icon-satisfied" />
                                            </h1>
                                            <h4 className="text-center text-darker">
                                                {this.props.Barang.nama_barang} sudah terjual!
                                            </h4>
                                        </div>
                                        <Button
                                            className="btn-dark text-center"
                                            color="success"
                                            onClick={() =>
                                                window.location.assign("/")
                                            }
                                        >
                                            OK
                                        </Button>
                                    </Modal>
                    {/* <Modal
                        isOpen={this.state.modalSuccess}
                        toggle={this.toogleModalSucces1.bind(this)}
                        className="modal-success"
                    >
                        <ModalHeader>Selamat!</ModalHeader>
                        <ModalBody>{this.props.Barang.nama_barang} sudah terjual!</ModalBody>
                        <ModalFooter>
                            <NavLink to="/" tag={Link}>
                                Beranda
                            </NavLink>
                        </ModalFooter>
                    </Modal> */}
                    <Modal
                        // modalClassName="modal-danger"
                        isOpen={this.state.modalFail}
                        toggle={this.toogleModalFail2.bind(this)}
                    >
                        <div className="modal-header justify-content-center">
                            <button
                                className="close"
                                onClick={this.toogleModalFail2.bind(this)}
                            >
                                <i className="tim-icons icon-simple-remove text-danger" />
                            </button>
                            <div className="text-muted text-center ml-auto mr-auto">
                                <h3 className="mb-0 text-danger">Yah...</h3>
                            </div>
                        </div>
                        <div className="modal-body">
                            <h1 className="text-danger text-center">
                                <i className="tim-icons icon-alert-circle-exc" />
                            </h1>
                            <h4 className="text-center text-darker">
                                Perubahan data gagal, isi data dengan benar ya!
                            </h4>
                        </div>
                    </Modal>
                    </div>
        );
    }
}

if (document.getElementById("editsold")) {
    ReactDOM.render(<Sold />, document.getElementById("editsold"));
}
