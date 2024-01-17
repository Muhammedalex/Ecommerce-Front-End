import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { SiMinutemailer } from "react-icons/si";
import {  } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer className='py-4' >
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <SiMinutemailer className='text-white fs-1' />
              <h2 className='mb-0 text-white'> Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
          <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  Supscribe
                </span>
              </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4' >
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className='text-white fs-5'>Hno L 277 Near Vill chopal, <br /> Sonipat,Haryana <br />
                        PinCode : 131103
              </address>
              <a href='tel: +01158409358' className='mt-4 d-block mb-3 text-white'>+01158409358</a>
              <a href='mailto:m.ayman1924@gmail.com' className='mt4 d-block mb-3 text-white'>m.ayman@gmail.com</a>
              <div className='social-icons align-items-center gap-30 d-flex'>
            <a href='face.com' className='mt-4 d-block mb-1' ><BsLinkedin className='fs-4 text-white' /></a>
            <a href='face.com' className='mt-4 d-block mb-1'><BsInstagram className='fs-4 text-white' /></a>
            <a href='face.com' className='mt-4 d-block mb-1'><BsYoutube className='fs-4 text-white' /></a>
            <a href='face.com' className='mt-4 d-block mb-1'><BsGithub className='fs-4 text-white' /></a>
            </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'> Information </h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1' to="/privacy-policy"> Privacy Policy</Link>
              <Link className='text-white py-2 mb-1' to="/refund-policy"> Refund Policy</Link>
              <Link className='text-white py-2 mb-1' to="/shipping-policy"> Shipping Policy</Link>
              <Link className='text-white py-2 mb-1' to="/term-and-conditions"> Terms & conditions</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'> Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'> About Us</Link>
              <Link className='text-white py-2 mb-1'> Faq</Link>
              <Link className='text-white py-2 mb-1'> Search</Link>
              <Link className='text-white py-2 mb-1' to="/contact"> Contact</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'> Laptops</Link>
              <Link className='text-white py-2 mb-1'> Headphons</Link>
              <Link className='text-white py-2 mb-1'> Tablets</Link>
              <Link className='text-white py-2 mb-1'> Watchs</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4' >
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
            <p className='text-center text-white'>
              &copy; {new Date().getFullYear()}; Powered by Muhammed Aymen
            </p>
        </div>
      </div>
      </div>
    </footer>
    </>
  )
}

export default Footer