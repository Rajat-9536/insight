import React from 'react'

export const Itembar = () => {
  return (
    <div style={{backgroundColor:"#185622"}}>
        <div className='container pt-2 pb-5 mb-5'>
            <div className='row text-center mt-5 pt-5 pb-5'>
                <div className='col-12 col-lg-4'>
                    <h1 className="fw-bold text-light">50+</h1>
                    <h5 className="text-light">Clients Served</h5>
                </div>
                <div className='col-12 col-lg-4'>
                    <h1 className="fw-bold text-light">15-20 Lacs</h1>
                    <h5 className="text-light">Clients Served</h5>
                </div>
                <div className='col-12 col-lg-4'>
                    <h1 className="fw-bold text-light">4.5+ Average</h1>
                    <h5 className="text-light">Clients Served</h5>
                </div>
            </div>
        </div>
    </div>
  )
}
