import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListEmployeeComponent from "./component/ListEmployeeComponent";
import CreateEmployeeComponent from "./component/CreateEmployeeComponent";
import ViewEmployeeComponent from "./component/ViewEmployeeComponent";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";

function App()
 {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route
              path="/add-employee/:id"
              component={CreateEmployeeComponent}
            ></Route>
            <Route
              path="/view-employee/:id"
              component={ViewEmployeeComponent}
            ></Route>
          </Switch>
        </div>
        <div style={{textAlign:"center"}}>
           <FooterComponent />
           </div>
      </Router>
    </div>
  );
}
export default App;
