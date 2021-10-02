import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
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
    NavLink,
    Nav,
    NavItem,
    Container
} from "reactstrap";
class Admin extends React.Component {
    constructor(props) {
        super();
        this.state = {
            user: [],
            isLoggedIn: false,
            formModal: false
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
        }
    }

    render() {
        return (
            <Container>
                <div className="wrapper">
                    <div className="section">
                        <br />
                        <h1 className="text-white text-center">
                            {" "}
                            <span className="text-primary"> Halaman Admin</span>
                        </h1>
                        <br />
                        <NavItem>
                            <NavLink to="/admineditbarang" tag={Link}>
                                List Semua Barang
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/admineditakun" tag={Link}>
                                List Semua Akun
                            </NavLink>
                        </NavItem>
                        <br />
                    </div>
                </div>
            </Container>
        );
    }
}

export default Admin;
