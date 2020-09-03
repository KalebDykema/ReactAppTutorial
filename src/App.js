import React from 'react';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';

function App() {
  const address = window.location.href;
  const addressSplit = address.split(".");
  let path = addressSplit[addressSplit.length - 1];
  path = path.substring(path.indexOf("/"));
  console.log(path);

  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header/>

        <div className="p-3">
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/products/:id">
              <Product/>
            </Route>
            <Route exact path={["/", "/home"], "/*"}>
              <Home/>
              { window.history.pushState("home", "home", "/") }
            </Route>
          </Switch>
        </div>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;