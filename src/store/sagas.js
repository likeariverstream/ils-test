import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { swapElements } from '../utils/swap-elements';
import { setPolyline, setSelectedRoute } from './slices';
import { fetchPolyline } from '../api/fetch-polyline';
import { baseUrl } from '../api/urls';

function* fetchPolylineSaga() {
  try {
    const selectedRoute = yield select((state) => state.selectedRoute)
    const routes = yield select((state) => state.routes)
    if (selectedRoute !== null) {
      const route= yield routes[selectedRoute]
      const routePoints = yield route.points
      const swapPoints= yield swapElements(routePoints)
      const response = yield call(fetchPolyline, baseUrl, 'driving', swapPoints)
      if (response) {
        const swapPolyline = yield swapElements(response)
        yield put(setPolyline(swapPolyline))
      }
    }
  } catch (error) {
    console.warn(error)
  }
}

function* polylineSaga() {
  yield takeLatest(setSelectedRoute.type, fetchPolylineSaga);
}

export function* rootSaga() {
  yield all([
    polylineSaga(),
  ])
}
