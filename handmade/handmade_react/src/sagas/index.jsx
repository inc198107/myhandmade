import * as Types from "../Actions/actionTypes";
import { all, call, put, takeEvery } from "@redux-saga/core/effects";

import mockImages from "../assets/tempGallery/tempGallery";

export function* root() {
  yield all([
    mainSaga()
  ])
}

function* mainSaga() {
  yield takeEvery(Types.GALERY_LOAD_INIT, getImages);
}

function* getImages() {
  const  fetchedImg =  yield call(mockImages)
  yield put({type: Types.GET_GALERY_IMAGES, payload: fetchedImg} )
}
