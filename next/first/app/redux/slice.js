const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users:[ ],
}

const slice= createSlice({ 
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data{
                id: nanoid,
            }
            state.users.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id!== action.payload)
        },
    }
})