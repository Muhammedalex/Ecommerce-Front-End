import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";


const SingleBlog = () => {
  return (
<>
<Meta title={"Dynamic Blog name"} />
      <BreadCrumb title="Dynamic Blog name" />

      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                   <div className='sing-blog-card'>
                   <Link to="/blogs" className='d-flex align-items-center gap-10'><FaArrowLeft className='fs-5' />Go back to Blogs</Link>
                    <h3 className='title'> A beautiful sunday morning renaissance</h3>
                    <img src='/images/blog-1.jpg' className='img-fluid w-100 my-4' alt='blog' />
                    <p className="desc">
            ollowing a successful API request, the API will return more than 40
            unique response objects containing result data. An API response can
            be returned in JSON or XML format and is structured into 5 modules:
            Location data, time zone data, currency data, languages data,
            security data. Response objects c
          </p>
                    </div> 
                </div>
            </div>
        </div>
      </div>
</>
    )
}

export default SingleBlog