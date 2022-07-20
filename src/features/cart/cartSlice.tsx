import { createSlice } from "@reduxjs/toolkit";

interface IProps {
        cartItems: any[],
        amount: number,
        total: number,
        isLoading: boolean
} 

const initialState: IProps = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}  
})

export default cartSlice.reducer;

