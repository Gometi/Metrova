const initialState = {
    items: [],
    show: false
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.payload] }
        case "SHOW_CART": 
        return {...state, show: action.payload}
        default:
            return state;
    }
};

export default cartReducer;