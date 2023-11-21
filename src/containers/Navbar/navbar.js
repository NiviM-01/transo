import React, { useState, useEffect } from 'react';
import logo from '../../assests/transo-logo.svg'
// import Bookademo from '../Bookademo/Bookademo';

function Navbar(props) {
    const [line, setline] = useState();
    useEffect(() => {

        setline(props.page)
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light  py-0  border-bottom fixed-top  ">
                <div className="container px-4 px-md-4 px-lg-5">
                    <a className="navbar-brand pull-right " href="/">
                        <img src={logo} className='img-fluid col-6 col-md-10 col-lg-12' alt='logo' />
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon border-0"></span>
                    </button>
                    <div className="collapse navbar-collapse py-4" id="navbarSupportedContent">
                        <ul className="navbar-nav  ms-auto gap-4">
                            <li className="nav-item">
                                <a className={line === 1 ? "nav-link navtext navunderline" : "nav-link navtext"} href="../product">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className={line === 2 ? "nav-link navtext navunderline" : "nav-link navtext"} href="../aboutus">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className={line === 3 ? "nav-link navtext navunderline" : "nav-link navtext"} href="../resources/:id">Resources</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav  ms-auto gap-4">
                            {/* <button className='btn loginbutton px-4 rounded-1 disabled' >Login</button> */}
                            <button className='btn text-light px-4 rounded-1 bookademobtn'><a href='../bookademo' className='textdecoration'>Book a Demo</a></button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar