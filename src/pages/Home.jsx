
import Card from "../components/Card";

function Home ({items, searchValue, setSearchValue, onChangeSearchInput, onAddFavorite, onAddToCart}) {
    return (
<div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/cart-btnRemove.svg" alt="clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          
          {
            items.filter(el => el.name.toLowerCase().includes(searchValue.toLocaleLowerCase())).map((el, index) => (
               <Card title={el.name}
               key={index}
               price={el.price} 
               url={el.url}
               onClickFavorite={(obj) => onAddFavorite(obj)} 
               onClickPlus={(obj) => onAddToCart(obj)}/>
            ))
          }
        </div>

      </div>
    );
}

export default Home;
