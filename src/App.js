import React from "react"
import Layout from "./js/pages/shared/layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./js/pages/home"
function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
