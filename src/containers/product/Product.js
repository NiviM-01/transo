import React from 'react';
import Navbar from '../Navbar/navbar';
import unified from '../../assests/product/unified.png'
import logistics from '../../assests/product/logistics.png'
import dashboard from '../../assests/product/dashboard.svg'
import intelligent from '../../assests/product/intelligent.svg'
import embedded from '../../assests/product/embedded.svg'
import seemless from '../../assests/product/seemless.png'
import deliver from '../../assests/product/deliver.svg'
import shipment from '../../assests/product/shipment.svg'
import mobileweb from '../../assests/product/mobile&web.svg'
import analytics from '../../assests/product/responsive.png'
import business from '../../assests/product/business.svg'
import reporting from '../../assests/product/reporting.svg'
import trip from '../../assests/product/trip.svg'
import Footer from '../Footer/Footer';

function Product() {
    return (
        <>
            <Navbar page={1}/>
            <div className='container-fluid bg-img mt-lg-5 mt-md-5 mt-4 pt-lg-5 pt-md-5'>
                <p className='text-center pt-lg-5 py-lg-3 pt-md-3 head-text fw-light d-none d-sm-none d-md-block d-lg-block'>
                    A Unified Super App<br />
                    Experience Powered by <span className='ai'>AI/ML</span>
                </p>
                <p className='mx-4 pt-lg-5 py-lg-3 head-text fw-light pt-5 d-block d-sm-block d-md-none d-lg-none'>
                    A Unified Super App<br />
                    Experience Powered by<br /> <span className='ai'>AI/ML</span>
                </p>
                <p className='text-center text-light head-para d-none d-sm-none d-md-block d-lg-block'>
                    Tackle logistics management with real-time<br /> digitisation and automation.
                </p>
                <p className=' mx-4 text-light head-para d-block d-sm-block d-md-none d-lg-none'>
                    Tackle logistics management with real-time<br /> digitisation and automation.
                </p>
                <br />
                <img src={unified} className='img-fluid d-flex mx-lg-auto' alt='unified' width='1000px' />
            </div>
            <div className='container my-lg-5 pt-lg-5 mt-3 '>
                <div className='row'>
                    <div className='col-12 col-lg-6 col-md-12'>
                        <p className='text-center heading d-none d-sm-none d-md-none d-lg-block'>
                            A Data-driven <br />approach to logistics
                        </p>
                        <p className=' text-center heading d-block d-sm-block d-md-block d-lg-none'>
                            A Data-driven <br />approach to logistics
                        </p>
                    </div>
                    <div className='col-12 col-lg-6 col-md-12 mt-lg-5 d-none d-sm-none d-md-none d-lg-block'>
                        <div className='row'>
                            <div className='col-12 col-md-12 col-lg-3  mt-lg-2 p-0'>
                                <img src={dashboard} className='img-fluid icon d-flex mx-lg-auto mx-2' alt='dashboard' width='40%' />
                            </div>
                            <div className='col-12 col-md-12 col-lg-9 p-lg-0 p-2 m-0'>
                                <p className='m-0 side-heading'><b>Unified Data Dashboard</b></p>
                                <p className='para col-md-12'>View and manage shipments from different service providers on a single dashboard.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <img src={logistics} className='img-fluid d-flex mx-sm-auto col-lg-9 col-md-8' alt='logistics' />
                    </div>
                    <div className='col-12 col-lg-6 col-md-12 mt-lg-5 mt-5 d-block d-sm-block d-md-block d-lg-none'>
                        <div className='row'>
                            <div className='col-12 col-md-12 col-lg-3  mt-lg-2 p-0'>
                                <img src={dashboard} className='img-fluid icon d-flex mx-lg-auto mx-2' alt='dashboard' width='40%' />
                            </div>
                            <div className='col-12 col-md-12 col-lg-9 p-lg-0 p-2'>
                                <p className='m-0 side-heading'><b>Unified Data Dashboard</b></p>
                                <p className='para col-md-12'>View and manage shipments from different service providers on a single dashboard.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6 mt-lg-5 mt-md-4 mt-2'>
                        <div className='row'>
                            <div className='col-12 col-md-12 col-lg-3  mt-lg-2 p-0'>
                                <img src={intelligent} className='img-fluid icon d-flex mx-lg-auto mx-2' alt='dashboard' width='40%' />
                            </div>
                            <div className='col-12 col-md-12 col-lg-9 p-lg-0 p-2'>
                                <p className='m-0 side-heading'><b>Intelligent Shipment Planning</b></p>
                                <p className='para col-md-12'>Streamline and automate your shipment planning across diverse transport modes with eco-router.</p>
                            </div>
                        </div>
                        <div className='row mt-lg-5 mt-md-4'>
                            <div className='col-12 col-md-12 col-lg-3  mt-lg-2 p-0'>
                                <img src={embedded} className='img-fluid icon d-flex mx-lg-auto mx-2' alt='dashboard' width='40%' />
                            </div>
                            <div className='col-12 col-md-12 col-lg-9 p-lg-0 p-2'>
                                <p className='m-0 side-heading'><b>Embedded Carbon Intelligence</b></p>
                                <p className='para col-md-12'>Meet environmental regulations for freight logistics by providing near real-time carbon reporting and emission reporting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>

            {/*seemless*/}
            <div className='container  my-lg-5 pt-lg-5  mt-3 '>  
                <div className='row'>
                    <div className='col-12 col-lg-6 col-md-12 mt-lg-5 d-none d-sm-none d-md-none d-lg-block'>
                        <div className='row'>
                            <div className='col-12 col-md-12 col-lg-3  mt-lg-2'>
                                <img src={deliver} className='img-fluid icon d-flex mx-lg-auto mx-2' alt='dashboard' width='50%' />
                            </div>
                            <div className='col-12 col-md-12 col-lg-9 p-lg-0 p-2'>
                                <p className='m-0 side-heading'><b>Delivery & Dispatch Planning </b></p>
                                <p className='para col-md-12'>Achieve increased efficiency and higher on-time delivery rates, through optimized route planning.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-md-12 m-0'>
                        <p className='heading text-center d-none d-sm-none d-md-none d-lg-block'>
                        Seamless Management,<br/>  at your fingertips
                        </p>
                        <p className=' text-center heading d-block d-sm-block d-md-block d-lg-none'>
                        Seamless Management,<br/> at your fingertips
                        </p>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6 d-block d-sm-block d-md-block d-lg-none'>
                        <img src={seemless} className='img-fluid d-flex mx-sm-auto col-lg-9 col-md-8' alt='logistics' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-lg-6 col-md-12 mt-lg-5 mt-5 d-block d-sm-block d-md-block d-lg-none'>
                        <div className='row'>
                            <div className='col-12 col-md-12 col-lg-3 mt-lg-2'>
                                <img src={deliver} className='img-fluid icon d-flex mx-lg-auto mx-2' alt='dashboard' width='50%' />
                            </div>
                            <div className='col-12 col-md-12 col-lg-9 p-lg-0 p-2'>
                                <p className='m-0 side-heading'><b>Delivery & Dispatch Planning </b></p>
                                <p className='para col-md-12'>Achieve increased efficiency and higher on-time delivery rates, through optimized route planning.</p>
                            </div>
                        </div>
                    </div> 
                    <div className='col-12 col-md-12 col-lg-6 mt-lg-5 mt-md-4 mt-2'>
                        <div className='row'>
                            <div className='col-12 col-md-12 col-lg-3 mt-lg-2'>
                                <img src={shipment} className='img-fluid icon d-flex mx-lg-auto mx-2' alt='dashboard' width='50%' />
                            </div>
                            <div className='col-12 col-md-12 col-lg-9 p-lg-0 p-2'>
                                <p className='m-0 side-heading'><b>Shipment Tracking</b></p>
                                <p className='para col-md-12'>Empower all stakeholders with near real-time tracking visibility and deviation alerts, throughout the journey.</p>
                            </div>
                        </div>
                        <div className='row mt-lg-5 mt-md-4'>
                            <div className='col-12 col-md-12 col-lg-3  mt-lg-2'>
                                <img src={mobileweb} className='img-fluid icon d-flex mx-lg-auto mx-2' alt='dashboard' width='50%' />
                            </div>
                            <div className='col-12 col-md-12 col-lg-9 p-lg-0 p-2'>
                                <p className='m-0 side-heading'><b>Mobile and Web Application</b></p>
                                <p className='para col-md-12'>Enhance usability by seamlessly accessing a unified system across both mobile and web platforms.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6 d-none d-sm-none d-md-none d-lg-block'>
                        <img src={seemless} className='img-fluid d-flex mx-sm-auto col-lg-10 col-md-10' alt='logistics' />
                    </div>
                </div>
            </div>
            <br/>

            {/*analytics */}
            <div className='container  my-lg-5 py-lg-5 mt-3 '>
                <div className='row'>
                    <div className='col-12 col-lg-6 col-md-12'>
                        <p className='text-center heading d-none d-sm-none d-md-none d-lg-block'>
                        Responsive Analytics
                        </p>
                        <p className=' text-center heading d-block d-sm-block d-md-block d-lg-none'>
                        Responsive Analytics
                        </p>
                    </div>
                    <div className='col-12 col-lg-6 col-md-12 mt-lg-4 d-none d-sm-none d-md-none d-lg-block'>
                        <div className='row'>
                            <div className='col-12 col-md-12 col-lg-3  mt-lg-2 p-0'>
                                <img src={reporting} className='img-fluid icon d-flex mx-lg-auto mx-2' alt='dashboard' width='40%' />
                            </div>
                            <div className='col-12 col-md-12 col-lg-9 p-lg-0 p-2 m-0'>
                                <p className='m-0 side-heading'><b>Reporting & Business Intelligence</b></p>
                                <p className='para col-md-12'>Leverage analytics with SLA tracking and KPI-based reporting to elevate  business performance and drive actionable insights.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <img src={analytics} className='img-fluid d-flex mx-sm-auto col-lg-9 col-md-8' alt='logistics' />
                    </div>
                    <div className='col-12 col-lg-6 col-md-12 mt-lg-5 mt-5 d-block d-sm-block d-md-block d-lg-none'>
                        <div className='row'>
                            <div className='col-12 col-md-12 col-lg-3  mt-lg-2 p-0'>
                                <img src={reporting} className='img-fluid icon d-flex mx-lg-auto mx-2' alt='dashboard' width='40%' />
                            </div>
                            <div className='col-12 col-md-12 col-lg-9 p-lg-0 p-2'>
                                <p className='m-0 side-heading'><b>Reporting & Business Intelligence</b></p>
                                <p className='para col-md-12'>Leverage analytics with SLA tracking and KPI-based reporting to elevate  business performance and drive actionable insights.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6 mt-lg-5 mt-md-4 mt-2'>
                        <div className='row'>
                            <div className='col-12 col-md-12 col-lg-3  mt-lg-2 p-0'>
                                <img src={business} className='img-fluid icon d-flex mx-lg-auto mx-2' alt='dashboard' width='40%' />
                            </div>
                            <div className='col-12 col-md-12 col-lg-9 p-lg-0 p-2'>
                                <p className='m-0 side-heading'><b>Business Performance Visibility</b></p>
                                <p className='para col-md-12'>Unlock the full potential of your operations and track performance in near real-time through enhanced collaboration and visibility.</p>
                            </div>
                        </div>
                        <div className='row mt-lg-5 mt-md-4'>
                            <div className='col-12 col-md-12 col-lg-3  mt-lg-2 p-0'>
                                <img src={trip} className='img-fluid icon d-flex mx-lg-auto mx-2' alt='dashboard' width='40%' />
                            </div>
                            <div className='col-12 col-md-12 col-lg-9 p-lg-0 p-2'>
                                <p className='m-0 side-heading'><b>Trip and Performance Reports</b></p>
                                <p className='para col-md-12'>Gain access to KPI, performance and expense reports using a rating system to identify areas of improvement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid mt-lg-5 pt-lg-5 mt-md-4 pt-md-4 mt-3 pt-3'>
                <div className='row'>
                    <div className='col p-0'>
                    <Footer page={1}/>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Product;
