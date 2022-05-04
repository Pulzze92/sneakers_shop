import React, { useState } from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Switch from 'react-router-dom';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    fetch('https://626ed032f75bcfbb35718e66.mockapi.io/items')
    .then(res => res.json())
    .then(json => setItems(json));

    axios.get('https://626ed032f75bcfbb35718e66.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://626ed032f75bcfbb35718e66.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://626ed032f75bcfbb35718e66.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onAddFavorite = (obj) => {
    axios.post('https://626ed032f75bcfbb35718e66.mockapi.io/favorites', obj);
    setFavorites(prev => [...prev, obj]);
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    
    <div className="wrapper clear">
      {cartOpened && (<Drawer items={cartItems} 
      onClose={() => setCartOpened(false)} 
      onRemove={onRemoveItem}/>)}
      <Header onClickCart={() => setCartOpened(true)}/>

      <Routes> 
       <Route element={<Home
          items={items} 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddFavorite={onAddFavorite}
          onAddToCart={onAddToCart}
       />}path="/" exact>
  
      </Route>
      <Route element={<Favorites />} path="/favorites" exact>
        
      </Route>
      </Routes>
    </div>
    
  );
}

export default App;
