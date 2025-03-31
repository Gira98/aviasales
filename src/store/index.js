import { configureStore } from "@reduxjs/toolkit";
import checkboxReducer from "../components/slice/checkboxSlice";
import filterReducer from "../components/slice/filterSlice";
import ticketsReducer from '../components/slice/serverSlice'


const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
    filter: filterReducer,
    tickets: ticketsReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
