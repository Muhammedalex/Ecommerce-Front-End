import React from "react";
import { Link } from "react-router-dom";
import {
  FaCar,
  FaGift,
  FaHandsHelping,
  FaRegCreditCard,
  FaSalesforce,
} from "react-icons/fa";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProd from "../components/SpecialProd";
import Meta from "../components/Meta";

const Home = () => {
  return (
    <>
    <Meta title={"E-Commerce | Home"} />
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="./images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*
                  </p>
                  <Link className="button"> Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative p-2">
                  <img
                    src="./images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                    width="300px"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Flash Sale</h4>
                    <h5>Buy iPad</h5>
                    <p>
                      From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2">
                  <img
                    src="./images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                    width="300px"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Flash Sale</h4>
                    <h5>Buy iPad</h5>
                    <p>
                      From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2">
                  <img
                    src="./images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                    width="300px"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Flash Sale</h4>
                    <h5>Buy iPad</h5>
                    <p>
                      From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2">
                  <img
                    src="./images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                    width="300px"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Flash Sale</h4>
                    <h5>Buy iPad</h5>
                    <p>
                      From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services gap-10 d-flex align-items-center justify-content-between">
                <div className="d-flex gap-15 align-items-center">
                  <FaCar className="fs-1 mb-4" />
                  <div>
                    <h6>Free shipping</h6>
                    <p>From all orders over</p>
                  </div>
                </div>
                <div className="d-flex  gap-15 align-items-center">
                  <FaGift className="fs-1 mb-4" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p>Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <FaHandsHelping className="fs-1 mb-4" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p>Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <FaSalesforce className="fs-1 mb-4" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p>Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <FaRegCreditCard className="fs-1 mb-4" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p>100% save</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 pb-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap  justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6> Laptops</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src="./images/banner-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6>SmartTv</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src="./images/banner-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6> Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src="./images/banner-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6>Watches</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src="./images/banner-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6> Laptops</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src="./images/banner-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6>SmartTv</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src="./images/banner-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6> Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src="./images/banner-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6>Watches</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src="./images/banner-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <h3 className="sec-heading">Featured Collection</h3>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
            <div className="famous-card position-relative">
              <img src="https://cdn.shopify.com/static/sample-images/teapot.jpg" className="img-fluid" alt="famous"/>
             <div className="famous-content position-absolute">
             <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>
                From $399 or $16.62/mo.<br /> for 24 mo.*
              </p>
             </div>
              </div>
            </div>
             <div className="col-3">
            <div className="famous-card position-relative">
              <img src="https://cdn.shopify.com/static/sample-images/teapot.jpg" className="img-fluid" alt="famous"/>
             <div className="famous-content position-absolute">
             <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>
                From $399 or $16.62/mo.<br /> for 24 mo.*
              </p>
             </div>
              </div>
            </div>
            <div className="col-3">
            <div className="famous-card position-relative">
              <img src="https://cdn.shopify.com/static/sample-images/teapot.jpg" className="img-fluid" alt="famous"/>
             <div className="famous-content position-absolute">
             <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>
                From $399 or $16.62/mo.<br /> for 24 mo.*
              </p>
             </div>
              </div>
            </div>
            <div className="col-3">
            <div className="famous-card position-relative">
              <img src="https://cdn.shopify.com/static/sample-images/teapot.jpg" className="img-fluid" alt="famous"/>
             <div className="famous-content position-absolute">
             <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>
                From $399 or $16.62/mo.<br /> for 24 mo.*
              </p>
             </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl" >
          <div className="row">
            <div className="col-12">
            <h3 className="sec-heading">Special Products</h3>
              </div>              
          </div>
          <div className="row">
            <SpecialProd />
            <SpecialProd />
            <SpecialProd />
            <SpecialProd />
          </div>
        </div>
      </section>
      <section className="populer-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <h3 className="sec-heading">Our Populer Products</h3>
          </div>
          <div className="row">
            {/* <div className="col-2"><div className="card "></div></div>
            <div className="col-2"><div className="card "></div></div>*/}
            <ProductCard /> 
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="./images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-07.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <h3 className="sec-heading">Our Latest Blog</h3>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
