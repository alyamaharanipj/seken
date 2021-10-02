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
import ReactDOM from "react-dom";
// react plugin used to create charts
// reactstrap components
import {
    Container,
    Card,
    DropdownToggle,
    UncontrolledDropdown,
    DropdownItem,
    DropdownMenu,
    Label,
    FormGroup,
    Input,
    Row,
    Col,
    Button
} from "reactstrap";
import Pagination from "../../../components/Pagination.js"
class Sell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconTabs: 1,
            textTabs: 4
        };
    }
    toggleTabs = (e, stateName, index) => {
        e.preventDefault();
        this.setState({
            [stateName]: index
        });
    };
    render() {
        return (
            <Container>
                <Pagination />
            </Container>
        );
    }
}

export default Sell;
