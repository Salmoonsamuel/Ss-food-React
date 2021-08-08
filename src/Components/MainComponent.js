import React from 'react';
import Home from './Home';
import Header from "./Header";
import Info from "./InfoComponent";
import Footer from "./Footer";
import Slidebar from "./Slidebar";
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from "./ContactComponent";



function Main() {
   
    const HomePage = () => {
        return (
            <Home />
        );
    };
        return(
            <React.Fragment>
                <Header />
                <Slidebar />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/info' component={Info} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
           </React.Fragment>
        );
}

export default Main;