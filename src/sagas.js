import { call, put, takeEvery, all  } from 'redux-saga/effects';
import { getProduct } from './apis';

/**
 * fetch product from a server
 */
function* fetchProduct() {
  try {
    const data = yield call(getProduct);
    yield put({type: 'STORE_PRODUCT', data});
  } catch(e) {
    console.log(e);
  }
}

// function* watchFetchProduct() {
//   yield takeEvery('FETCH_PRODUCT', fetchProduct);
// }

const delay = ms => new Promise(res => setTimeout(res, ms));

/**
 * for simluating adding an items to the server, set delay to 1 second
 */
function* addItems(item) {
  yield delay(1000);
  yield put({type: 'ADD_ITEM', item});
}

function* watchAddItems() {
  yield takeEvery('ADD_ITEM_ASYNC', addItems)
}

/**
 * for simluating removing an items to the server, set delay to 1 second
 */
function* removeItems(action) {
  yield delay(1000);
  yield put({type: 'REMOVE_ITEM', id: action.id});
}

function* watchRemoveItems() {
  yield takeEvery('REMOVE_ITEM_ASYNC', removeItems)
}

export default function* rootSaga() {
  yield all([
    fetchProduct(),
    watchAddItems(),
    watchRemoveItems()
  ]);
}