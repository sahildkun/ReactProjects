import { createContext } from "react";
import { useReducer } from "react";

export const CartContext = createContext({
    items:[],
    total:0,
    addItems : (item) => {},
    deleteItems: (id)  => {}
})

  const defaultCartState = {
    items: [],
    totalAmount: 0
  };
  
  const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    }
    return defaultCartState;
  };
  

export const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCarthandler =(item) => {
        dispatchCartAction({type: 'ADD', item: item});
    }
    const deleteItemfromCarthandler =(id) => {}

    const cartContext = {
        items: cartState.items,
        total: cartState.totalAmount,
        addItems: addItemToCarthandler,
        deleteItems: deleteItemfromCarthandler,
    }

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}