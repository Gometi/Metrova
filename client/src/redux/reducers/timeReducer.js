const initialState = {
    rotateSecondHand: 90,
    rotateMinuteHand: 0,
    rotateHourHand: 0
};

const timeReducer = (state = initialState, action)=>{
    switch(action.type){
        case "UPDATE_SECONDS":
            return { ...state, rotateSecondHand: action.payload}
        case "UPDATE_MINUTES":
            return { ...state, rotateMinuteHand: action.payload }
        case "UPDATE_HOURS":
            return { ...state, rotateHourHand: action.payload }
        default: return state;
    }
}

export default timeReducer;