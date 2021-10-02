import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import NavBar from "./components/Nav/NavBar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";
import CartContextProvider from "./cartContext/cartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:idCategory">
              <ItemListContainer />
            </Route>
            <Route exact path="/detail/:idDetail">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
