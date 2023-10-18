import {AddToCartIcon, RemoveFromCartIcon} from "./Icons.jsx";
import './Products.css'
import {useCart} from "../hooks/useCart.js";

export function Products({produtcs}) {
    const {addToCart,cart, removeFromCart} = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {produtcs.slice(0, 10).map(product => {
                    const isProductInCart = checkProductInCart(product)

                    return (
                        <li key={product.id}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                            />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button style={{backgroundColor: isProductInCart ? 'red' : '#09f'}} onClick={() => {
                                    isProductInCart
                                        ? removeFromCart(product)
                                        : addToCart(product)
                                }}
                                >
                                    {
                                        isProductInCart
                                            ? <RemoveFromCartIcon></RemoveFromCartIcon>
                                            : <AddToCartIcon></AddToCartIcon>
                                    }
                                </button>
                            </div>
                        </li>)
                })}
            </ul>
        </main>
    )
}