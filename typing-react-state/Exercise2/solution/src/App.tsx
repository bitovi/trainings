/*

Exercise:

1) Fix only the `CartAction` type to resolve all the TypeScript errors.

*/

import React, { useReducer } from "react";

interface Product {
  id: number;
  name: string;
};

interface CartItem {
  productId: number;
  quantity: number;
};

type CartAction =
  | { type: "ADD_TO_CART"; payload: { id: number } }
  | { type: "REMOVE_FROM_CART"; payload: { id: number } }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "RESET_CART" };

const products: Product[] = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
  { id: 3, name: "Product C" }
];

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { productId: action.payload.id, quantity: 1 }];
    case "REMOVE_FROM_CART":
      return state.filter(item => item.productId !== action.payload.id);
    case "RESET_CART":
      return [];
    case "UPDATE_QUANTITY":
      return state.map(item => {
        if (item.productId === action.payload.id) {
          return { ...item, quantity: action.payload.quantity }
        }
        return item;
      });
    default:
      return state;
  }
};

const App = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const handleQuantityChange = (productId: number, change: number) => {
    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem) {
      const newQuantity = cartItem.quantity + change;
      if (newQuantity === 0) {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
      } else {
        dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity: newQuantity } });
      }
    } else if (change === 1) {
      dispatch({ type: "ADD_TO_CART", payload: { id: productId } });
    }
  };

  return (
    <>
      <h1>Shopping cart</h1>
      <form>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <p>
                <strong>{product.name}</strong>
                <button onClick={() => handleQuantityChange(product.id, -1)} type="button">-</button>
                {cart.find(item => item.productId === product.id)?.quantity || 0}
                <button onClick={() => handleQuantityChange(product.id, 1)} type="button">+</button>
              </p>
            </li>
          ))}
        </ul>
        <p><button onClick={() => dispatch({ type: "RESET_CART" })} type="button">Reset cart</button></p>
      </form>
    </>
  );
};

export default App;
