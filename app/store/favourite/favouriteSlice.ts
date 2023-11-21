'use client'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
const favourites = JSON.parse(localStorage.getItem('favourites') ?? '[]')

const initialState = {
  isLoading: true,
  favourites: favourites as number[]
}

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    onSetFavourites (state, { payload }: PayloadAction<number[]>) {
      state.favourites = payload
    },
    onFinishLoading (state) {
      state.isLoading = false
    },
    onToggleFavourite: (state, { payload }: PayloadAction<number>) => {
      const id = payload
      const favourites = state.favourites
      if (favourites.includes(id)) {
        state.favourites = favourites.filter(el => el !== id)
        return
      }
      state.favourites.push(id)
    },
    onRemoveFavourite: (state, { payload }: PayloadAction<number>) => {
      state.favourites = state.favourites.filter(id => id !== payload)
    }
  }
})

export const { onSetFavourites, onFinishLoading, onToggleFavourite, onRemoveFavourite } = favouriteSlice.actions

export default favouriteSlice.reducer