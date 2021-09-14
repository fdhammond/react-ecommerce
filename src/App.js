import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting="Hello from ItemListContainer"
      />
      <ItemDetailContainer/>
      <Footer/>
    </>
  );
}

export default App;
