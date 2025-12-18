<<<<<<< HEAD
// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//     reducer: {
//     },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;




// src/Store/index.ts
// import { configureStore } from "@reduxjs/toolkit";

// Add your reducers here as needed:
// import someSlice from "./someSlice";
// export const store = configureStore({
//   reducer: {
//     // some: someSlice,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;



import { configureStore } from "@reduxjs/toolkit";

// Add reducers as needed:
// import someSlice from "./someSlice";

export const store = configureStore({
  reducer: {
    // some: someSlice,
  },
=======
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
    },
>>>>>>> 624764d01e1d200866f525e46c2c4b525f3f1623
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
<<<<<<< HEAD

export default store;
=======
>>>>>>> 624764d01e1d200866f525e46c2c4b525f3f1623
