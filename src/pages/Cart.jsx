import React from "react";
import { useCart } from "../context/CartContext";
import Footer from "../components/footer";
import "../Css/Cart.css";

function Cart() {
const { cart, removeFromCart, clearCart } = useCart();


const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
);

return (
    <div className="cart-page">
        <div className="cart">
            <h1>Shopping Cart</h1>

            <p className="cart-subtitle">
                Check Out New Products To Buy On Product Page.
            </p>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <h2>Your cart is empty!</h2>
                    <p>Add some products to your cart to get started.</p>
                </div>
            ) : (
                <>
                    <div className="cart-grid">
                        {cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-image">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </div>

                                <div className="cart-details">
                                    <h3>{item.name}</h3>
                                    <p className="cart-price">
                                        ₹{item.price}
                                    </p>

                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            removeFromCart(item.id)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>
                            Total: ₹{total}
                        </h2>

                        <div className="cart-actions">
                            <button
                                className="clear-btn"
                                onClick={clearCart}
                            >
                                Clear Cart
                            </button>

                            <button className="checkout-btn">
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>

        <Footer />
    </div>
);

}

export default Cart;
