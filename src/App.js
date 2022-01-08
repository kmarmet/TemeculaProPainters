import React, { useEffect } from "react"
import Layout from "./js/shared/layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Home from "./js/pages/home"
import Contact from "./js/pages/contact";
import Gallery from "./js/pages/gallery";
import ServicesPage from "./js/pages/services";
import About from "./js/pages/about";

function App() {
  const location = useLocation();
  useEffect(() => {
    // Check distance scroll to apply nav bg if landing on page and already scrolled 
    var nav = document.querySelector(".nav");
    var distanceFromTop = document.documentElement.scrollTop;
    if (distanceFromTop >= 100) nav.classList.add("scrolled")
    if (distanceFromTop < 100) nav.classList.remove("scrolled")
  }, [location])
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
