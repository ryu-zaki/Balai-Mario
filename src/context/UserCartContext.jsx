import React, { createContext, useContext } from 'react'

const ComponentContext = createContext(null);

const UserCartContext = ({children}) => {
  
  const [cartProducts , setCartProducts] = React.useState([]);
  const [singleOrder, setSingleOrder] = React.useState({
  });

  console.log(cartProducts);

  const [cartNotif, setCartNotif] = React.useState("");
  const [notifVisible, setNotifVisible] = React.useState(false);
 console.log(singleOrder);
  React.useEffect(() => {
  
    if (notifVisible) {
        const timeout = setTimeout(() => {
            setNotifVisible(false)
        }, 2000);

        return () => clearTimeout(timeout);
    }

  }, [notifVisible])
  
  const handleAddProCart = (product) => {
    setCartNotif("Added to your cart")
    setNotifVisible(true);
    setCartProducts(prev => [...prev, product]);
  }

  const handleDeleteProCart = ({target}) => {
    setCartNotif("Removed from your cart")
    setNotifVisible(true);

    setCartProducts(prev => prev.filter(data => data.recipeName !== target.id));
  }

  const clearAllProducts = () => {
    setCartProducts([]);
  }

  console.log()

  return (
    <ComponentContext.Provider value={{
          notifVisible,
          cartNotif, 
          handleAddProCart, 
          cartProducts, 
          handleDeleteProCart,
          clearAllProducts,
          singleOrder, setSingleOrder,
          totalProducts: cartProducts.length}}>
      {children}
    </ComponentContext.Provider>
  )
}

export const useCart = () => {
    return useContext(ComponentContext);
}

export default UserCartContext
