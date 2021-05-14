import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Informacion from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/checkout" component={Checkout}/>
                    <Route exact path="/checkout/informacion" component={Informacion}/>
                    <Route exact path="/chackout/payment" component={Payment}/>
                    <Route exact path="/checkout/success" component={Success}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;