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
import { Redirect, Link } from "react-router-dom";
import NumberFormat from "react-number-format";
// reactstrap components
import {
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

class PagesNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            isLoggedIn: false,
            id: "",
            collapseOpen: false,
            color: "navbar-transparent",
            query: "",
            data: false,
            cari: false
        };
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.changeColor);
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
    componentWillUnmount() {
        window.removeEventListener("scroll", this.changeColor);
    }
    logout() {
        let appState = {
            isLoggedIn: false,
            user: []
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
        window.location.reload(false);
    }
    handleOnInputChange = event => {
        // const query = event.target.value;
        this.setState({ query: event.target.value });
        console.log("query:" + event.target.value);
        console.log("data:" + this.state.data);
    };
    submit() {
        this.setState({
            data: true
        });
        this.research.bind(this);
    }
    changeColor = () => {
        if (
            document.documentElement.scrollTop > 99 ||
            document.body.scrollTop > 99
        ) {
            this.setState({
                color: "bg-white"
            });
        } else if (
            document.documentElement.scrollTop < 100 ||
            document.body.scrollTop < 100
        ) {
            this.setState({
                color: "navbar-transparent"
            });
        }
    };
    toggleCollapse = () => {
        document.documentElement.classList.toggle("nav-open");
        this.setState({
            collapseOpen: !this.state.collapseOpen
        });
    };
    onCollapseExiting = () => {
        this.setState({
            collapseOut: "collapsing-out"
        });
    };

    onCollapseExited = () => {
        this.setState({
            collapseOut: ""
        });
    };
    research() {
        this.setState({
            cari: true
        });
        console.log("cari:" + this.state.cari);
    }
    render() {
        //
        {
            this.state.data == true && (
                <Redirect
                    to={{
                        pathname: "/result",
                        state: {
                            data: this.state.query
                        }
                    }}
                />
            );
        }
        return (
            <Navbar
                className={"fixed-top " + this.state.color}
                color-on-scroll="100"
                expand="lg"
            >
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand
                            data-placement="bottom"
                            to="/"
                            tag={Link}
                            rel="noopener noreferrer"
                            title="Seken."
                        >
                            <span>Seken. </span>
                            #bekasberkualitas
                        </NavbarBrand>
                        <button
                            aria-expanded={this.state.collapseOpen}
                            className="navbar-toggler"
                            onClick={this.toggleCollapse}
                        >
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                    </div>
                    <Collapse
                        className={
                            "justify-content-end " + this.state.collapseOut
                        }
                        navbar
                        isOpen={this.state.collapseOpen}
                        onExiting={this.onCollapseExiting}
                        onExited={this.onCollapseExited}
                    >
                        <Nav navbar>
                            <div className="navbar-collapse-header ">
                                <Row>
                                    <Col className="collapse-brand" xs="6">
                                        <a
                                            href="/home"
                                            onClick={e => e.preventDefault()}
                                        >
                                            SEKEN•
                                        </a>
                                    </Col>
                                    <Col
                                        className="collapse-close text-right"
                                        xs="6"
                                    >
                                        <button
                                            aria-expanded={
                                                this.state.collapseOpen
                                            }
                                            className="navbar-toggler"
                                            onClick={this.toggleCollapse}
                                        >
                                            <i className="tim-icons icon-simple-remove" />
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                            <form
                                class="form-inline active-cyan-4"
                                onSubmit={this.submit.bind(this)}
                            >
                                <input
                                    class="form-control form-control-sm mr-3 w-75"
                                    type="text"
                                    placeholder="Search"
                                    aria-label="Search"
                                    type="text"
                                    id="search-input"
                                    onChange={this.handleOnInputChange}
                                />
                                {/* <Link to={`/result/${this.state.query}`}> */}
                                <Link to={`/searching/${this.state.query}`}>
                                    <button type="submit">
                                        <i className="fas fa-search" aria-hidden="true"></i>
                                    </button>
                                </Link>
                            </form>

                            {this.state.isLoggedIn && (
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink to="/" tag={Link}>
                                            Beranda
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink to="/contact-us" tag={Link}>
                                            Kontak
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/about-us" tag={Link}>
                                            Tentang
                                        </NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle
                                            caret
                                            color="default"
                                            data-toggle="dropdown"
                                            href="#pablo"
                                            nav
                                            className="text-uppercase"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <i className="fa fa-cogs d-lg-none d-xl-none" />
                                            {this.state.user.nama}
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-with-icons">
                                            <DropdownItem
                                                to={`/toko/${this.state.id}`}
                                                tag={Link}
                                            >
                                                <i className="tim-icons icon-paper" />
                                                Profil
                                            </DropdownItem>
                                            <DropdownItem
                                                href="/"
                                                onClick={this.logout}
                                                tag={Link}
                                            >
                                                <i className="tim-icons icon-bullet-list-67" />
                                                Keluar
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            )}
                            {!this.state.isLoggedIn && (
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink to="/" tag={Link}>
                                            Beranda
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/login" tag={Link}>
                                            Masuk
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/register" tag={Link}>
                                            Daftar
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/contact-us" tag={Link}>
                                            Kontak
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/about-us" tag={Link}>
                                            Tentang
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            )}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default PagesNavbar;
