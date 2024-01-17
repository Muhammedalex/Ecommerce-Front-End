import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Wishlist = () => {
  return (
        <>
         <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className='wish-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='wish-card position-relative'>
                    <img className='position-absolute cross' src='./images/cross.svg' alt='cross' />
                        <div className='wish-img'>
                        <img src='./images/tab2.jpg' className='img-fluid' alt='tab' />
                        </div>
                       <div className='px-2 py-3'>
                       <h5 className='title'>
                        Honor T1 7.0 1 GB RAM 8G 7 Inch with Wi-Fi+3G Tablet
                        </h5>
                        <h6 className='price'>
                            $ 100
                        </h6>
                       </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wish-card position-relative'>
                    <img className='position-absolute cross' src='./images/cross.svg' alt='cross' />
                        <div className='wish-img'>
                        <img src='./images/tab3.jpg' className='img-fluid' alt='tab' />
                        </div>
                       <div className='px-2 py-3'>
                       <h5 className='title'>
                        Honor T1 7.0 1 GB RAM 8G 7 Inch with Wi-Fi+3G Tablet
                        </h5>
                        <h6 className='price'>
                            $ 100
                        </h6>
                       </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wish-card position-relative'>
                    <img className='position-absolute cross' src='./images/cross.svg' alt='cross' />
                        <div className='wish-img'>
                        <img src='./images/tab.jpg' className='img-fluid' alt='tab' />
                        </div>
                       <div className='px-2 py-3'>
                       <h5 className='title'>
                        Honor T1 7.0 1 GB RAM 8G 7 Inch with Wi-Fi+3G Tablet
                        </h5>
                        <h6 className='price'>
                            $ 100
                        </h6>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
        </>
    )
}

export default Wishlist