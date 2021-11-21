import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Home from './pages/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Cart from './components/Cart'
import Deals from './components/Deals'


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/deals" component={Deals}/>
                <Route exact path="/header" component={Header}/>
                <Route exact path="/body" component={Body}/>
                <Route exact path="/footer" component={Footer}/>



            </Switch>
        </Router>
    )
}

export default Routes
