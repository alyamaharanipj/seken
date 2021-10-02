import {
    Badge
} from "reactstrap";
import React, { Component } from "react";

import { Link, Redirect, withRouter, NavLink } from "react-router-dom";
import Axios from "axios";
export default class Sold extends Component {
    constructor(props) {
        super();
        this.state = {
            Sold: ""
        };
    }

    componentDidMount() {
        if (this.state.isRegistered) {
            return this.props.history.push("/");
        }
    }

    render() {
        return (
            <div style={{position : "absolute"}}>
                <Badge color="danger">SOLD OUT</Badge>
            </div>
        );
    }
}

if (document.getElementById("editsold")) {
    ReactDOM.render(<Sold />, document.getElementById("editsold"));
}
