import React from 'react';
import { useState } from 'react';
import Navbar from '../../containers/Navbar/navbar'
import last from '../../assests/subpage/Lastmile Profitability.jpg'
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
                    <p className='heading2 text-light text-center mt-lg-5 pt-lg-4 mt-md-4 pt-md-4 pt-5 m-0'>Profitability of last </p>
                    <p className='side-heading2 text-light text-center'> mile delivery</p>
                    <div className='row'>
                        <div className='col'>
                            <img src={last} className='img-fluid col-lg-7 col-7 justify-content-center subpage6 d-none d-sm-none d-md-flex d-lg-flex mx-auto' alt='information' />
                            <img src={last} className='img-fluid col-lg-7 col-7 justify-content-center subpage-6 d-block d-sm-block d-md-none d-lg-none' alt='information' />
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
                                    <p className='para fw-bold fs-5'>Varsha L,</p>
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
                                        <i>For manufacturing and distribution businesses, the costs for last mile deliveries are substantial, comprising
                                            more than 50% of the overall shipping costs. With the concept of “free shipping” found everywhere and
                                            the customers less willing to foot a delivery fee, the distributors, retailers and logistics partners have to
                                            shoulder the cost of shipping. With such a scenario, implementing new technologies and driving process
                                            improvements to reduce costs has become a pressing need across distribution and sales channels.</i>
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>Last mile delivery costs</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        <ul>
                                            <li>Optimizing the last mile delivery is crucial. </li>
                                            <li>The challenge for warehouse managers is to
                                                maximise the delivery efficiency through good
                                                organization of transport operations.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>Parcel delivery is outsourced to
                                        service providers</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        <ul>
                                            <li>Multiple touch points breeds communication
                                                complexity.</li>
                                            <li>Consignor jumps between browser windows
                                                to track shipments.</li>
                                            <li>No Real-time ETA to consignee.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>What needs to be done? </b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        <ul>
                                            <li>Automate the processes with a digital logistics
                                                tool.</li>
                                            <li>Open up the shipment related information to
                                                all stakeholders with near real-time data.</li>
                                            <li>Adopt artificial intelligence within the systems
                                                and reduce human intervention.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>The ECO-Router </b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        Based on shipment data, considering load
                                        consolidation and operational / consignee constraints,
                                        TRANSO will recommend the optimal vehicle and
                                        route for the given shipment data set.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>Other TRANSO Features</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        <ul>
                                            <li>Unified Data Dashboard, Web and Mobile Apps for anytime anywhere operations.</li>
                                            <li>AI based booking integrated with commercials.</li>
                                            <li>Digital trip sheet and documents</li>
                                            <li>Driver App with dynamic route navigation.</li>
                                            <li>Consignee Tracking via WhatsApp / SMS</li>
                                            <li>Business insights and reports.</li>
                                            <li>SAAS Platform.</li>
                                        </ul>
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        At TRANSO, we believe in improving customer
                                        experiences, and ultimately creating more value. Talk
                                        to us today and find the easiest way to reduce logistics
                                        costs
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
                                            <p className='para2 m-0'><b>Varsha L,</b></p>
                                            <p className='para'>Transo Team</p>

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
