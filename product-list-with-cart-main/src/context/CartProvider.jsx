import { useReducer } from "react"
import { CartContext } from "./CartContext";
import { CartReducer } from "../reducer/CartReducer";


export const CartProvider = ({children}) => {
  const [cartState, dispatch] = useReducer(CartReducer, []);

  const addItemCart = (item)=>{
    const action = {
      type: '[CART] ADD',
      payload: item
    }
    dispatch(action);
  }
  const removeItemCart = (item)=>{
    const action = {
      type: '[CART] REMOVE',
      payload: item.id
    }
    dispatch(action);
  }
  const increaseItemCart = (id)=>{
    const action = {
      type: '[CART] INCREASE',
      payload: id
    }
    dispatch(action)
  }
  const decreaseItemCart = (id)=>{
    const action = {
      type: '[CART] DECREASE',
      payload: id
    }
    dispatch(action)
  }

  return (
    <CartContext value={{cartState, addItemCart, removeItemCart, increaseItemCart, decreaseItemCart}}>
      {children}
    </CartContext>
  )
}