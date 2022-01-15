import React, { useEffect } from "react"
import Layout from "./js/shared/layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { init } from '@emailjs/browser';
import Home from "./js/pages/home"
import Contact from "./js/pages/contact";
import Gallery from "./js/pages/gallery";
import ServicesPage from "./js/pages/services";
import About from "./js/pages/about";

function App() {
  const location = useLocation();

  // Init EmailJS
  useEffect(() => {
    init("user_xkyvL3Rusz36TS0ctjfU9");
    // Check distance scroll to apply nav bg if landing on page and already scrolled 
    var nav = document.querySelector(".nav");

    if (nav) {
      var distanceFromTop = document.documentElement.scrollTop;
      if (distanceFromTop >= 100) nav.classList.add("scrolled")
      if (distanceFromTop < 100) nav.classList.remove("scrolled")
    }

    // Scroll to the top on page load
    document.body.scrollTop = document.documentElement.scrollTop = 0;
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
