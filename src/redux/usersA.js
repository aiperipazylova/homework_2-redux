const initialState = {
  users: []
}

export default function usersA (state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    default:
      return state
  }
}

