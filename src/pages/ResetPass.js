import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const ResetPass = () => {
  return (
<>
<Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <div className='log-wrapper home-wrapper-2 py-5'>
       <div className='container-xxl'>
       <div className='row'>
            <div className='col-12'>
                <div className='auth-card '>
                    <h3 className='text-center mb-3'>Reset Your Password</h3>
                    <p className='text-center'>Please Make New Password</p>
                    <form action='' className='d-flex flex-column gap-15'>
                        <div>
                            <input type='password' name='password' placeholder='Password' className='form-control' />
                        </div>
                        <div>
                            <input type='password' name='confpassword' placeholder='Confirm Password' className='form-control' />
                        </div>
                        <div>
                            <div className='d-flex gap-15 py-2 flex-column justify-content-center align-items-center'>
                                <button className='button border-0' type='submit'>Ok</button>
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

export default ResetPass