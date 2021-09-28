import { useState, createContext, useContext  } from "react";

const cartContext= createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addToCart = (data) => {
    const arrayCart = [...cartList]

    if (arrayCart.some(i => i.product.id === DataTransfer.product.id)) {
      console.log('arraycart, ', arrayCart)
      arrayCart.find(i => i.product.id === data.product.id).quantity += data.quantity
        setCartList(arrayCart)
      } else {
        setCartList([...cartList, data])
      }
    }
  function deleteList() {
    cartList([]);
  }

  function deleteFromCart(item) {
    const deleteProductFromCart = cartList.filter((prod) => prod.item.id !== item.item.id)
    setCartList([...deleteProductFromCart])
}
  return (
    <cartContext.Provider value={(cartList, addToCart, deleteList, deleteFromCart)}>
      {children}
    </cartContext.Provider>
)
}