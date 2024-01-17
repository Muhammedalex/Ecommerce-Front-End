import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  const navigate = useNavigate();
  // alert(location.pathname);
  return (
    <div className={location.pathname === '/our-store'? `col-${grid} gr` : "col-3"}>
      <div  className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link to="/" ><img src="/images/wish.svg" alt="" /></Link>
        </div>
        <div className="product-img">
          <img src="/images/tab.jpg" className="img-fluid" alt="product" />
          <img src="/images/tab3.jpg" className="img-fluid" alt="product" />
        </div>
        <div className="prodcut-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            <Link to="/product/:id">Kids headphones bulk 10 pack multi colored for students</Link>
          </h5>
          <ReactStars
            count={5}
            value={3}
            edit={false}
            // onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          <p className={`descri ${grid === 12 ? 'd-block': 'd-none'}`}>
          It can be scary, but I personally find it exciting. It means there's always something to learn, always something to improve at and always room to grow.
          </p>
          <p className="price">$ 100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link to="/compare-products" >
                    <img src="/images/prodcompare.svg" alt="" />
                </Link>
                <Link to="/product/:id">
                    <img src="/images/view.svg" alt="" />
                </Link>
                <Link to="/">
                    <img src="/images/add-cart.svg" alt="" />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
