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
import { Link } from "react-router-dom";

// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
    UncontrolledCarousel,
    CustomInput,
    Modal,
    NavLink
} from "reactstrap";
import Login from "./../../Login/Login";
import SellForm from "../../../components/SellForm.js";
import Search from "../../../components/Search.js";


class Buy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isLoggedIn: false,
            id: "",
            formModal: false
        };
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({
                isLoggedIn: AppState.isLoggedIn,
                user: AppState.user
            });
            this.setState({ id: AppState.user.id });
        }
        console.log(this.state.id);
    }

    logout() {
        let appState = {
            isLoggedIn: false,
            user: {}
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
        this.props.history.push("/login");
    }
    toggleModal = modalState => {
        this.setState({
            [modalState]: !this.state[modalState]
        });
    };

    scrollToProducts = () => {
        document
            .getElementById("products")
            .scrollIntoView({ behavior: "smooth" });
    };

    render() {
        return (
			<div id="carouselIndicators" class="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="/#carouselIndicators" data-slide-to="0" class="active"></li>
					<li data-target="/#carouselIndicators" data-slide-to="1"></li>
				</ol>
				<div class="carousel-inner" role="listbox">
					<div class="carousel-item active">
						<div class="carousel-caption text-center">
							<h2 className="mb-0">Lihat Katalog
								<span className="mb-0">Barang murah berkualitas ada disini</span>
							</h2>
							<a onClick={this.scrollToProducts} class="btn btn-simple btn-primary mt-2" style={{letterSpacing:"6px", fontWeight: "bold"}}>BELANJA SEKARANG !</a>
						</div>
					</div>
					<div class="carousel-item item2">
						<div class="carousel-caption text-center">
							<h2 className="mb-0">Jual Barangmu
								<span className="mb-0">Mulailah berjualan disini</span>
							</h2>
							<a onClick={() => this.toggleModal("formModal")} class="btn btn-simple btn-primary mt-2" style={{letterSpacing:"6px", fontWeight: "bold"}}>JUAL SEKARANG !</a>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
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
                                            Jual Barangmu!
                                        </h3>
                                    </div>
                                </div>
                                <div className="modal-body">
                                    {this.state.isLoggedIn && (
                                        <SellForm id={this.state.user.id} />
                                    )}
                                    {!this.state.isLoggedIn && (
                                        <div className="text-center ">
                                            <h4 className="text-white text-center">
                                                Untuk jual barang, kamu harus
                                                Masuk terlebih dahulu!
                                            </h4>
                                            <div className="modal-footer">
                                                <Link to="/login">
                                                    <Button
                                                        className="btn-simple btn-primary btn-round"
                                                        type="button"
                                                    >
                                                        Masuk
                                                    </Button>
                                                </Link>
                                                <Button
                                                    className="btn-simple btn-primary btn-round"
                                                    // color="link"
                                                    onClick={() =>
                                                        this.toggleModal(
                                                            "formModal"
                                                        )
                                                    }
                                                    type="button"
                                                >
                                                    Batal
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Modal>
			</div>
            /* <div className="section">
                <Container>
                    <div className="title">
                        <Container>
                            <h2 className="text-center">
                                Hi, {this.state.id} Selamat datang di{" "}
                                <span className="text-primary"> Seken!</span>
                            </h2>
                        </Container>
                    </div>
                    <Row className="justify-content-between align-items-center">
                        <Col lg="7">
                            <UncontrolledCarousel
                                items={carouselItems}
                                indicators={false}
                                autoPlay={false}
                            />
                        </Col> */
                        /* <Col className="mb-2 text-center" lg="5">
                            <br></br>
                            <h3>
                                Punya barang tak terpakai?
                                <br />
                                <span className="text-primary">
                                    Jual aja disini!
                                </span>
                            </h3>
                            <Button
                                className="align-items-center btn-simple btn-round"
                                color="primary"
                                onClick={() => this.toggleModal("formModal")}
                            >
                                Yuk, Jualan!
                            </Button>

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
                                            Jual Barangmu!
                                        </h3>
                                    </div>
                                </div>
                                <div className="modal-body">
                                    {this.state.isLoggedIn && (
                                        <SellForm id={this.state.user.id} />
                                    )}
                                    {!this.state.isLoggedIn && (
                                        <div className="text-center ">
                                            <h4 className="text-white text-center">
                                                Untuk jual barang, kamu harus
                                                login dulu!
                                            </h4>
                                            <div className="modal-footer">
                                                <Link to="/login">
                                                    <Button
                                                        className="btn-simple btn-primary btn-round"
                                                        type="button"
                                                    >
                                                        Login
                                                    </Button>
                                                </Link>
                                                <Button
                                                    className="btn-simple btn-primary btn-round"
                                                    // color="link"
                                                    onClick={() =>
                                                        this.toggleModal(
                                                            "formModal"
                                                        )
                                                    }
                                                    type="button"
                                                >
                                                    Batal
                                                </Button>
                                            </div>
                                            <Link to="/login">
                  <Button
                  className="btn-round btn-primary text-center btn-simple"
                  onClick={() => this.toggleModal("formModal")}>
                      Login
                  </Button>
                  </Link>
                  <Button
                  className="btn-round btn-primary text-center btn-simple"
                  onClick={() => this.toggleModal("formModal")}>
                      Batal
                  </Button>
                                        </div>
                                    )}
                                </div>
                            </Modal>
                            <br></br>
                            <br></br>
                            <h3>
                                Lagi cari barang bekas?
                                <br />
                                <Search />
                                <span className="text-primary">
                                    Yuk lihat katalog!
                                </span>
                            </h3>

                            <Button
                                className="align-items-center btn-simple btn-round"
                                color="primary"
                                onClick={this.scrollToProducts}
                            >
                                Lihat Katalog
                            </Button>
                        </Col> */
                    /* </Row>
                </Container>
            </div> */
        );
    }
}

export default Buy;
