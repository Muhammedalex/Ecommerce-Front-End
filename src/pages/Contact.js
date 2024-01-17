import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { FaHome , FaInfoCircle, FaMailBulk, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <div className="contact-map-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
              title="my location"
              // height="400px"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6821.203589368885!2d29.985214612273822!3d31.259445057273783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1705379443754!5m2!1sen!2seg"
                className="border-0 w-100"
                style={{height:'400px'}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-wrapper d-flex justify-content-between align-items-start">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="name" />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="email" />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="mobile" />
                    </div>
                    <div>
                      <textarea name="" id="" cols="10" rows="4" className="form-control" placeholder="comments"></textarea>
                    </div>
                    <div>
                      <button type="submit" className="button border-0">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                        <li className="mb-2 d-flex align-items-center gap-15">
                          <FaHome className="fs-5 mb-3"/>
                          <address>
                            Hno:277 Near village chopal, mandora
                          </address>
                          </li>
                          <li className="mb-2 d-flex align-items-center gap-15">
                          <FaPhoneAlt className="fs-5 mb-3"/>
                          <a href="tel:+01158409358" className="mb-3" >+01158409358</a>
                        </li>
                        <li className="mb-2 d-flex align-items-center gap-15">
                          <FaMailBulk className="fs-5 mb-3"/>
                          <a href="mailto:m.ayman1924@gmail.com" className="mb-3">m.ayman1924@gmail.com</a>
                        </li>
                        <li className="mb-2 d-flex align-items-center gap-15">
                          <FaInfoCircle className="fs-5 mb-3"/>
                          <p>Monday-Friday 10AM - 10PM</p>
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
