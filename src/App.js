import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import CardDetail from './components/CardDetail';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <ul>
                        <li>
                            <Link to="/">خانه</Link>
                        </li>
                        <li>
                            <Link to="/about-us">درباره ما</Link>
                        </li>
                    </ul>
                </header>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about-us">
                        <AboutUs/>
                    </Route>
                    <Route path="/card-detail:cardId">
                        <CardDetail/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
