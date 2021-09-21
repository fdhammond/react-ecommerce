import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Nav/NavBar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route exact path="/detail/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart" component={Cart} />
          <Footer />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
