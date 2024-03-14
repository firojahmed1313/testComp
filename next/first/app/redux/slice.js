const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users:[ ],
}

const Slice= createSlice({ 
    name:"userSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action)
            const data={
                id: nanoid(),
                name:action.payload
            }
            state.users.push(data);
            console.log(initialState);
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id!== action.payload)
        },
    }
})
export const {addUser} =Slice.actions;
export default Slice.reducer;