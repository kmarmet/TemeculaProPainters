import React from "react"
import Layout from "./js/shared/layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./js/pages/home"
import Contact from "./js/pages/contact";

// Styles 
import "../src/styles/bundle.scss"

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
