import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./navbar.css";

const Navbar = () => {

    const items = useSelector((state) => state.cart);

    return (


        <div className='nav'>
         {/* <div className="leftnav"> */}
            <span className="home">
            <Link to="/">
                <h2 >Home</h2>
                </Link>
          <span className="addproduct">
            <Link to="/addproduct">
                <h2 > Addproduct</h2>
            </Link>
            </span>
           {/* </div> */}
         </span>

            <span className="rightnav">
            <Link to="/cart">
                <h2 > Cart : {items.length}</h2>
            </Link>
            </span>
            </div>
    );
};

export default Navbar;