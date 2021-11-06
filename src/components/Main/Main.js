import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddToCart from '../AddToCart/AddToCart';
import CheckOut from '../CheckOut/CheckOut';
import AuthProvider from '../context/AuthProvider';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import SignUp from '../SignUp/SignUp';
import Footer from './Footer/Footer';
import Header from './Hader/Header';
import Home from './Home/Home';

const Main = () => {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route path='/home'>
                            <Home></Home>
                        </Route>
                        <Route path='/login'>
                            <Login></Login>
                        </Route>
                        <Route path='/signup'>
                            <SignUp></SignUp>
                        </Route>
                        <Route path='/add-to-cart'>
                            <AddToCart></AddToCart>
                        </Route>
                        <Route path='/checkout/:foodId'>
                            <CheckOut></CheckOut>
                        </Route>
                        <Route path='/place-order'>
                            <PlaceOrder></PlaceOrder>
                        </Route>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route path='*'>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
};

export default Main;