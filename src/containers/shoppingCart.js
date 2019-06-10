import {connect} from 'react-redux';
import ShoppingCart from '../components/shoppingCart/ShoppingCart';

const mapStateToProps = state => (
  {
    items: state.item.items
  }
);

const mapDispatchToProps = dispatch => (
  {
    onRemoveItem: (id) => dispatch({type: 'REMOVE_ITEM_ASYNC', id})
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);