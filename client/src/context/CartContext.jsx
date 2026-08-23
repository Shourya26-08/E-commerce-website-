import { createContext,useContext,useMemo,useState } from 'react';
const CartContext=createContext(null);
export function CartProvider({children}){
 const [items,setItems]=useState(()=>JSON.parse(localStorage.getItem('cart')||'[]'));
 const persist=x=>{setItems(x);localStorage.setItem('cart',JSON.stringify(x));};
 const addToCart=p=>persist(items.some(i=>i._id===p._id)?items.map(i=>i._id===p._id?{...i,quantity:i.quantity+1}:i):[...items,{...p,quantity:1}]);
 const removeFromCart=id=>persist(items.filter(i=>i._id!==id));
 const updateQuantity=(id,q)=>persist(q<1?items.filter(i=>i._id!==id):items.map(i=>i._id===id?{...i,quantity:q}:i));
 const clearCart=()=>persist([]);
 const total=useMemo(()=>items.reduce((s,i)=>s+i.price*i.quantity,0),[items]);
 return <CartContext.Provider value={{items,addToCart,removeFromCart,updateQuantity,clearCart,total,count:items.reduce((s,i)=>s+i.quantity,0)}}>{children}</CartContext.Provider>
}
export const useCart=()=>useContext(CartContext);
