import React, { useState } from 'react';
import transologo from '../../assests/transologo.svg';
import { TfiLocationPin } from 'react-icons/tfi';
import { BsTelephone } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import Contactus from '../Contactus/Contactus';


function Footer() {
    const [email, setEmail] = useState('');
    const [disable, setDisable] = useState(false);
    const [inputinvalid,setInputinvalid] = useState(false)
    const [modal, setModal] = useState(false);
    // const api = "https://script.google.com/macros/s/AKfycbyvZ1YGbovBkYtgthmme3__92TeWr7Ar7ncvb4i3zz1aq2Hyw8bQJJpVRlcMaiUfY7o/exec";
    const api ="https://script.google.com/macros/s/AKfycbyw8mxl4YJnhVnB4u-RHKTtkv_IGgaZbXnr1SoMdBMTdIXRDqNLEax3O4wyJmQ1w24rLg/exec"

const closeModal = ()=>{
    setModal(false)

}
    const onSubmit = () => {
        let mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (email.match(mailformat) || !email === '') {
            setDisable(true);
            let data = new FormData();
            data.append('Email', email);
            fetch(api, { method: 'POST', body: data })
                .then(res => {
                    setEmail('');
                    setDisable(false);
                    setInputinvalid(false)
                    setModal(true);
                })
                .catch(err => {
                    console.log(err);
                    setDisable(false);
                })
        } else {
            setInputinvalid(true)
        }
    }
    return (
        <>
        <Contactus openModal={modal} closeModal={closeModal}/>
            <div className='overflow'>
                <div className='backimg '>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-6'>
                                <div className='row'>
                                    <div className='col p-lg-5 p-md-5 p-4 mt-lg-5 mt-3'>
                                        <p className='mb-4 h1 text-lg-start text-md-center text-center text-light talk-text'><b>Talk to us!</b></p>
                                        <div className='row'>
                                            <div className='col mb-lg-4 mb-md-4 text-light'>
                                                <input type='email' placeholder='Your email' name='Email' value={email} disabled={disable} onChange={(e) => { setEmail(e.target.value) }}
                                                    className={inputinvalid ? 'form-control rounded-1 footinput border border-3 border-danger fw-bolder p-lg-3 p-md-3 talk-text' : 'form-control rounded-1 footinput border border-2 border-light fw-bolder p-lg-3 p-md-3 talk-text'} />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className=' text-light pt-3 pt-md-0 pt-lg-0'>
                                                <button disabled={disable}  className='btn btn-light rounded-1 col-12 col-lg-4 p-lg-3 p-md-3 border-none BlogsandWhitepapers talk-text' onClick={() => { onSubmit() }}><b>Contact Us</b></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='col-10'>
                            <p className='mb-2 h3 text-light'><b>Talk to us!</b></p>
                            <form>
                                <div className='row d-flex'>
                                    <div className='col-10 col-md-8 col-lg-6'>
                                        <div className='row '>
                                            <div className='col-12  text-light'>
                                                <input type='email' placeholder='Your email ' className='form-control rounded-1 footinput border border-2 border-light text-light' />
                                            </div>
                                            <div className='col-12 text-light pt-3 pt-md-0 pt-lg-0'>
                                                <button className='btn btn-light rounded-1 col-12'>Contact Us</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div> */}
                        </div>
                    </div>
                </div>
                <div className='bg-color'>
                    <div className='container py-5 px-2'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-11 p-2 p-lg-5 p-md-4'>
                                <div className='row'>
                                    <div className='col-12 col-md-4 col-lg-4 border-end'>
                                        <a className="navbar-brand pull-right " href="/">
                                            <img src={transologo} className='img-fluid d-flex col-6' alt='transologo' />
                                        </a>
                                    </div>
                                    <div className='col-12 col-md-4 col-lg-4 px-3 px-md-4 px-lg-5 border-end'>
                                        <div className='row mt-lg-0 mt-md-0 mt-4'>
                                            <a className='text-decoration-none' href='../Product'>
                                                <p className='col-4 col-md-12 col-lg-12 text-light footernavtext talk-text'> <a>Product</a></p>
                                            </a>
                                            <a className='text-decoration-none' href='../Aboutus'>
                                                <p className='col-4 col-md-12 col-lg-12 text-light footernavtext talk-text'> <a>About Us</a></p>
                                            </a>
                                            <a className='text-decoration-none' href='../Resources/:id'>
                                                <p className='col-4 col-md-12 col-lg-12 text-light footernavtext talk-text'> <a>Resources</a></p>
                                            </a>
                                            <a className='text-decoration-none' href='../Bookademo'>
                                                <p className='col-6 col-md-12 col-lg-12 footerbookademo talk-text'> <a>Book a Demo</a></p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='container d-block d-sm-block d-md-none d-lg-none'>
                                        <div className='row'>
                                            <div className='col'><hr className='border border-light' /></div>
                                        </div>
                                    </div>

                                    <div className='col-12 col-md-4 col-lg-4 px-3 px-lg-5 px-md-4'>
                                        <div className='row'>
                                            <div className='col-2'><TfiLocationPin color='white' /></div>
                                            <div className='col'>
                                                <p className='text-light talk-text '><a>#161, 2nd Floor,
                                                    Above Reliance Trends,
                                                    Basavanagar Main Road
                                                    Vignan Nagar, Bengaluru,
                                                    Karnataka 560037</a></p>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-2'><BsTelephone color='white' /></div>
                                            <div className='col'>
                                                <p className='text-light talk-text'>095913 75909</p>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-2'><TfiEmail color='white' /></div>
                                            <div className='col'>
                                                <p><a href="mailto:info@transo.in?" className='text-light text-decoration-none talk-text'>info@transo.in</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
