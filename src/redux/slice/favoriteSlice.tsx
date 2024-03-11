import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const loadFavoritesFromLocalStorage = () => {
  try {
    const favorites = localStorage.getItem("Like");
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error("Error loading favorites from localStorage:", error);
    return [];
  }
};

const saveFavoritesToLocalStorage = (favorites) => {
  try {
    localStorage.setItem("Like", JSON.stringify(favorites));
  } catch (error) {
    console.error("Error saving favorites to localStorage:", error);
  }
};

const initialState  = {
  favorites: loadFavoritesFromLocalStorage(),
  favoriteCount: loadFavoritesFromLocalStorage().length,
};

const favoriteSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addToFavorites: (state, action ) => {
      const itemToAdd = action.payload;
      if (!state.favorites.some((item) => item.id === itemToAdd.id)) {
        state.favorites.push(itemToAdd);
        saveFavoritesToLocalStorage(state.favorites);
        state.favoriteCount++;
      }
    },
    removeFromFavorites: (state, action ) => {
      const idToRemove = action.payload;
      const updatedFavorites = state.favorites.filter(
        (item) => item.id !== idToRemove
      );
      saveFavoritesToLocalStorage(updatedFavorites);
      state.favorites = updatedFavorites;
      state.favoriteCount--;
    },
    clearFavorites: (state) => {
      state.favorites = [];
      saveFavoritesToLocalStorage([]);
      state.favoriteCount = 0;
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
