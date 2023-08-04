import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { routesReducer } from './slices'
import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: routesReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const selectApp = (state: RootState) => state
