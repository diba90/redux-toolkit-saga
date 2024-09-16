import { takeEvery, put } from "redux-saga/effects";
import { SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/products");
  data = yield data.json();
  console.warn("action is called", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSaga() {
  yield takeEvery(SET_PRODUCT_LIST, getProducts);
}

export default productSaga;
