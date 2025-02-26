import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import productReducer from "./slice/productSlice";
import orderReducer from "./slice/orderSlice";
import cartReducer from "./slice/cartSlice";
import summaryReducer from "./slice/summarySlice";
import commentReducer from "./slice/commentSlice";
import deliveryReducer from "./slice/deliverySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    order: orderReducer,
    cart: cartReducer,
    summary: summaryReducer,
    comment: commentReducer,
    delivery: deliveryReducer,
  },
});

export default store;
