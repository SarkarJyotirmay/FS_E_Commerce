import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./slices/userSlice.js"

const store = configureStore(
    {
        reducer: {
            user: userDetails
        }
    }
)

export default store