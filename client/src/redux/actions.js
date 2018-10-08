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