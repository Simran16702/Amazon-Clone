import React from 'react';
import { useSelector } from 'react-redux';
import './CheckoutPage.css';
import AmazonFulfilled from '../../Assets/AmazonFulfilled.png';

const CheckoutPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
    let total = 0;

    cartItems.forEach(item => {
        total += item.price * item.quantity;
    });

    return (
        <div className="checkoutPage">
            <div className="checkoutPageLeft">
               
                <div className="orderSummary">
                    <h2>Order Summary</h2>
                    <div className="orderItems">
                        {cartItems.map((item, index) => (
                            <div key={index} className="orderItem">
                                <div className="orderItemLeft">
                                    <img src={item.imageUrl} alt={item.name} className="orderItemImage" />
                                    <div className="orderItemDetails">
                                        <div className="orderItemName">{item.name}</div>
                                        <div className="orderItemQuantity">Quantity: {item.quantity}</div>
                                        <div className="fulfilledByAmazon">
                                            <img src={AmazonFulfilled} alt="Fulfilled by Amazon" />
                                            Fulfilled by Amazon
                                        </div>
                                    </div>
                                </div>
                                <div className="orderItemPrice">Rs {item.price * item.quantity}</div>
                            </div>
                        ))}
                    </div>
                    <div className="orderTotal">
                        <div className="orderTotalText">Subtotal: </div>
                        <div className="orderTotalPrice">Rs {total}</div>
                    </div>
                </div>


                <div className="paymentDetails">
                    <h2>Payment Details</h2>
                    <form>
                        <div className="paymentFormField">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="paymentFormField">
                            <label htmlFor="address">Shipping Address</label>
                            <input type="text" id="address" name="address" required />
                        </div>
                        <div className="paymentFormField">
                            <label htmlFor="paymentMethod">Payment Method</label>
                            <select id="paymentMethod" name="paymentMethod" required>
                                <option value="creditCard">Credit Card</option>
                                <option value="debitCard">Debit Card</option>
                                <option value="paypal">PayPal</option>
                                <option value="Other UPI">Other UPI</option>
                            </select>
                        </div>
                        <button type="submit" className="placeOrderBtn">Place Order</button>
                    </form>
                </div>
            </div>

            
            <div className="checkoutPageRight">
                <div className="orderSummaryRight">
                    <h3>Checkout</h3>
                    <div className="orderTotal">
                        <div className="orderTotalText">Total: </div>
                        <div className="orderTotalPrice">Rs {total}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;



