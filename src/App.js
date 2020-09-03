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

  // let page;
  // const baseAddress = address.substring(0, address.indexOf(path));
  // console.log(baseAddress);

  // if(path === "/about"){
  //   page = <About/>;
  //   window.history.pushState("about", "about", "/about");
  // }
  // else if(path === "/products/:id") {
  //   page = <Product/>;
  //   window.history.pushState("product", "product", "/products/:id");
  // }
  // else {
  //   page = <Home/>;
  //   window.history.pushState("home", "home", "/");
  // }

  // let test = <Link to="{page}"></Link>;

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
            <Route exact path={["/", "/home"]}>
              <Home/>
              { window.history.pushState("home", "home", "/") }
            </Route>
            <Route>
              <Home/>
            </Route>
          </Switch>
        </div>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;