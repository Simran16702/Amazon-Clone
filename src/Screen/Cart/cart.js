import React, { useEffect } from 'react';
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCartFromLocalStorage, removeFromCart, updateCartQuantity } from '../../redux/actions/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AmazonFulfilled from '../../Assets/AmazonFulfilled.png';
import { Link } from 'react-router-dom';
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items); 

    
    let total = 0;
    cartItems.forEach(item => { total += item.price * item.quantity });

    
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCart && storedCart.length > 0) {
            dispatch(setCartFromLocalStorage(storedCart));  
        }
    }, [dispatch]);

   
    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
        }
    }, [cartItems]);

    const handleRemoveFromCart = (id) => {
        toast.error("Item Removed From Cart", {
            position: "bottom-right"
        });
        dispatch(removeFromCart(id));  
    };

    const handleQuantityChange = (id, quantity) => {
        if (quantity <= 0) return;  
        dispatch(updateCartQuantity(id, quantity)); 
    };

    return (
        <div className="cart">
            <div className="topLeftCart">
                <div className="topLeftCartTitle">Shopping Cart</div>
                <div className="desellectAllCart">Deselect all items</div>
                <div className="cartPriceTextDivider">Price</div>

                <div className="cartItemsDiv">
                    {cartItems.map((item, ind) => (
                        <div className="cartItemBlock" key={ind}>
                            <div className="cartItemLeftBlock">
                                <div className="cartItemLeftBlockImage">
                                    <img className='cartItemsLeftBlocking' src={item.imageUrl} alt={item.name} />
                                </div>
                                <div className="cartItemLeftBlockDetails">
                                    <div className="cartItemProductName">{item.name}</div>
                                    <div className="inStockCart">In stock</div>
                                    <div className="elgFreeShp">Eligible for FREE Shipping</div>
                                    <div className="fulfilledByAmazon">
                                        <img className='fulfilledByAmazonImage' src={AmazonFulfilled} alt="Fulfilled by Amazon" />
                                        Fulfilled by Amazon
                                    </div>

                                    <div className="quantity">
                                        <span>Quantity:</span>
                                        <select
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                        >
                                            {[1, 2, 3, 4, 5].map(qty => (
                                                <option key={qty} value={qty}>{qty}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="removeFromCart" onClick={() => handleRemoveFromCart(item.id)}>
                                        Remove
                                    </div>
                                </div>
                            </div>

                            <div className="cartItemRightBlock">
                                Rs {item.price * item.quantity}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="topRightCart">
                <div className="subTotalTitle">
                    Subtotal ({cartItems.length} items) : <span className='subTotalTitleSpan'>Rs {total}</span>
                </div>
                <div className="giftAddto">
                    <input type='checkbox' />
                    <div>This Order Contains a gift</div>
                </div>
                <Link to={'/Checkout'}> 
                    <div className="proceedToBuy">Proceed To Buy</div>
                </Link>
                <div className="seeMoreLikeThis">
                    <button className="seeMoreBtn">See More Like This</button>
                </div>
                
            </div>

            <ToastContainer />
        </div>
    );
};

export default Cart;
