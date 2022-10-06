import {configureStore} from "@reduxjs/toolkit";
import eventsReducer from "../features/Events"

export const store = configureStore({
    reducer: {
        events: eventsReducer,
    }
})