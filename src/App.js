import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import './App.css';


function App(){
    return (
        <Router>
            <div>
                <Nav />

                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/project/:id">
                        <ProjectPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}





export default App;