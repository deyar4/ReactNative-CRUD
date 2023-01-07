import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  total: 0,
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.iid === action.payload.iid);

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
            `Can't remove product (id: ${action.payload.iid}) as it is not available in basket.`
        )
      }

      state.items = newBasket;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = state => state.basket.items;

export const selectBasketItemsWithId = (state, iid) =>
    state.basket.items.filter((item) => item.iid === iid);

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) =>
total += item.price, 0);

export default basketSlice.reducer