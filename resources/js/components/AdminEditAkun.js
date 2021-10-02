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
    Container
} from "reactstrap";
import axios from "axios";
import EditBarang from "./EditBarang.js";
import { Link } from "react-router-dom";
import Sold from "./Sold.js";
import DeleteAkun from "./DeleteAkun.js";
class AdminEditAkun extends React.Component {
    constructor(props) {
        super();
        this.state = {
            user: [],
            isLoggedIn: false,
            id: "",
            Penjual: [],
            Barang: [],
            formModal: false,
            newData: {
                id_penjual: "",
                id_barang: ""
            }
        };
    }
    toggleModal = modalState => {
        this.setState({
            [modalState]: !this.state[modalState]
        });
    };

    componentDidMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({
                isLoggedIn: AppState.isLoggedIn,
                user: AppState.user
            });
            this.setState({ id: AppState.user.id });
            axios.get("/api/penjual").then(response => {
                this.setState({
                    Penjual: response.data
                });
            });
        }
    }

    render() {
        let Penjual = this.state.Penjual.map(Penjual => {
            return (
                <Col xs="6" md="2">
                    <Link
                        className="text-white"
                        onClick={() => this.toggleModal("formModal")}
                    >
                        <Card key={Penjual.id} className="card-coin card-plain">
                            <CardBody>
                                <Row>
                                    <Col className="text-center" md="12">
                                        <h5 className="text-truncate">
                                            <b>{Penjual.nama}</b>
                                        </h5>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <DeleteAkun Penjual={Penjual} />
                            </CardFooter>
                        </Card>
                    </Link>
                </Col>
            );
        });

        return (
            <Container>
                <div className="wrapper">
                    <div className="section">
                        <br />
                        <h1 className="text-white text-center">
                            {" "}
                            <span className="text-primary">
                                {" "}
                                List Semua Akun
                            </span>
                        </h1>
                        <br />
                    </div>
                </div>
                <Row>{Penjual}</Row>
            </Container>
        );
    }
}

export default AdminEditAkun;
