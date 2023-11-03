import { createSlice } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'car',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      return [...state, newItem];
    },
    removeItem: (state, action) => {
      const itemNameToRemove = action.payload;
      return state.filter(item => item.name !== itemNameToRemove);
    },
    updateItem: (state, action) => {
      const updatedItem = action.payload;
      return state.map(item => (item.name === updatedItem.name ? updatedItem : item));
    },
  },
});

export const { addItem, removeItem, updateItem } = carSlice.actions;
export default carSlice.reducer;