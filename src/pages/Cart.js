import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">QTY</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-items-center gap-30">
                  <div className="w-25 d-flex">
                    <img src="/images/headphone.jpg" className="img-fluid" alt="cart-product" />
                  </div>
                  <div className="w-75 d-flex flex-column mt-3">
                    <p>HeadPhone</p>
                    <p>Color : Red</p>
                    <p >Size : XL</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ 500</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-10">
                  <div>
                    <input
                      className="form-control"
                      style={{ width: "70px" }}
                      type="number"
                      value={1}
                      min={1}
                      max={10}
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <MdDeleteForever className="fs-4 mb-1 text-danger" style={{cursor:"pointer"}} />
                  </div>
                </div>
                <div className="cart-col-4">
                <h5 className="price">$ 500</h5>
                </div>
              </div>
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-items-center gap-30">
                  <div className="w-25 d-flex">
                    <img src="/images/headphone.jpg" className="img-fluid" alt="cart-product" />
                  </div>
                  <div className="w-75 d-flex flex-column mt-3">
                    <p>HeadPhone</p>
                    <p>Color : Red</p>
                    <p >Size : XL</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ 500</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-10">
                  <div>
                    <input
                      className="form-control"
                      style={{ width: "70px" }}
                      type="number"
                      value={1}
                      min={1}
                      max={10}
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <MdDeleteForever className="fs-4 mb-1 text-danger" style={{cursor:"pointer"}} />
                  </div>
                </div>
                <div className="cart-col-4">
                <h5 className="price">$ 500</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4 border-buttom">
                <Link to="/our-store" className="button mb-4">Continue To Shopping</Link>
            </div>
            <div className="d-flex justify-content-end py-2 mt-4 border-buttom">
                <div className="d-flex flex-column">
                    <h4 className="align-self-start">SubTotal : $ 1000</h4>
                    <p>Taxes and shipping calcuted at checkout</p>
                <div>
                <Link to="/check-out" className="button mb-4 align-self-center w-100 text-center">Check Out</Link>
                </div>

                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
