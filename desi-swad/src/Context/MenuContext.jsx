import { createContext, useContext, useState, useEffect } from "react";

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {

    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  
  const addItem = (category, items) => {
    
    setCart((prev) => [
      ...prev,
      ...items.map((item) => ({ category, item })),
    ]);
  };

  const deleteItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const updateItem = (index, newItem) => {
    setCart((prev) => prev.map((item, i) => (i === index ? newItem : item)));
  };

  return (
    <MenuContext.Provider value={{ cart, addItem, deleteItem, updateItem }}>
      {children}
    </MenuContext.Provider>
  );
};
