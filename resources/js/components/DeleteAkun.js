import {
    ButtonToggle,
    Form,
    Button,
    FormGroup,
    Label,
    Input,
    CustomInput,
    UncontrolledAlert,
    FormText,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    InputGroup
} from "reactstrap";
import React, { Component } from "react";
import { Link, Redirect, withRouter, NavLink } from "react-router-dom";
import Axios from "axios";
export default class DeleteAkun extends Component {
    constructor(props) {
        super();
        this.state = {
            isRegistered: false,
            error: "",
            errorMessage: "",
            modalSuccess: false,
            modalFail: false,
            formSubmitting: false,
            modalPenjual: false
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
        Axios.delete("/api/deleteallproduct/" + this.props.Penjual.id).then(
            response => {
                return response;
            }
        );
        Axios.delete("/api/deletepenjual/" + this.props.Penjual.id)
            .then(response => {
                return response;
            })
            .then(res => this.setState({ modalSuccess: true }))
            .catch(error => {
                alert("Error");
            })
            .finally(this.setState({ error: "" }));
    }

    render() {
        return (
            <div>
                <ButtonToggle
                    color="danger"
                    color="primary"
                    className="align-items-center text-center"
                    onClick={this.toogleNewProductModal.bind(this)}
                >
                    Delete
                </ButtonToggle>{" "}
                <Modal
                    isOpen={this.state.modalPenjual}
                    toggle={this.toogleNewProductModal.bind(this)}
                >
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h2 className="card-title text-center text-white"></h2>
                            <label className="card-title text-center text-white">
                                Apakah anda yakin?
                            </label>
                        </div>
                        <Button
                            className="btn-dark text-center"
                            color="danger"
                            onClick={this.addBarang.bind(this)}
                        >
                            Ya
                        </Button>
                        <Button
                            className="btn-dark text-center"
                            color="primary"
                            onClick={this.toogleNeProductkModal2.bind(this)}
                        >
                            Cancel
                        </Button>
                    </div>
                    <Modal
                        isOpen={this.state.modalSuccess}
                        toggle={this.toogleModalSucces1.bind(this)}
                        className="modal-success"
                    >
                        <ModalHeader>Perhatian</ModalHeader>
                        <ModalBody>Akun Telah terhapus</ModalBody>
                        <ModalFooter>
                            <NavLink to="/" tag={Link}>
                                Beranda
                            </NavLink>
                        </ModalFooter>
                    </Modal>
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
                                Akun penjual gagal di hapus ,Sistem error
                            </h4>
                        </div>
                    </Modal>
                </Modal>
            </div>
        );
    }
}

if (document.getElementById("deleteakun")) {
    ReactDOM.render(<DeleteAkun />, document.getElementById("deleteakun"));
}
