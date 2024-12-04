import React from 'react';

const Cart = ({ comman, setComman }) => {
    const removeFromCart = (index) => {
        const newCart = comman.filter((_, i) => i !== index);
        setComman(newCart);
    };

    const updateQuantity = (index, change) => {
        const updatedCart = comman.map((item, i) => {
            if (i === index) {
                const newQuantity = (item.quantity || 1) + change;
                if (newQuantity < 1) return null; 
                return { ...item, quantity: newQuantity };
            }
            return item;
        }).filter(Boolean);
        setComman(updatedCart);
    };

    const getItemPrice = (priceString) => {
        return parseInt(priceString.replace(/[^0-9]/g, ''));
    };

    const total = comman.reduce((sum, item) => {
        const price = getItemPrice(item.Price);
        return sum + (price * (item.quantity || 1));
    }, 0);

    return (
        <div className=" container">
            <div className="allcart row">
                <div className=" col-md-8">
                    <div className="  card bg-transparent border-warning">
                        <div className=" card-header bg-transparent border-warning d-flex justify-content-between align-items-center">
                            <h3 className="mb-0 text-white">Shopping Cart</h3>
                        </div>
                        <div className="card-body">
                            {comman && comman.length > 0 ? (
                                comman.map((item, index) => {
                                    const itemPrice = getItemPrice(item.Price);
                                    const quantity = item.quantity || 1;
                                    
                                    return (
                                        <div key={index} className="row mb-4 pb-3 border-bottom border-warning">
                                            <div className="col-md-3">
                                                <img 
                                                    src={item.pimage} 
                                                    alt={item.pname}
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="col-md-9">
                                            <div className="cartprprice fw-bold text-success mt-2">Rs. {itemPrice.toLocaleString()}</div>

                                                <h5 className="mb-2 text-white">{item.pname} </h5> 
                                                <div className="text-success mb-2">In stock</div>
                                                {/* <div className="text-white small mb-2">{item.pdiscription}</div> */}


                                                <div className="d-flex align-items-center mb-3 justify-content-center">
                                                    <p className='quantitytxt text-white pt-3 px-2 ' >Quantity:</p>
                                                    <button 
                                                        className="btn btn-outline-secondary btn-sm text-white"
                                                        onClick={() => updateQuantity(index, -1)}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="mx-3 text-white">{quantity}</span>
                                                    <button 
                                                        className="btn btn-outline-secondary btn-sm text-white"
                                                        onClick={() => updateQuantity(index, 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-end">
                                                    <button 
                                                        className="removeebtn btn btn-link text-danger text-decoration-none me-3"
                                                        onClick={() => removeFromCart(index)}
                                                    >
                                                        Delete
                                                    </button>
                                                   
                                                </div>
                                                
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="text-center mb-0 text-white">Your cart is empty</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="rightsection col-md-4  translate-middle ">
                    <div className="card bg-transparent border-warning">
                        <div className="card-body">
                            <div className="progress mb-3 bg-transparent">
                            
                            </div>
                            
                            <h5 className="mb-3 text-white">
                                Subtotal  ({comman.length} {comman.length === 1 ? 'item' : 'items'}): 
                                <span className="fw-bold text-success">  ₹{total.toLocaleString()}</span>
                            </h5>
                            <div className="form-check mb-3">
                              
                            </div>
                            <button className="btn btn-warning w-100">
                                Proceed to Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;