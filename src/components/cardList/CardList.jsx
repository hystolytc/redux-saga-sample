import React from "react";
import Card from "../card/Card";
import './cardList.scss';

const updateProductSturcture = (product, items) => {
  return {
    ...product,
    ...items
  }
}

const CardList = ({products, onAddItem}) => {
  return !products.length ? <h1 className="cardlist-container">LOADING...</h1> : (
    <div className="cardlist-container">
      {products.map(product => (
        <Card
          key={product.id}
          img={product.download_url}
          name={`Product ${product.id}`}
          price={product.id}
          onAddItem={() => 
            onAddItem(updateProductSturcture(
              product, {
                name:`Product ${product.id}`,
                price: product.id
              }
            )
          )} />
      ))}
    </div>
  );
};

export default CardList;
