import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '@/redux/slices/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;