import React from 'react'

function Product() {
  return (
    <div>
        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
            <div className='thumbnail'>
                <img data-src="#" alt="" />
                <div className='caption'>
                    <h3>Iphone 12 Plus</h3>
                    <p>
                        16.000.000 VNĐ
                    </p>
                    <p>
                        <a href="#" className='btn btn-primary'>Action</a>
                        <a href="#" className='btn btn-default'>Action</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product