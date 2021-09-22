import { createContext } from "react";

export const cartContext = createContext([]);

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  function addToCart(item) {
    setCartList(item);
  }
  function borrarLista() {
    cartList([]);
  }
  return (
    <cartContext.Provider value={(cartList, addToCart, borrarLista)}>
      {children}
    </cartContext.Provider>
  );
}
