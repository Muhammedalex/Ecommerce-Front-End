import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch, BsCartCheckFill } from "react-icons/bs";
import { FaCodeCompare, FaUser } from "react-icons/fa6";
import { MdFavorite  } from "react-icons/md";
import { TbBrandDenodo } from "react-icons/tb";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6 ">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline :
                <a href="tel:19977" className="text-white">
                  +01158409358
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h1>
                <Link to="/" className="text-white">Alex.</Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product here..."
                  aria-label="Search Product here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="compare-products" className="text-white d-flex align-items-center gap-10">
                    <FaCodeCompare className="fs-2 text-white" />{" "}
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="wishlist" className="text-white d-flex align-items-center gap-10">
                    <MdFavorite className="fs-2 text-white" /> <p className="mb-0" >WishList</p>
                  </Link>
                </div>
                <div>
                  <Link to="login" className="text-white d-flex align-items-center gap-10">
                    <FaUser className="fs-2 text-white" /> <p className="mb-0">Login</p>
                  </Link>
                </div>
                <div>
                  <Link to="cart" className="text-white d-flex align-items-center gap-10">
                    <BsCartCheckFill className="fs-1" style={{color:'var(--orange-1)'}} />
                    <div className="d-flex flex-column gap-10 mb-0">
                      <span className="badge bg-white text-dark mt-2">2</span>
                      <p className="mb-0">$ 1000</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-button py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div className="">
                <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   <TbBrandDenodo className="fs-3" /> <span className="me-5 d-inline-block">Shop Category</span>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item text-white" to="/our-store">Cameras</Link></li>
    <li><Link className="dropdown-item text-white" to="/our-store">Laptops</Link></li>
    <li><Link className="dropdown-item text-white" to="/our-store">Headphones</Link></li>
  </ul>
</div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="our-store">Our Store</NavLink>
                      <NavLink to="blogs">Blogs</NavLink>
                      <NavLink to="contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
