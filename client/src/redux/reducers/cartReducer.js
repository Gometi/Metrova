const initialState = {
    items: [
        {
            name: 'Acropolis',
            image: require('../../images/acropolis-1st.jpg'),
            price: 90.00,
            case_size: '40mm',
            case_thickness: '7mm',
            strap_width: '20mm',
            glass: 'HARDENED MINERAL CRYSTAL',
            water_resistance: '3 ATM',
            quantity: 1
        }
    ],
    show: false
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            {
                let itemExists = false;
                state.items.map((item) => {
                    if (item.name === action.payload.name) {
                        itemExists = true;
                    }
                    return state;
                })
                if (itemExists) {
                    return {
                        ...state,
                        items: state.items.map((item) => {
                            if (item.name === action.payload.name) {
                                return { ...item, quantity: item.quantity + 1 }
                            }
                            return item
                        })
                    }
                }
                else {
                    return { ...state, items: [...state.items, action.payload] }
                }

            }
        case "UPDATE_QUANTITY":
            return {
                ...state,
                items: state.items.map((item, index) => {
                    if (index === action.payload.index && action.payload.operator === "+") {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    else if (index === action.payload.index && action.payload.operator === "-" && item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    return item
                })
            }
        case "SHOW_CART":
            return { ...state, show: action.payload }
        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter((item, index)=>{
                    if(index === action.payload){
                        return false;
                    }
                    return true;
                })
            }
        default:
            return state;
    }
};

export default cartReducer;