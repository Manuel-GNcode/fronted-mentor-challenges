export const CartReducer = (state, action)=>{
  switch (action.type) {
    case '[CART] ADD':
      return [...state, action.payload];
    case '[CART] REMOVE':
      return state.filter(item=>item.id != action.payload);
    case '[CART] INCREASE':
      return state.map(item=>{
        const cant = item.quantity + 1;
        if (item.id == action.payload) return {...item, quantity: cant};
        return item;
      })
    case '[CART] DECREASE':
      return state.map(item=>{
        const cant = item.quantity - 1;
        if (item.id == action.payload && cant > 0) return {...item, quantity: cant};
        return item;
      })
    default:
      return state;
  }
}