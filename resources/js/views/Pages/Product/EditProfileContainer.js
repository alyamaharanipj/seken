import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Modal, Button,ModalHeader, ModalBody, ModalFooter, NavLink } from "reactstrap";

import Axios from "axios";
class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRegistered: false,
            error: "",
            errorMessage: "",
            modalSuccess: false,
            modalFail: false,
            formSubmitting: false,
            modalPenjual: false,
            data:[],
            user: {
                nama: "", //
                kontak: "", //
                password: ""
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleNama = this.handleNama.bind(this);
        this.handleKontak = this.handleKontak.bind(this);
    }

    componentDidMount() {
        // let state = localStorage["appState"];
        // if(state){
        //     let AppState = JSON.parse(state);
        //     this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
        // }
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({
                data: AppState.user
            });
        }
        if (this.state.isRegistered) {
            return this.props.history.push("/");
        }
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
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ formSubmitting: true });
        // ReactDOM.findDOMNode(this).scrollIntoView();
        let userData = this.state.user;
        let dataSend = new FormData();
        dataSend.append("nama", userData.nama);
        dataSend.append("password", userData.password);
        dataSend.append("kontak", userData.kontak);
        console.log(userData);

        console.log(dataSend);

        Axios.put("/api/editprofile/" + this.state.data.id, userData)
            .then(response => {
                return response;
            })
            .then(res => this.setState({ modalSuccess: true }))

            // .catch(err => this.setState({  }))
            .catch(error => {
                if (error.response.data.nama == false) {
                    alert("nama salah");
                    // console.log(error.response.data.username);
                }
                if (error.response.data.kontak == false) {
                    alert("Kontak telah digunakan");
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
                                        EDIT PROFIL
                                    </h2>
                                    <label className="card-title text-center text-white">
                                        Anda dapat mengubah profil disini
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
                                                    this.state.user.email
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
                                                    this.state.user.password
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
                                                    this.state.user.nama
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
                                                    this.state.user.kontak
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
                                                    this.state.user.username
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
                                            Simpan
                                        </button>
                                    </form>
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
                                                    Yeay!
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <h1 className="text-success text-center">
                                                <i className="tim-icons icon-satisfied" />
                                            </h1>
                                            <h4 className="text-center text-darker">
                                                Login berhasil!
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
                                                Profilmu berhasil diperbarui!
                                            </h4>
                                        </div>
                                        <Button
                                            className="btn-danger text-center"
                                            color="primary"
                                            onClick={this.toogleModalFail2.bind(
                                                this
                                            )}
                                        >
                                            OK
                                        </Button>
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
export default EditProfile;
