import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../CartItems"

interface IProps {
        cartItems: any[],
        amount: number,
        total: number,
        isLoading: boolean
} 

const initialState: IProps = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}  
})

export default cartSlice.reducer;

