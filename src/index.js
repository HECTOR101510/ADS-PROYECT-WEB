import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
    Route,
    Switch,
} from "react-router-dom";
import Login from "./components/login";
import "./styles/styles.css";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/Practica7">
                    <Login />
                </Route>
            </Switch>
        </div>
    );
}
export default App;