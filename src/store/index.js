import { legacy_createStore } from "redux";
import appReducer from "./appReducer";

const store = legacy_createStore(appReducer)

export default store

