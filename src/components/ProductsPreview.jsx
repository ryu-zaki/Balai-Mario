import React from 'react';
import starterCover from '../assets/products/crispy-kangkong.jpg';
import vegetarianCover from '../assets/products/pinakbet.jpg';
import chickenCover from '../assets/products/fried-chicken.jpg';


const ProductsPreview = () => {

    return (
        <div>
          <div>
            <h2>Our <span>Products</span></h2>
          </div>
          
          <div className='flex flex-col gap-2'>
            <section>
                <img src={starterCover} alt='' />
                <h2>01</h2>
                
                <div>
                    <span></span>
                    <h3>Starter</h3>
                </div>
            </section>

            <section>
                <img src={starterCover} alt='' />
                <h2>01</h2>
                
                <div>
                    <span></span>
                    <h3>Starter</h3>
                </div>
            </section>

            <section>
                <img src={starterCover} alt='' />
                <h2>01</h2>
                
                <div>
                    <span></span>
                    <h3>Starter</h3>
                </div>
            </section>


          </div>

        </div>
    )
}

export default ProductsPreview;