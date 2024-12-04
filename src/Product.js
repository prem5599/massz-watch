// Product.js
import React from 'react';
import pdetails from './Pdetails' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import bannerpr from './images/productbanner.png'

export const Product = ({ comman, setComman }) => {
    const particulardata = (params) => {

        const existingItemIndex = comman.findIndex(item => item.p1 === params.p1);
        
        if (existingItemIndex !== -1) {

            const updatedCart = comman.map((item, index) => {
                if (index === existingItemIndex) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setComman(updatedCart);
        } else {

            setComman([...comman, { ...params, quantity: 1 }]);
        }
    };

    return (
        <div>            <img src={bannerpr}  className='bannerpr'/>

        <div className="container">
            <h2 className="head22">Products</h2>
            <div className='row'>
                {pdetails.map((arraydata) =>
                    <div key={arraydata.p1} className='col-lg-4 px-5 py-4'>
                        <div className="card bg-transparent border-warning" >
                            <img src={arraydata.pimage} className="card-img-top" alt={arraydata.pname} height='auto'/>
                            <div className="cardstext card-body ">
                                <h5 className="card-title text-white">{arraydata.pname}</h5>
                                <p className="card-text text-white">{arraydata.pdiscription}</p>
                                <p className="card-text text-white">{arraydata.pfeatures}</p>
                                <p className="card-text text-success"><b>{arraydata.Price}</b></p>
                                {/* <button className="btn btn-warning me-2">Buy Now</button> */}
                                <button className="btn btn-warning" onClick={() => particulardata(arraydata)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <hr class="border border-warning"/>
            <Footer/>
        </div>
        </div>
    );
};

export default Product;