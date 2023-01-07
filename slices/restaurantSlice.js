import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant: {
    rid: null,
    img: null,
    name: null,
    rating: null,
    genre: null,
    address: null,
    description: null,
    items: null,
  },
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
        state.restaurant = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant} = restaurantSlice.actions

export const selectRestaurant = state => state.restaurant.restaurant;


export default restaurantSlice.reducer