import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  currentTheme: 'dark' | 'light'; // определение типа текущей темы
}

const initialState: ThemeState = {
  currentTheme: 'light', // начальное состояние - светлая тема
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light'; // переключение темы
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;