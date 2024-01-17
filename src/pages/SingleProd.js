import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Color from "./../components/Color";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { MdFavorite } from "react-icons/md";
import ZoomImage from "../hooks/ZoomImage";


const SingleProd = () => {
  // eslint-disable-next-line no-unused-vars
  const [orderedProd, setOrderProd] = useState(2);

  const copyLink = (text) => {
    try {
      // Create a temporary element (input) to store the text
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
  
      // Select the text in the input element
      tempInput.select();
      tempInput.setSelectionRange(0, 99999); // For mobile devices
  
      // Use the Clipboard API to copy the selected text
      document.execCommand('copy');
  
      // Remove the temporary input element
      document.body.removeChild(tempInput);
  
      console.log('Text copied to clipboard:', text);
    } catch (err) {
      console.error('Unable to copy text to clipboard:', err);
    }
  };

  return (
    <>
      <Meta title={"Dynamic Product Name"} />
      <BreadCrumb title="Dynamic Product Name" />
      <div className="main-prod-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-img">
                <div>
                  {/* <TransformWrapper>
                    <TransformComponent>
                      <img src="/images/watch-2.jpg" alt="test" />
                    </TransformComponent>
                  </TransformWrapper> */}
                 <ZoomImage src="/images/watch-2.jpg" alt="Zoomable Image" zoomFactor={1.5} />
                </div>
              </div>
              <div className="other-img d-flex flex-wrap align-items-center justify-content-center">
                <div>
                  <TransformWrapper>
                    <TransformComponent>
                      <img
                        src="/images/watch-2.jpg"
                        className="img-fluid"
                        alt="test"
                      />
                    </TransformComponent>
                  </TransformWrapper>
                </div>
                <div>
                  <TransformWrapper>
                    <TransformComponent>
                      <img
                        src="/images/watch-2.jpg"
                        className="img-fluid"
                        alt="test"
                      />
                    </TransformComponent>
                  </TransformWrapper>
                </div>
                <div>
                  <TransformWrapper>
                    <TransformComponent>
                      <img
                        src="/images/watch-2.jpg"
                        className="img-fluid"
                        alt="test"
                      />
                    </TransformComponent>
                  </TransformWrapper>
                </div>
                <div>
                  <TransformWrapper>
                    <TransformComponent>
                      <img
                        src="/images/watch-2.jpg"
                        className="img-fluid"
                        alt="test"
                      />
                    </TransformComponent>
                  </TransformWrapper>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-prod-details">
                <div className="border-buttom">
                  <h3 className="title">
                    Kids headphones bulk 10 pack multi colored for students
                  </h3>
                </div>
                <div className="border-buttom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-rev">(2 reviews)</p>
                  </div>
                  <a href="#review" className="rev-btn">
                    write a review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="py-2 d-flex gap-10 align-items-center">
                    <h3 className="prod-heading">Type : </h3>
                    <p className="prod-data"> Watch</p>
                  </div>
                  <div className="py-2 d-flex gap-10 align-items-center">
                    <h3 className="prod-heading">Brand : </h3>
                    <p className="prod-data"> Havels</p>
                  </div>
                  <div className="py-2 d-flex gap-10 align-items-center">
                    <h3 className="prod-heading">Category : </h3>
                    <p className="prod-data"> Watch</p>
                  </div>
                  <div className="py-2 d-flex gap-10 align-items-center">
                    <h3 className="prod-heading">Tags : </h3>
                    <p className="prod-data"> Watch</p>
                  </div>
                  <div className="py-2 d-flex gap-10 align-items-center">
                    <h3 className="prod-heading">Availabilty : </h3>
                    <p className="prod-data"> In Stock</p>
                  </div>
                  <div className="py-2 d-flex  flex-column">
                    <h3 className="prod-heading">Size : </h3>
                    <div className="d-flex flex-wrap gap-15 mt-2">
                      <span className="badge border sizes border-1 border-secondary text-dark">
                        S
                      </span>
                      <span className="badge border sizes border-1 border-secondary text-dark">
                        M
                      </span>
                      <span className="badge border sizes border-1 border-secondary text-dark">
                        L
                      </span>
                      <span className="badge border sizes border-1 border-secondary text-dark">
                        XL
                      </span>
                    </div>
                  </div>
                  <div className="py-2 d-flex flex-column">
                    <h3 className="prod-heading">Color : </h3>
                    <div className="mt-2">
                      <Color />
                    </div>
                  </div>
                  <div className="py-2 d-flex flex-row align-items-center gap-15">
                    <h3 className="prod-heading ">Qty : </h3>
                    <div className="">
                      <input
                        type="number"
                        style={{ width: "70px" }}
                        min={1}
                        max={10}
                        name="qty"
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex gap-15 align-items-center">
                      <button className="button border-0">Add To Cart</button>
                      <button to="/signup" className="button signup">
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15 py-4">
                      <div>
                        <a href="/"><MdFavorite className="fs-5 mx-2"/> Add to Wishlist</a>
                      </div>
                      <div>
                        <a href="/"><HiArrowPathRoundedSquare className="fs-5 mx-2" />Add to Compare</a>
                      </div>
                  </div>
                  <div className="py-2 d-flex gap-10 align-items-center">
                    <h3 className="prod-heading">Shipping : </h3>
                    <p className="prod-data"> Watch</p>
                  </div>
                  <div className="py-2 d-flex gap-10 align-items-center">
                    <h3 className="prod-heading">Product Link : </h3>
                    <div className="link-copy" onClick={()=>copyLink("Welcome to my website")}>
                      Copy Product Link
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desc-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="sec-heading">Description</h3>
              <div className="bg-white p-3">
                <p className="">
                  The main way that this package differs from react-helmet is
                  that it requires using a Provider to encapsulate Helmet state
                  for your React tree. If you use libraries like Redux or
                  Apollo, you are already familiar with this paradigm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rev-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="sec-heading">Reviews</h3>
              <div className="rev-inner-wrapper">
                <div className="rev-head d-flex justify-content-between align-items-end">
                  <div id="review">
                    <h4>Customers Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProd > 0 && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="/"
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="rev-form py-4">
                  <h4>Write a Review</h4>
                  <form
                    action=""
                    className="d-flex flex-column justify-content-between gap-10"
                  >
                    <div className="p-3">
                      <ReactStars
                        count={5}
                        value={0}
                        edit={true}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div className="w-100 p-3">
                      <textarea
                        name=""
                        id=""
                        cols="10"
                        rows="4"
                        className="form-control"
                        placeholder="comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews py-4">
                  <div className="review">
                    <div className="d-flex flex-column align-item-center">
                      <h6>Muhammed Ayman</h6>
                      <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      your React tree. If you use libraries like Redux or
                      Apollo, you are already familiar with this paradigm your
                      React tree. If you use libraries like Redux or Apollo, you
                      are already familiar with this paradigm your React tree.
                      If you use libraries like Redux or Apollo, you are already
                      familiar with this paradigm your React tree. If you use
                      libraries like Redux or Apollo, you are already familiar
                      with this paradigm
                    </p>
                  </div>
                  <div className="review">
                    <div className="d-flex flex-column align-item-center">
                      <h6>Ayman Kamal</h6>
                      <ReactStars
                        count={5}
                        value={5}
                        edit={false}
                        // onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      your React tree. If you use libraries like Redux or
                      Apollo, you are already familiar with this paradigm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="populer-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <h3 className="sec-heading">Our Populer Products</h3>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProd;
