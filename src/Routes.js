import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import First from './First'
import Third from './Third'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Routes = () => {
    return (
        <Router>
            <Switch>
                {/* <Route exact path="/" component={First}/>
                <Route exact path="/test" component={Third}/> */}
                <Route exact path="/" component={Header}/>
                <Route exact path="/body" component={Body}/>
                <Route exact path="/footer" component={Footer}/>



            </Switch>
        </Router>
    )
}

export default Routes
