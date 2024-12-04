import React from 'react';

const Loginpage = () => {  
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="loginbox col-md-6 col-lg-5">
                    <div className="card bg-transparent border-warning">
                        <div className="card-body p-4">
                            <h3 className="text-center text-white mb-4">Login</h3>
                            
                            <form>
                                <div className="flexii1 mb-3">
                                    <label className="form-label text-white">Email address</label>
                                    <input
                                        type="email"
                                        className="forminput form-control bg-transparent text-white border-warning w-50 "
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="flexii1 mb-3 w-70">
                                    <label className="form-label text-white">Password</label>
                                    <input
                                        type="password"
                                        className="forminput1 form-control bg-transparent text-white border-warning w-50"
                                        placeholder="Enter your password"
                                    />
                                </div>

                            
                                <div className='loginbtn11'>
                                <button type="submit" className="btn btn-warning w-30 px-5 mt-3">
                                    Login
                                </button>
                                <div className="forgotyy mt-3 mb-3 text-start">
                                    <a href="#" className=" text-warning text-decoration-none">
                                        Forgot Password?
                                    </a>
                                </div>

                                <p className="forgotyy text-start text-white mt-3 ">
                                    Don't have an account? 
                                    <a href="#" className="text-warning text-decoration-none ms-2">
                                        Sign up
                                    </a>
                                </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;  