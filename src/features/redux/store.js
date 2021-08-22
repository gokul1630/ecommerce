import { configureStore } from '@reduxjs/toolkit'
import reducers from './Slicers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
})
sagaMiddleware.run(rootSaga)
