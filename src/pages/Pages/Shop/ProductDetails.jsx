
import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import productDetailsImg from "../../../assets/images/productImage.jpg";
import review1 from "../../../assets/images/team-03.webp";
import review2 from "../../../assets/images/team-01.webp";

import renderStars from "../../../components/renderStars";
import StarRating from "../../../components/StarRating";

import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [showMsg, setShowMsg] = useState(false);

  const increaseQty = () => setQty(prev => prev + 1);
  const decreaseQty = () => setQty(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    setShowMsg(true);
  };

  useEffect(() => {
    const msg = localStorage.getItem("cartMsg");
    if (msg) setShowMsg(true);
  }, []);


  const [rating, setRating] = useState(0);

  const navigate = useNavigate();

  return (
    <div className="productDetails-details">

      {/* 🔥 BANNER */}
      <section className="banner">

        <div className="bannerContent">
          <h1>Book Demo A </h1>

          <p className="breadcrumb">
            <span className="home">Home</span>
            <span className="sep"> &gt; </span>
            <span className="active">
              productDetails</span>
            <span className="sep"> &gt; </span>
            <span className="active">Book Demo A
            </span>
          </p>
        </div>
      </section>


      {/* ✅ SUCCESS MSG */}
      {showMsg && (
        <div className="cart-success-box">
          <p><strong>“Book Demo A”</strong> has been added to your cart.</p>

          <button
            className="view-cart-btn"
            onClick={() => navigate("/productview/2")}
          >
            View Cart
          </button>
        </div>
      )}

      {/* 🔷 MAIN */}
      <div className="productDetails-container">

        {/* IMAGE */}
        <div className="productDetails-image">
          <img src={productDetailsImg} alt="product" />
        </div>

        {/* INFO */}
        <div className="productDetails-info">
          <h2>Book Demo A</h2>

          <p className="rating">★★★★☆ (2 customer reviews)</p>

          <h3 className="price">$49.00</h3>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin vel sed aliquet iaculis urna.
            Lacinia tellus maecenas odio accumsan duis nunc non facilisis. Eu eget ultricies
            volutpat consequat. Accumsan congue feugiat nibh purus magna metus porttitor egestas
            aliquam. Aenean urna quam diam turpis et nibh. Nulla eget cras sit hendrerit habitasse
            fermentum egestas egestas. Cursus sociis duis diam curabitur lacus.
          </p>

          {/* CART */}
          <div className="cart-section">
            <div className="quantity-box">
              <button onClick={decreaseQty}>▼</button>
              <span>{qty}</span>
              <button onClick={increaseQty}>▲</button>
            </div>

            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          {/* META */}
          <div className="productDetails-meta">
            <p><strong>SKU:</strong> Book-1</p>
            <p><strong>Category:</strong> Book</p>
            <p><strong>Tag:</strong> Business</p>
          </div>
        </div>
      </div>

      {/* 🔷 TABS */}
      <div className="productDetails-tabs">

        <div className="productDetails-tabs-header">
          <button
            className={activeTab === "description" ? "active" : ""}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>

          <button
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        <div className="productDetails-tabs-content">

          {/* DESCRIPTION */}
          {activeTab === "description" && (
            <div className="productDetails-tab-panel">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              </p>

              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore dolore....
              </p>
            </div>
          )}

          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <div className="productDetails-reviews-section">

              <h3>2 reviews for Book Demo A</h3>

              {/* REVIEW 1 */}
              <div className="pd-review-item">
                <img src={review1} className="pd-review-avatar" alt="" />

                <div className="pd-review-content">
                  <h4 className="pd-review-name">
                    Steve Martin <span>- November 13, 2023</span>
                  </h4>

                  <div className="pd-review-stars">
                    {renderStars(5)}
                  </div>

                  <p className="pd-review-text">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim est laborum.
                    Sed perspiciatis unde omnis natus error sit voluptatem accusa dolore mque laudant totam rem aperiam eaque ipsa quae ab illo inventore
                    veritatis et quasi arch tecto beatae vitae dicta.</p>
                </div>
              </div>

              {/* REVIEW 2 */}
              <div className="pd-review-item">
                <img src={review2} className="pd-review-avatar" alt="" />

                <div className="pd-review-content">
                  <h4 className="pd-review-name">
                    Hilary Swank <span>- November 13, 2023</span>
                  </h4>

                  <div className="pd-review-stars">
                    {renderStars(4)}
                  </div>

                  <p className="pd-review-text">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim est laborum.
                    Sed perspiciatis unde omnis natus error sit voluptatem accusa dolore mque laudant totam rem aperiam eaque ipsa quae ab illo inventore
                    veritatis et quasi arch tecto beatae vitae dicta.</p>
                </div>
              </div>




              <div className="pd-add-review">
                <h3 className="pd-review-title">Add A Review</h3>

               

                <div className="pd-rating-box">
  <label>Your Rating</label>

  <div className="pd-stars-inline">
    <StarRating rating={rating} setRating={setRating} />
  </div>
</div>

                {/* 👤 Name + Email */}
                <div className="pd-input-row">

                  <div className="pd-form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" />
                  </div>

                  <div className="pd-form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                  </div>

                </div>

                {/* 📝 Review */}
                <div className="pd-form-group">
                  <label>Your Review</label>
                  <textarea placeholder="Write your review..."></textarea>
                </div>

                <button className="pd-submit-btn">Submit Review</button>
              </div>

            </div>
          )}

        </div>
      </div>

    </div>
  );
}

export default ProductDetails;