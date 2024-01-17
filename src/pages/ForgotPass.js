import React from 'react'
import BreadCrumb from './../components/BreadCrumb';
import Meta from './../components/Meta';
import { Link } from 'react-router-dom';

const ForgotPass = () => {
  return (
   <>
    <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <div className='log-wrapper home-wrapper-2 py-5'>
       <div className='container-xxl'>
       <div className='row'>
            <div className='col-12'>
                <div className='auth-card '>
                    <h3 className='text-center mb-3'>Reset Your Password</h3>
                    <p className='text-center'>We Will Send You An Email To Reset Your Password</p>
                    <form action='' className='d-flex flex-column gap-15'>
                        <div>
                            <input type='email' name='email' placeholder='Email' className='form-control' />
                        </div>
                        <div>
                            <div className='d-flex gap-15 py-2 flex-column justify-content-center align-items-center'>
                                <button className='button border-0' type='submit'>Submit</button>
                                <Link to="/login" >Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       </div>
      </div>
   </>
  )
}

export default ForgotPass