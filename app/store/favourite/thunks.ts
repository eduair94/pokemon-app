import { type AppDispatch, type RootState } from '..'
import { onRemoveFavourite, onToggleFavourite } from './favouriteSlice'

export const toggleFavourite = (id: number) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(onToggleFavourite(id))
    const { favourites } = getState().favourite
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }
}

export const existsInFavourites = (id: number) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const { favourites } = getState().favourite
    return favourites.includes(id)
  }
}

export const removeFavourites = (id: number) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(onRemoveFavourite(id))
    const { favourites } = getState().favourite
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }
}
