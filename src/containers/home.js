import {connect} from 'react-redux';
import CardList from '../components/cardList/CardList';

const mapStateToProps = state => {
  return{
    products: state.product.items
  }
};

const mapDispatchToProps = dispatch => (
  {
    onAddItem: (item) => dispatch({type: 'ADD_ITEM_ASYNC', item})
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
