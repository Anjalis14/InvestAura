import React from 'react'
function Pricing() {
    //col 2 will be balnk then we will get that mibble space even we van do padding and all but its good//
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p className='h5'>We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.</p>
            <a href=''className="fs-4" style={{textDecoration:"none"}}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                </div>
                <div className='col-2'></div> 
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p className='h5 mb-3'>Free equity delivery and
                            <br />
                direct mutual funds</p>
                        </div>
                        <div className='col p-3   border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p className='h5 mb-3'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;
