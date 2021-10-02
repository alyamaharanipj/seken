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
import Delete from "./Delete.js";
class AdminEditBarang extends React.Component {
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
            axios.get("/api/").then(response => {
                this.setState({
                    Barang: response.data
                });
            });
        }
    }

    render() {
        let Barang = this.state.Barang.map(Barang => {
            return (
                <Col xs="6" md="2">
                    <Link
                        className="text-white"
                        onClick={() => this.toggleModal("formModal")}
                    >
                        <Card key={Barang.id} className="card-coin card-plain">
                            <CardImg
                                alt="Card Image Cap"
                                // src="{{ url('/data_file/'.Barang.foto}}"
                                src={"/data_file/" + Barang.foto}
                                className="img-center align-middle"
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
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <EditBarang Barang={Barang} />
                                <Sold Barang={Barang} />
                                <Delete Barang={Barang} />
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
                                List Semua Barang
                            </span>
                        </h1>
                        <br />
                    </div>
                </div>

                <Row>{Barang}</Row>
            </Container>
        );
    }
}

export default AdminEditBarang;
