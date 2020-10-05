import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import UserProfilePage from "./pages/UserProfilePage";
import PledgePage from "./pages/PledgePage";
import UpdateProjectPage from './pages/UpdateProjectPage';
import './App.css';
import NewProjectPage from './pages/NewProject';


function App(){
    return (
        <Router>
            <div>
                <Nav />

                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/project/:id">
                        <ProjectPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/new-project">
                        <NewProjectPage />
                    </Route>
                    <Route path="/user-profile">
                        <UserProfilePage />
                    </Route>
                    <Route exact path="/project/:id/make-pledge">
                        <PledgePage/>
                    </Route>
                    <Route exact path="/project/:id/update">
                        <UpdateProjectPage/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}





export default App;