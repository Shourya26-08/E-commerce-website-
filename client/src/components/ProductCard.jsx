import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
export default function ProductCard({product}){const {addToCart}=useCart();return <article className="card"><Link to={`/products/${product._id}`}><img src={product.image} alt={product.name}/></Link><div className="card-body"><div className="muted">{product.category}</div><h3><Link to={`/products/${product._id}`}>{product.name}</Link></h3><p className="price">${product.price.toFixed(2)}</p><button onClick={()=>addToCart(product)}>Add to cart</button></div></article>}
