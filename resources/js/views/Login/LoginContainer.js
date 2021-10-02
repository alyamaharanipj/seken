import React, { Component } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import Axios from "axios";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            error: "",
            formSubmitting: false,
            username: "",
            password: "",
            user: {},
            redirect: this.props.redirect,
            modalSuccess: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
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
    componentDidMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({
                isLoggedIn: AppState.isLoggedIn,
                user: AppState.user
            });
        }
    }
    handleUsername(e) {
        let value = e.target.value;
        this.setState({
            username: value
        });
    }

    handlePassword(e) {
        let value = e.target.value;
        this.setState({
            password: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ formSubmitting: true });
        Axios.post("/api/auth/login", {
            username: this.state.username,
            password: this.state.password
        })
            // .then(response => {
            //     return response;
            // })
            // .then(res => this.setState({ modalSuccess: true }))
            .then(json => {
                // if (json.data.success) {
                //     let userData = {
                //         id: json.data.user.id,
                //         nama: json.data.user.nama,
                //         email: json.data.user.email,
                //         username: json.data.user.username,
                //         kontak: json.data.user.kontak,
                //         access_token: json.data.success.access_token
                //     };
                //     let appState = {
                //         isLoggedIn: true,
                //         user: userData
                //     };
                //     localStorage["appState"] = JSON.stringify(appState);
                //     this.setState({
                //         isLoggedIn: appState.isLoggedIn,
                //         user: appState.user,
                //         error: ""
                //     });
                //     //hipotesis bug
                //     if (this.state.isLoggedIn) {
                //         let path = useHistory();
                //         path.push("/");
                //     }
                //     this.props.history.push("/");
                // } else {
                //     alert(`Our System Failed To Logged In!`);
                // }

                let userData = {
                    id: json.data.data.id,
                    nama: json.data.data.nama,
                    email: json.data.data.email,
                    username: json.data.data.username,
                    access_token: json.data.data.access_token
                };
                let appState = {
                    isLoggedIn: true,
                    user: userData
                };
                localStorage["appState"] = JSON.stringify(appState);
                this.setState({
                    isLoggedIn: appState.isLoggedIn,
                    user: appState.user,
                    error: "",
                    modalSuccess: true
                });
                if (this.state.isLoggedIn) {
                    let path = useHistory();
                    path.push("/");
                }
            })
            // .catch(err => this.setState({ }))
            .catch(error => {
                if (error.response) {
                    let err = error.response.data;
                    this.setState({
                        error: err.message,
                        errorMessage: err.errors,
                        formSubmitting: false,
                        modalFail: true
                    });
                }
                // perbaikan login dengan menampilkan kesalahan

                // perbaikan login dengan menampilkan kesalahan
                else if (error.request) {
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
            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto set-margin">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center text-white">
                                    Masuk!
                                </h5>
                                <form
                                    className="form-signin mt-4"
                                    onSubmit={this.handleSubmit}
                                >
                                    <div className="form-label-group">
                                        <label htmlFor="inputUsername">
                                            Username
                                        </label>

                                        <input
                                            type="text"
                                            id="inputUsername"
                                            className="form-control"
                                            required
                                            onChange={this.handleUsername}
                                        />
                                    </div>
                                    <div className="form-label-group">
                                        <label htmlFor="inputPassword">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            maxLength="16"
                                            minLength="8"
                                            id="inputPassword"
                                            className="form-control"
                                            required
                                            onChange={this.handlePassword}
                                        />
                                    </div>
                                    <button
                                        disabled={this.state.formSubmitting}
                                        type="submit"
                                        name="singlebutton"
                                        className="btn btn-primary btn-lg btn-block mt-5"
                                    >
                                        {this.state.formSubmitting
                                            ? "Logging You In..."
                                            : "Log In"}{" "}
                                    </button>
                                    <p className="mt-5 text-white">
                                        Belum meiliki akun? <br />{" "}
                                        <Link
                                            to="/register"
                                            className="underline_text text-white"
                                        >
                                            Klik disini
                                        </Link>
                                    </p>

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
                                                Login gagal, isi data dengan
                                                benar ya!
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
                                </form>
                            </div>
                            {/* //modalSuccess// */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginContainer);
