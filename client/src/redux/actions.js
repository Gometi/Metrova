export const addItem = item =>({
   type: "ADD_ITEM",
   payload: item
});
export const showCart = value => ({
    type: "SHOW_CART",
    payload: value
});
export const updateQuantity = value =>({
    type: "UPDATE_QUANTITY",
    payload: value
});
export const removeItem = itemIndex =>({
    type: "REMOVE_ITEM",
    payload: itemIndex
})

export const updateSeconds = sec =>({
    type: "UPDATE_SECONDS",
    payload: sec
})
export const updateMinutes = min => ({
    type: "UPDATE_MINUTES",
    payload: min
})
export const updateHours = hour => ({
    type: "UPDATE_HOURS",
    payload: hour
})