import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../containers/header';
import Home from '../containers/home';
import ShoppingCart from '../containers/shoppingCart';

const Root = () => {
  return ( 
    <div>
      <Header />
      <Switch>
        <Route path="/shopping-cart" component={ShoppingCart}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}
 
export default Root;