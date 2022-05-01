import React, { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://626ed032f75bcfbb35718e66.mockapi.io/items')
    .then(res => res.json())
    .then(json => setItems(json));
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          
          {
            items.map((el) => (
               <Card title={el.name} 
               price={el.price} 
               url={el.url}
               onClickFavorite={() => console.log('added to favorites')} 
               onClickPlus={onAddToCart}/>
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default App;
