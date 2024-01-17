import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Signup = () => {
  return (
    <>
    <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className='log-wrapper home-wrapper-2 py-5'>
       <div className='container-xxl'>
       <div className='row'>
            <div className='col-12'>
                <div className='auth-card '>
                    <h3 className='text-center mb-3'>Sign Up</h3>
                    <p className='text-center'>Join To Our Amazing Store</p>
                    <form action='' className='d-flex flex-column gap-15'>
                        <div>
                            <input type='text' name='firstname' placeholder='Firstname' className='form-control' />
                        </div>
                        <div>
                            <input type='text' name='lastname' placeholder='Lastname' className='form-control' />
                        </div>
                        <div>
                            <input type='email' name='email' placeholder='Email' className='form-control' />
                        </div>
                        <div>
                            <input type='password' name='password' placeholder='Password' className='form-control' />
                        </div>
                        <div>
                            <div className='d-flex gap-15 py-2 flex-column justify-content-center align-items-center'>
                                <button className='button border-0' type='submit'>Create</button>
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

export default Signup