import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import Memo from './Memo/Memo';
import Game from './Game/Game';

const Home = () => {
    return (
        <Router>
            <div>
                <AppNavbar/>
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route path="/memo" component={Memo} />
                    <Route path="/game" component={Game} />
                </Switch>
            </div>
        </Router>
    )
}

const About = () => (
    <div>
        <h1>This is about page.</h1>
    </div>
)


export default Home;