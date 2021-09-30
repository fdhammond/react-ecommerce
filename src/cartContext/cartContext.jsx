import { useState, createContext, useContext  } from "react";

const cartContext= createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addToCart = data => {
    const oldCart = [...cartList]
    // if we have same item
    if (oldCart.some(i => i.productos.id === data.productos.id)) {
      // if we find the item we add only the number of that item
      oldCart.find(i => i.productos.id === data.productos.id).quantity += data.quantity
      console.log("data.quantity", data.quantity);
      setCartList(oldCart)
    } else {
      setCartList([...cartList, data])
    }
  }

  console.log('oldCart afuera', cartList)

  const iconCart = () => {
    return cartList.reduce((total, value) => total + value.quantity, 0)
  }

  const totalPrice = () => {
    return cartList.reduce((total, value) => (total + (value.quantity * value.productos.price)), 0)
  }

  function deleteList() {
    cartList([]);
  }

  function deleteFromCart(item) {
    const deleteProductFromCart = cartList.filter((prod) => prod.item.id !== item.item.id)
    setCartList([...deleteProductFromCart])
}
  return (
    <cartContext.Provider value={{ cartList, addToCart, deleteList, deleteFromCart, iconCart }}>
      {children}
    </cartContext.Provider>
)
}