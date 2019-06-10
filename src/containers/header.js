import {connect} from 'react-redux';
import Header from '../components/header/Header';

const mapStateToProps = state => {
  return{
    itemTotal: state.item.itemTotal
  }
};

export default connect(mapStateToProps)(Header);
