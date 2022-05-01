import React from "react";
import styles from './Card.module.scss';

function Card({onClickFavorite, onClickPlus, title, url, price}) {
    const [isAdded, setIsAdded] = React.useState(false);

    const handleClickCart = () => {
      onClickPlus({title, url, price});
      setIsAdded(!isAdded);
    }

    return (
    <div className={styles.card}>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img src="/img/bookmark-inactive.svg" alt="bookmark" />
          </div>
          <img width={133} height={112} src={url} alt="sneakers"/>
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
              <img className={styles.plus} onClick={handleClickCart} src={isAdded ? 'img/checkedProd.svg' : 'img/addProd.svg'} alt="add product to cart"/>
          </div>
        </div>
        )
}

export default Card;