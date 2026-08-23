import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
export default function Navbar(){const {user,logout}=useAuth();const {count}=useCart();return <header className="nav"><Link className="brand" to="/">ShopSphere</Link><nav><Link to="/">Shop</Link>{user&&<Link to="/orders">Orders</Link>}<Link className="cart-link" to="/cart">Cart <span>{count}</span></Link>{user?<button className="link-btn" onClick={logout}>Logout</button>:<><Link to="/login">Login</Link><Link className="nav-cta" to="/register">Create account</Link></>}</nav></header>}
