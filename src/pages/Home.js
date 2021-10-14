import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import AppNavbar from './AppNavbar';
import Memo from './Memo/Memo';
import Game from './Game/Game';

const Home = () => {
    return (
        <HashRouter>
            <AppNavbar/>
            <Switch>
                <Route exact path="/" component={About} />
                <Route path="/memo" component={Memo} />
                <Route path="/game" component={Game} />
            </Switch>
        </HashRouter>
    )
}

const About = () => (
    <div>
        <h1>This is about page.</h1>
    </div>
)


export default Home;