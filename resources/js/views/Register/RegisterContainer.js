import {
    Button,
    Form,
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

class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRegistered: false,
            error: "",
            errorMessage: "",
            modalSuccess: false,
            modalFail: false,
            formSubmitting: false,
            user: {
                username: "", //
                nama: "", //
                kontak: "", //
                email: "",
                password: ""
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleNama = this.handleNama.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleKontak = this.handleKontak.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
    }

    componentDidMount() {
        // let state = localStorage["appState"];
        // if(state){
        //     let AppState = JSON.parse(state);
        //     this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
        // }
        if (this.state.isRegistered) {
            return this.props.history.push("/");
        }
    }

    handleEmail(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                email: value
            }
        }));
    }

    handleNama(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                nama: value
            }
        }));
    }

    handlePassword(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                password: value
            }
        }));
    }
    handleKontak(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                kontak: value
            }
        }));
    }
    handleUsername(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                username: value
            }
        }));
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
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ formSubmitting: true });
        // ReactDOM.findDOMNode(this).scrollIntoView();
        let userData = this.state.user;
        let dataSend = new FormData();
        dataSend.append("nama", userData.nama);
        dataSend.append("email", userData.email);
        dataSend.append("password", userData.password);
        dataSend.append("kontak", userData.kontak);
        dataSend.append("username", userData.username);

        console.log(dataSend);
        Axios.post("/api/auth/register", dataSend)
            .then(response => {
                return response;
            })

            .then(res => this.setState({ modalSuccess: true }))
            .then(json => {
                if (json.data.status) {
                    let userData = {
                        id: json.data.user.id,
                        nama: json.data.user.nama,
                        email: json.data.user.email,
                        kontak: json.data.user.kontak,
                        username: json.data.user.username,
                        password: json.data.user.password,
                        activation_token: json.data.activation_token
                    };
                    let appState = {
                        isRegistered: true,
                        user: userData
                    };
                    localStorage["appState"] = JSON.stringify(appState);
                    this.setState({
                        isRegistered: appState.isRegistered,
                        user: appState.user,
                        modalSuccess: true
                    });
                    this.setState({ modalSuccess: true });

                    //  this.props.history.push("/"); //hipotesis bug
                    alert(` registrasi Your Account! Sucess`);
                } else {
                    //     console.log(json.data);
                    alert(`Register failed`);
                    // }
                    // this.props.history.push("/"); //hipotesis bug
                }
            })
            // .catch(err => this.setState({  }))
            .catch(error => {
                if (error.response.data.username == false) {
                    alert("Username telah digunakan");
                    // console.log(error.response.data.username);
                }
                if (error.response.data.email == false) {
                    alert("Email telah digunakan");
                }
                if (error.response.data.kontak == false) {
                    alert("Kontak telah digunakan");
                }
                if (error.response) {
                    let err = error.response.data;
                    this.setState({
                        error: err.message,
                        errorMessage: err.errors,
                        formSubmitting: false,
                        modalFail: true
                    });
                } else if (error.request) {
                    let err = error.request;
                    this.setState({
                        error: err,
                        formSubmitting: false
                    });
                } else {
                    let err = error.message;
                    this.setState({
                        error: err,
                        formSubmitting: false
                    });
                }
            })
            .finally(this.setState({ error: "" }));
    }

    render() {
        return (
            <div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto set-margin">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h2 className="card-title text-center text-white">
                                        Daftar Sekarang!
                                    </h2>
                                    <label className="card-title text-center text-white">
                                        Silahkan isi data diri Anda di bawah ini
                                    </label>
                                    <form
                                        className="form-signin"
                                        onSubmit={this.handleSubmit}
                                        encType="multipart/form-data"
                                    >
                                        <div className="form-group">
                                            <label className="text-white">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={
                                                    this.state.user.email || ""
                                                }
                                                onChange={this.handleEmail}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="text-white">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                value={
                                                    this.state.user.password ||
                                                    ""
                                                }
                                                onChange={this.handlePassword}
                                                minLength="4"
                                                maxLength="16"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="text-white">
                                                Nama Lengkap
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={
                                                    this.state.user.nama || ""
                                                }
                                                onChange={this.handleNama}
                                                minLength="3"
                                                maxLength="50"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label className="text-white">
                                                No telepon
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={
                                                    this.state.user.kontak || ""
                                                }
                                                onChange={this.handleKontak}
                                                minLength="11"
                                                maxLength="13"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="text-white">
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={
                                                    this.state.user.username ||
                                                    ""
                                                }
                                                onChange={this.handleUsername}
                                                minLength="1"
                                                maxLength="13"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg btn-block mt-5"
                                        >
                                            Daftar
                                        </button>
                                    </form>
                                    <Modal
                                        isOpen={this.state.modalSuccess}
                                        toggle={this.toogleModalSucces1.bind(
                                            this
                                        )}
                                        className="modal-success"
                                    >
                                        <ModalHeader>Perhatian</ModalHeader>
                                        <ModalBody>
                                            Registrasi Berhasil!
                                        </ModalBody>
                                        <ModalFooter>
                                            <NavLink to="/login" tag={Link}>
                                                Login
                                            </NavLink>
                                        </ModalFooter>
                                    </Modal>
                                    <Modal
                                        // modalClassName="modal-danger"
                                        isOpen={this.state.modalFail}
                                        toggle={this.toogleModalFail2.bind(
                                            this
                                        )}
                                    >
                                        <div className="modal-header justify-content-center">
                                            <button
                                                className="close"
                                                onClick={this.toogleModalFail2.bind(
                                                    this
                                                )}
                                            >
                                                <i className="tim-icons icon-simple-remove text-danger" />
                                            </button>
                                            <div className="text-muted text-center ml-auto mr-auto">
                                                <h3 className="mb-0 text-danger">
                                                    Yah...
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <h1 className="text-danger text-center">
                                                <i className="tim-icons icon-alert-circle-exc" />
                                            </h1>
                                            <h4 className="text-center text-darker">
                                                Register gagal, isi data dengan
                                                benar ya!
                                            </h4>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(RegisterContainer);
