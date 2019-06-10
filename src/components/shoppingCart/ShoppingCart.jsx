import React from 'react';
import './shoppingCart.scss';

const ShoppingCart = ({items, onRemoveItem}) => {
  return ( 
    <div className="shopping-cart-container">
      <table className="shopping-cart__table">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Price Total</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map(item => 
            <tr key={item.id}>
              <td>
                <figure className="fig-little">
                  <img src={item.url} alt={item.name} />
                </figure>
              </td>
              <td>{item.name}</td>
              <td><i className="fa fa-usd" /> {item.price}</td>
              <td>1</td>
              <td><i className="fa fa-usd" /> {item.price}</td>
              <td>
                <button className="btn--remove" onClick={() => onRemoveItem(item.id)}>
                  <i className="fa fa-times"/>
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
 
export default ShoppingCart;
