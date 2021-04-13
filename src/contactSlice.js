import { createSlice } from "@reduxjs/toolkit";

//reducer
export const contactSlice = createSlice({
    name: 'contact',
    initialState:{
        data: null,
        isLoading: null,
    },
    reducers:{
        getContact: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },

        loadingState: state => {
            state.isLoading = true;
        }
    }
});

//action
export const { getContact, loadingState } = contactSlice.actions;
export const getContactAsync = dispatch =>{
    dispatch(loadingState());

    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(result => {
        dispatch(getContact(result));
    })


    // setTimeout(() => {
    //     dispatch(getContact("aaa"));
    // }, 5000);
}

export const contactVal = state => state.contact;
export default contactSlice.reducer;

