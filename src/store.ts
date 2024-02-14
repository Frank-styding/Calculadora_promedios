import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./features/global/GlobalSlice";
// ...

export const store = configureStore({
  reducer: {
    Global: GlobalSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
