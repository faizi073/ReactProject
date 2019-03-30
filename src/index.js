import React from "react";
import ReactDOM from "react-dom";
import Link from "react-router-dom";

import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import Contact from "./contact";
import Notfound from "./notfound";
import  Service from "./service";
import Product from "./product";
import  "./App.css";

const routing = (
  <Router>

<div id="header">
	<div id="menu">
		<ul>
			<li class="current_page_item">
      <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
      </li>
      <li>
          <NavLink activeClassName="active" to="/product">
            Product
          </NavLink>
      </li>
      <li>
          <NavLink activeClassName="active" to="/service">
            Service
          </NavLink>
      </li>			
      <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
      </li>
		</ul>
    
    <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/product" component={Product} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
	</div>
</div>

  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
