import React from 'react';
import { useState } from 'react';
import Navbar from '../../containers/Navbar/navbar'
import logic from '../../assests/subpage/Covid.png'
import avatar from '../../assests/Avatar.svg';
import Footer from '../Footer/Footer';
import { useNavigate } from "react-router-dom";

function Subpage(subprops) {
    const [btn, setBtn] = useState(1);
    const navigation = useNavigate()
    const select = (e) => {
        const val = e.target.value;
        if (val === 'Blogs') {
            setBtn(1);
        }
        else if (val === 'Case Studies') {
            setBtn(2);
        }
        else if (val === 'Whitepapers') {
            setBtn(3);
        }
    }
    return (
        <>
            <Navbar />
            <div className='mt-lg-5 mt-md-5 mt-2'>
                <div className='container-fluid bgcolor position-relative '>
                    <div className=' d-block d-sm-block d-md-none d-lg-none pt-5'>
                        <div className='row  justify-content-center'>
                            <div className='col-10 mt-3'>
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example" onChange={(e) => { select(e) }}>
                                    {/* <option selected>Blogs</option> */}
                                    <option selected>Blogs</option>
                                    <option>Case Studies</option>
                                    <option>Whitepapers</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='container  d-none d-sm-none d-md-block d-lg-block'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-8'>
                                <div className='row gap-4 mt-lg-5 pt-lg-5 mt-md-5 pt-md-3'>
                                    <div className='col-12 col-lg-3 col-md-2 '>
                                        <button className={btn === 1 ? 'btn text-light px-lg-4 px-md-2 rounded-1 btn-blog col-12 ' : 'btn text-light px-lg-4 px-md-2 rounded-1 btn-blog col-12 opacity-50'} onClick={() => { setBtn(1); navigation(`/resources/${1}`) }}>Blogs</button>
                                    </div>
                                    <div className='col-12 col-lg-4 col-md-4'>
                                        <button className={btn === 2 ? 'btn text-light px-lg-4 px-md-3 rounded-1 btn-blog col-12 disabled' : 'btn text-light px-lg-4 px-md-3 rounded-1 btn-blog col-12 opacity-50 disabled'} onClick={() => { setBtn(2); navigation(`/resources/${2}`) }}>Case Studies</button>
                                    </div>
                                    <div className='col-12 col-lg-4 col-md-4'>
                                        <button className={btn === 3 ? 'btn text-light px-lg-4 px-md-4 rounded-1 btn-blog col-12 disabled' : 'btn text-light px-lg-4 px-md-4 rounded-1 btn-blog col-12 opacity-50 disabled'} onClick={() => { setBtn(3); navigation(`/resources/${3}`) }}>Whitepapers</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='heading2 text-light text-center mt-lg-5 pt-lg-4 mt-md-4 pt-md-4 pt-5 m-0'>Logistics success during</p>
                    <p className='side-heading2 text-light text-center'> COVID-19 Pandemic</p>
                    <div className='row'>
                        <div className='col'>
                            <img src={logic} className='img-fluid col-lg-7 col-7 justify-content-center subpage3 d-none d-sm-none d-md-flex d-lg-flex mx-auto' alt='information' />
                            <img src={logic} className='img-fluid col-lg-7 col-7 justify-content-center subpage-3 d-block d-sm-block d-md-none d-lg-none' alt='information' />
                        </div>
                    </div>

                </div>
                <br />

                <div className='container d-none d-sm-none d-md-block d-lg-block'>
                    <div className='row justify-content-center mt-lg-5 pt-lg-5 mt-md-5 pt-md-5'>
                        <div className='col-8 col-lg-8 col-md-8'>
                            <div className='row'>
                                {/* <div className='col-12 col-lg-2 col-md-2  mt-lg-4 pt-lg-5  '>
                                    <img src={avatar} className='img-fluid m-0 col-8' alt='avatar' />
                                </div> */}
                                <div className='col-12 col-lg-4 col-md-4 mx-3 mt-lg-5 mt-md-3 p-0 pt-lg-5'>
                                    <p className='para fw-bold fs-5'>Srikanth M,</p>
                                </div>
                                {/* <div className='col-12 col-lg-1 col-md-1 mt-lg-5 mt-md-3 p-0 text-center pt-lg-5'>
                                    <div class="vr"></div>
                                </div>
                                <div className='col-12 col-lg-3 col-md-3 mt-lg-5 mt-md-3 p-0 pt-lg-5'>
                                    <p className='para fw-bold'>25 December 2019</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <br className='d-block d-sm-block d-md-none d-lg-none' />
                <br className='d-block d-sm-block d-md-none d-lg-none' />
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-10 col-lg-8 col-md-8'>
                            <div className='row'>
                                <div className='col'>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        <i>
                                            It’s been a tough time from March 2020 all through this year for every individual and every industry across the globe, more
                                            so with the logistics functions that form the lifeline for the world to function. COVID-19 was a surprise package that has hit
                                            us hard and it is also regarded as the worst disasters of the 21st
                                            century. With all the confusion and management complexities
                                            that the pandemic has created for governments and organisations worldwide, the human race is trying to cope and come
                                            out as a winner in the fight against the pandemic. COVID-19 has brought about a change in the way we look at life and
                                            situations. Organisations, especially manufacturing and distribution companies are restructuring and modifying their work
                                            cultures and logistics functions to continue production and ensuring that the deliveries are unhindered.
                                        </i>
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>THE WHAT?</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        It is a given that logistics functions are dependent heavily
                                        on manpower to complete the activities end to end. While
                                        this was running well during pre-COVID-19 times, the
                                        current situation with the pandemic being literally
                                        everywhere, infecting people in large scale and causing
                                        disruptions in supply chains demands that organisations
                                        think about the ways to reduce human touch points across
                                        the transactions. It is time for organisations to rethink and
                                        build their business strategies and functions around
                                        adoption of the latest technologies which offer contactless
                                        options like managing and monitoring jobs remotely by
                                        automating the logistics fulfilment process flows and
                                        digitisation of documents to reduce infections and creating
                                        a safe work environment.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>THE HOW? </b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        One of the factors that can contribute to logistics success
                                        during the pandemic would be to achieve reduction in
                                        human touch points in the logistics functions by embracing
                                        newer technologies or by improving the existing ERP /
                                        TMS functionalities with additional software integrations
                                        that provide;
                                    </p>
                                    <ul>
                                        <li>Automated shipment planning and dispatch</li>
                                        <li>Efficient asset utilisation</li>
                                        <li>End to end document digitisation</li>
                                        <li>Event alerts, confirmations and documents visibility to the stakeholders</li>
                                        <li>Live tracking with predictive alerts</li>
                                        <li>What’s arriving information</li>
                                        <li>Safe pickup and delivery mechanisms for drivers</li>
                                        <li>Online bill submissions and payments</li>
                                        <li>BI and Reporting</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>THE WHEN?</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        What better time than now to bring in the change? Yes, it
                                        is now. Companies need to realise that by bringing in the
                                        right organizational change, be it in technology or the
                                        thought process to accept change, it can bring in immense
                                        benefits. It is also important that change management may
                                        need to be put on the fast track with a buy in from all the
                                        stakeholders of the different logistics functions. It cannot
                                        be left unattended for long. Organisational plans have to
                                        adapt quickly to bring in the required improvements in the
                                        functions and the people. The change has to be planned
                                        and driven as a wholesome approach rather than in bits
                                        and pieces. While it is also important to note that the
                                        adoption of newer systems have to be a step by step
                                        process, starting at one function and then scaling it up
                                        across the logistics value chain.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>THE RESULT?</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        Digital empowerment will become the driver for human
                                        safety and an enabler for businesses to thrive and succeed
                                        during and post the pandemic. With implementation of
                                        the right automation and optimisation technologies, supply
                                        chains become better and efficient with lesser
                                        requirements for human interventions thereby reducing
                                        health risks while keeping the business responsiveness
                                        intact. With the availability of transactional documents
                                        online in digital form and on-demand, vendor payments
                                        can be processed faster that can help them in managing
                                        their working capital cycles while inducing them to provide
                                        better quality of service.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        Digitisation and automation technologies are one of the
                                        means to achieve logistics success during and post
                                        COVID-19 pandemic. TRANSO can get you there. Talk
                                        to us today.
                                    </p>
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className=''>
                                    <hr />
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-12 col-md-12 col-lg-12'>
                                    <div className='row'>
                                        {/* <div className='col-1 p-0'>
                                            <img src={avatar} alt='avatar' className='img-fluid col-12' />
                                        </div> */}
                                        <div className='col-11'>
                                            <p className='para m-0 opacity-25'>written by</p>
                                            <p className='para2 m-0'><b>Srikanth M,</b></p>
                                            <p className='para'>Co-Founder</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col p-0'>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Subpage;
