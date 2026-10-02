import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { rootReducer } from "./reducers";

// Use the named createLogger export: the default import of redux-logger
// is not resolved correctly by Vite, which caused "middleware is not a function".
const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(logger));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
