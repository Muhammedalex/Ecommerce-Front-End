import React from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";


const CheckOut = () => {
  return (
    <>
      <div className="check-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7 bg-white py-4">
              <div className="check-data">
                <h3 className="web-name"> Alex.</h3>
                <nav
                  style={{"--bs-breadcrumb-divider": ">"}}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                     <Link to='/cart'>Cart</Link>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                    Information
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                    Shipping
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                     Payment
                    </li>
                    &nbsp; 
                  </ol>
                </nav>
                <h4 className="title">
                    Contact Information
                </h4>
                <p className="user-details">
                    Muhammed Aymen <br /> m.ayman@gmail.com
                </p>
                <form action="" className="d-flex flex-wrap gap-15 justify-content-between">
                    <div className="w-100">
                        <select name="" className="form-control border form-select">
                        <option selected disabled >Select Country</option>
                            <option>Egypt</option>
                            <option>Saudi Arabia</option>
                        </select>
                    </div>
                    <div className="d-flex gap-15 w-100">
                        <input placeholder="First Name" type="text" className="form-control border" name="" />
                        <input placeholder="Last Name" type="text" className="form-control border" name="" />
                    </div>
                        <div className="w-100">
                        <input placeholder="Address" type="text" className="form-control border" name="" />
                    </div>
                    <div className="w-100">
                        <input placeholder="Apartment" type="text" className="form-control border" name="" />
                    </div>
                    <div className="d-flex gap-15 w-100">
                        <input placeholder="City" type="text" className="form-control border" name="" />
                        <select name="" className="form-control border form-select">
                        <option selected disabled >Select State</option>
                            <option>Alexandria</option>
                            <option>Cairo</option>
                        </select>                        <input placeholder="Zip Code" type="text" className="form-control border" name="" />
                    </div>
                    <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                            <Link className="border-buttom" to="/cart">
                            <TiArrowBack className="fs-4 mb-1 mx-2" />Return To Cart
                            </Link>
                            <Link to="/" className="btn btn-lg btn-danger">
                                Continue To Shipping
                            </Link>
                        </div>
                    </div>
                </form>
              </div>
            </div>
            <div className="col-5 px-4">
                <div className="border-buttom py-4">
                  <div className="d-flex gap-10 align-items-center">
                  <div className="d-flex w-75 gap-15 align-items-center">
                  <div className="w-25 position-relative">
                    <span className="badge bg-success text-white rounded-circle p-2 position-absolute" style={{
                       top:"-10px",
                       right:"-8px"
                    }}>1</span>
                        <img className="img-fluid" src="/images/homeapp.jpg" alt="" />
                    </div>
                    <div>
                        <h5 className="title">Watch Apple</h5>
                        <p className="text-secondary">s/ #3f4E2s</p>
                    </div>
                  </div>
                    
                    <div className="flex-grow-1">
                        <h5>$ 500</h5>
                    </div>
                  </div>
                </div>
                <div className="border-buttom py-4">
                  <div className="d-flex gap-10 align-items-center">
                  <div className="d-flex w-75 gap-15 align-items-center">
                  <div className="w-25 position-relative">
                    <span className="badge bg-success text-white rounded-circle p-2 position-absolute" style={{
                        top:"-10px",
                        right:"-8px"
                    }}>1</span>
                        <img className="img-fluid" src="/images/headphone.jpg" alt="" />
                    </div>
                    <div>
                        <h5 className="title">Watch Apple</h5>
                        <p className="text-secondary">s/ #3f4E2s</p>
                    </div>
                  </div>
                    
                    <div className="flex-grow-1">
                        <h5>$ 500</h5>
                    </div>
                  </div>
                </div>
                <div className="border-buttom py-4">
                <div className="d-flex justify-content-between align-items-center">
                    <p>Suptotal</p>
                    <p>$ 1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">Shipping</p>
                    <p className="mb-0"> $ 20</p>
                </div>
                </div>
                <div className="mt-3 d-flex justify-content-between align-items-center">
                    <h4>Total</h4>
                    <h5>$ 1020</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
