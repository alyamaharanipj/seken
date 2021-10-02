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
// reactstrap components
import ReactDOM from 'react-dom';

// core components
import Buy from "./Buy.js";
import Sell from "./Sell_Alternative.js";

class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  
  render() {
    return (
      <>
        <Buy />
        <div id="products">
        <h3 class="text-center mb-3 mt-3">New Arrivals for you </h3>
        
          <Sell />
        </div>
      </>
    );
  }
}

export default LandingPage;
