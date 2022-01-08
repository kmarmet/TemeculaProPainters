import React from "react"
import Layout from "./js/shared/layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./js/pages/home"
import Contact from "./js/pages/contact";
import Gallery from "./js/pages/gallery";
import ServicesPage from "./js/pages/services";
import About from "./js/pages/about";

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
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/services">
          <ServicesPage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
