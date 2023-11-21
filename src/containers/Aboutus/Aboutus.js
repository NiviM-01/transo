import React from 'react';
import Navbar from '../Navbar/navbar';
import complex from '../../assests/aboutus/complex.svg'
import sustainbility from '../../assests/aboutus/sustainability.svg'
import team from '../../assests/aboutus/team.png'
import Footer from '../Footer/Footer';

function Aboutus() {
    return (
        <>
            <Navbar page={2} />
            <div className='container-fluid bg-img2 mt-lg-5 mt-md-5 mt-4'>
                <div className='row'>
                    <div className='col-12 col-lg-6 col-md-6 mt-lg-5 pt-lg-5 mt-md-5 pt-md-5 mt-5'>
                        <p className='heading mx-lg-5 px-lg-5 pt-lg-5 text-light'>Logistics is complex.<br /> Let us simplify it for you.</p>
                        <p className='para text-light mx-lg-5 px-lg-5'>
                            With close to a decade of experience, we understand the challenges you face in the last mile of delivery logistics. We specialize in this critical and complicated phase of your delivery journey, providing you with the right kind of intervention and expertise.
                        </p>
                    </div>
                    <div className='col-12 col-lg-6 col-md-6 mt-lg-5 pt-lg-5 mt-md-5 pt-md-5 mt-5 d-flex justify-content-end p-0'>
                        <img src={complex} className='img-fluid col-11 col-lg-10 col-md-12' alt='complex' />
                    </div>
                </div>
            </div>
            <div className='container mt-lg-5 pt-lg-5 mt-md-5 pt-md-5'>
                <div className='row'>
                    <div className='col-12 col-lg-5 col-md-6 p-0 d-none d-sm-none d-md-block d-lg-block'>
                        <p className='para2 ms-lg-5 ps-lg-5 ms-md-2'>
                            We aim to enhance the <br />automation and optimization <br />of logistics across the globe to <br />build customer satisfaction<br /> and business sustainability.
                        </p>
                    </div>
                    <div className='col-12 col-lg-6 col-md-6 p-0 d-block d-sm-block d-md-none d-lg-none mt-5'>
                        <p className='para2 ms-lg-5 ps-lg-5 text-center'>
                            We aim to enhance the automation and optimization of logistics<br /> across the globe to build<br /> customer satisfaction  and business sustainability.
                        </p>
                    </div>
                    <div className='col-12 col-lg-7 col-md-6 mt-md-6 d-flex justify-content-center'>
                        <img src={sustainbility} className='img-fluid col-lg-7 col-sm-9' alt='sustainbility' />
                    </div>
                </div>
            </div>
            <div className='container-fluid my-5'>
                <div className='row '>
                    <div className='col-12 col-md-12 col-lg-6 p-0'>
                        <div className='row justify-content-center mt-lg-5 pt-lg-5'>
                            <div className='col-11 col-md-11 col-lg-6'>
                                <p className='heading2'>Team</p>
                                <p className='para'>
                                    Our core team possesses extensive expertise in various industry sectors, with a strong focus on supply chain and logistics. Led by experienced leaders, our team is driven by a common goal: to revolutionize the industry.
                                    <br />
                                    <br />
                                    The advisory team brings a cumulative experience of over 200 years with former partners hailing from prominent consulting firms, Silicon Valley Angel Investors and CXOs.
                                </p>
                                <button className='btn rounded-1 fw-bold mt-lg-4 mt-md-3 mt-3 bookademo-btn col-6 col-lg-6 col-md-4' type='submit' >Work with Us</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-12 col-md-12 col-lg-6 p-0'>
                        <img src={team} className='img-fluid ' alt='team' />
                    </div>
                </div>
            </div>
            {/* <div className='container mt-5 d-none d-sm-none d-md-block d-lg-block'>
                <div className='row'>
                    <div className='col-lg-4 mt-lg-5 pt-lg-5 px-lg-5 mx-lg-5 mt-md-5'>
                        <p className='heading2  mt-5'>Team</p><br/>
                        <p className='para'>
                            Our core team possesses extensive expertise in various industry sectors, with a strong focus on supply chain and logistics. Led by experienced leaders, our team is driven by a common goal: to revolutionize the industry.
                            <br />
                            <br/>
                            The advisory team brings a cumulative experience of over 200 years with former partners hailing from prominent consulting firms, Silicon Valley Angel Investors and CXOs.
                        </p>
                        <button className='btn rounded-1 fw-bold mt-lg-4 mt-md-3 mt-3 bookademo-btn col-6 col-lg-5 col-md-4' type='submit' >Work with Us</button>
                    </div>
                    <div className='col-lg-6'>
                        <img src={team} className='img-fluid ' alt='team'/>
                    </div>
                </div>
            </div> */}
            {/* <div className='container-fluid bg-img4 mt-3 d-block d-sm-block d-md-none d-lg-none'>
                <div className='row'>
                    <div className='col-lg-6 mt-lg-5 pt-lg-5 px-lg-5 mx-lg-5'>
                        <p className='heading2 text-light mt-3'>Team</p>
                        <p className='para text-light'>
                            Our core team possesses extensive expertise in various industry sectors, with a strong focus on supply chain and logistics. Led by experienced leaders, our team is driven by a common goal: to revolutionize the industry.
                            <br />
                            The advisory team brings a cumulative experience of over 200 years with former partners hailing from prominent consulting firms, Silicon Valley Angel Investors and CXOs.
                        </p>
                        <button className='btn rounded-1 fw-bold mt-lg-4 mt-md-3 mt-3 bookademo-btn col-6 col-lg-5 col-md-4' type='submit' >Work with Us</button>
                    </div>
                </div>
            </div> */}
            <Footer  page={2}/>
        </>
    );
}

export default Aboutus;
