import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from './../components/ProductCard';
import Color from "../components/Color";
const OurStore = () => {
    const [grid,setGrid]=useState(4);
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Camera</li>
                    <li>Tv</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availblity</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="inStock">
                      In Stock {1}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="outStock"
                    />
                    <label className="form-check-label" htmlFor="outStock">
                      Out Of Stock {0}
                    </label>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="from"
                        // value=""
                        placeholder="from"
                      />
                      <label htmlFor="from">From</label>
                    </div>
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control"
                        id="to"
                        // value=""
                        placeholder="to"
                      />
                      <label htmlFor="to">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Color</h5>
                  <div className="">
                   <Color />
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S {2}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M {2}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-3"
                      />
                      <label className="form-check-label" htmlFor="color-3">
                        L {2}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Products Tags</h3>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10 ">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Tv
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Camera
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="./images/speaker.jpg"
                        className="img-fluid"
                        alt="speaker"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids will like this as a gift!</h5>
                      <ReactStars
                        count={5}
                        value={5}
                        edit={false}
                        // onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <b> $ 300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="./images/acc.jpg"
                        className="img-fluid"
                        alt="acc"
                      />
                    </div>
                    <div className="w-50">
                    <h5>Kids will like this as a gift!</h5>
                      <ReactStars
                        count={5}
                        value={5}
                        edit={false}
                        // onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <b> $ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
                <div className="filter-sort-grid mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-10">
                        <p className="mb-0 d-block">
                            Sort By :
                        </p>
                        <select>
                            <option>A-Z</option>
                            <option>Z-A</option>
                            <option>L price to H</option>
                            <option>H price to L</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-center gap-10">
                        <p className="total-prod mb-0">21 Products</p>
                        <div className="d-flex gap-10 align-items-center grid">
                            <img src="./images/gr2.svg" onClick={(e)=>{
                                setGrid(6)
                            }} className="d-block img-fluid" alt="grid" />
                            <img src="./images/gr3.svg" onClick={()=>{
                                setGrid(4)
                            }} className="d-block img-fluid" alt="grid" />
                            <img src="./images/gr4.svg" onClick={()=>{
                                setGrid(3)
                            }} className="d-block img-fluid" alt="grid" />
                            <img src="./images/gr.svg" onClick={()=>{
                                setGrid(12)
                            }} className="d-block img-fluid" alt="grid" />
                        </div>
                    </div>
                    </div>
                    <div></div>
                </div>
                <div className="prod-list pb-5">
                    <div className="row">
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
