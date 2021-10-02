import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./views/Pages/AboutUs";
import Notfound from "./views/NotFound/NotFound";
import Contact from "./views/Pages/ContactUs";
import LandingPage from "./views/Pages/Home/LandingPage";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import PrivateRoute from "./PrivateRoute";
import SellForm from "./components/SellForm";
import EditBarang from "./components/EditBarang";
import Sold from "./components/Sold";
import ButtonSold from "./components/ButtonSold";
import Admin from "./components/Admin";
import AdminEditBarang from "./components/AdminEditBarang";
import AdminEditAkun from "./components/AdminEditAkun";
import ResultSearch from "./components/ResultSearch";
import Product from "./components/Product";
import Toko from "./components/Toko";
import EditProfile from "./views/Pages/Product/EditProfile";
import Search from "./components/Search";
const Main = props => (
    <Switch>
        <Route path="/searching/:query" component={Search} />
        <Route path="/result" component={ResultSearch} />

        <Route exact path="/editprofile" component={EditProfile} />
        <Route path="/toko/:id_penjual" component={Toko} />
        <Route path="/product/:id" component={Product} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admineditbarang" component={AdminEditBarang} />
        <Route exact path="/admineditakun" component={AdminEditAkun} />
        <Route exact path="/admin" component={Admin} />
        <Route component={Notfound} />
        <Route exact path="/sellForm" component={SellForm} />
        <Route exact path="/editBarang" component={EditBarang} />
        <Route exact path="editsold" component={Sold} />
        <Route exact path="buttonsold" component={ButtonSold} />
    </Switch>
);
export default Main;
