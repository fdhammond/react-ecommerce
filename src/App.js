import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
        greeting="Hello from ItemListContainer"
        stock={5}
        initial={1}
      />
    </div>
  );
}

export default App;
