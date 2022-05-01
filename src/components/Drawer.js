function Drawer ({onClose, items = []}) {
    return (
        <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">Корзина
            <img onClick={onClose} className="cu-p" src="/img/cart-btnRemove.svg" alt="close" />
          </h2>

          <div className="items">
          {
            items.map((el) => (
              <div className="cartItem d-flex align-center mb-20">
              <div className="cartItemImg" style={{ backgroundImage: `url(${el.imageUrl})`}}>
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">{el.title}</p>
                <b>{el.price}</b>
              </div>
              <img className="removeBtn" src="/img/cart-btnRemove.svg" alt="remove" />
            </div>
            ))
          }
          </div>

          <div className="cartTotalBlock">
            <ul className="cartTotalBlock">
              <li className="d-flex">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className="d-flex">
                <span>НДС 20%:</span>
                <div></div>
                <b>4 299 руб.</b>
              </li>
            </ul>
            <button className="greenBtn">Оформить заказ <img src="/img/cart-btn-arr.svg" alt="arrow" /></button></div>
        </div>
        </div>
        

    )
}

export default Drawer;