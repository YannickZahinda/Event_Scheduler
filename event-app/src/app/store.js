import {configureStore} from "@reduxjs/toolkit";
import eventsSlice from "../features/Events"

export const store = configureStore({
    reducer: {
        events: eventsSlice,
    }
})