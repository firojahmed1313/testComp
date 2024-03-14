const { configureStore } = require("@reduxjs/toolkit");
import reducers from "./slice"

export const store = configureStore({
    reducer: reducers,
    

})