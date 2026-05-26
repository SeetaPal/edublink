import React, { useState } from "react";
import "./ViewCart.css";

function ViewCart() {

  const [qty, setQty] = useState(1);

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => setQty(qty > 1 ? qty - 1 : 1);

  return (
    <div className="cart-page">

      {/* 🔷 Banner */}
      <div className="cart-banner">
        <h1>Cart</h1>
        <p>Home &gt; Cart</p>
      </div>

      {/* 🔷 Table */}
      <div className="cart-table">

        <table>

          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>
                <img src="https://via.placeholder.com/70" alt="product" />
              </td>

              <td>Book Demo A</td>

              <td>$49.00</td>

              {/* 🔥 Quantity */}
              <td>
                <div className="qty-box">

                  <button onClick={decreaseQty}>-</button>

                  <span>{qty}</span>

                  <button onClick={increaseQty}>+</button>

                </div>
              </td>

              <td>${49 * qty}</td>
            </tr>

          </tbody>

        </table>
      </div>

      {/* 🔷 Bottom Section */}
    {/* 🔷 Bottom Section */}
<div className="cart-bottom">

  {/* LEFT - Coupon */}
  <div className="coupon-section">

    <input type="text" placeholder="Apply Coupon" />

    <button className="apply-btn">Apply Coupon</button>

  </div>

  {/* RIGHT SIDE */}
  <div className="right-section">

    <button className="update-btn">Update Cart</button>

    {/* Cart Totals BELOW button */}
    <div className="cart-total">

      <h3>Cart Totals</h3>

      <p><span>Subtotal</span> <b>$392.00</b></p>
      <p><span>Total</span> <b>$392.00</b></p>

      <button className="checkout-btn">
        Proceed to Checkout
      </button>

    </div>

  </div>

</div>

    </div>
  );
}

export default ViewCart;



