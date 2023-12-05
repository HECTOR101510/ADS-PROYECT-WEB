import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
    Route,
    Switch,
} from "react-router-dom";
import Home from "./components/home";
import Info from "./components/info";
import Login from "./components/login";
import "./styles/styles.css";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/Practica7">
                    <Login />
                </Route>
                <Route exact path="/Practica7/home">
                    <Home/>"
                </Route>
                <Route exact path="/Practica7/info">
                    <Info/>"
                </Route>
                <Route path="*" render={() => <h1>RECURSO NO ENCONTRADO</h1>} />
            </Switch>
        </div>
    );
}
export default App;