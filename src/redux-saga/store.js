import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import reducer from "./Redux";
import saga from "./Saga";

const sagaMiddleware = createSagaMiddleware();

export const store  = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({thunk: false }),
        sagaMiddleware,
    ],
});

sagaMiddleware.run(saga);

export default store;