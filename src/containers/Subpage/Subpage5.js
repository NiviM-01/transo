import React from 'react';
import { useState } from 'react';
import Navbar from '../../containers/Navbar/navbar'
import efficiency from '../../assests/subpage/Efficiency.jpg'
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
                    <p className='heading2 text-light text-center mt-lg-5 pt-lg-4 mt-md-4 pt-md-4 pt-5 m-0'>Improving last mile delivery</p>
                    <p className='side-heading2 text-light text-center'> efficiency with Intelligence</p>
                    <div className='row'>
                        <div className='col'>
                            <img src={efficiency} className='img-fluid col-lg-7 col-7 justify-content-center  subpage5 d-none d-sm-none d-md-flex d-lg-flex mx-auto' alt='information' />
                            <img src={efficiency} className='img-fluid col-lg-7 col-7 justify-content-center   subpage-5 d-block d-sm-block d-md-none d-lg-none' alt='information' />
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
                                <div className='col-12 col-lg-4 col-md-4 mx-3  mt-lg-5 mt-md-3 p-0 pt-lg-5'>
                                    <p className='para fw-bold fs-5'>Karthik Pawar,</p>
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
                                        At TRANSO, we understand that delivery efficiency is money in
                                        logistics business. Long delivery times or uninformed arrival times
                                        can make a huge difference in customer satisfaction.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        TRANSO helps enable seamless last-mile drop-offs. Organisations
                                        can now use TRANSO last-mile delivery intelligence to streamline
                                        the deliveries while being quick at the same time. Combined with
                                        the new HERE navigation experience to drivers, you have what it
                                        needs to meet the demanding delivery schedules.

                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b> Minimizing last-mile delivery errors with enhanced location context</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        For last-mile deliveries, organisations often rely on manual inputs to the drivers to orient them to the
                                        schedule of deliveries and leave the delivery routing to their best knowledge of the locations. It’s so
                                        much easier and quicker if they can be guided to the delivery points with the sequence of the drop-offs
                                        and the location addresses marked on a Map. With TRANSO, the drivers are provided with turn-by-turn
                                        navigation on a Mobile App to the delivery points. The complete delivery schedule is available on the
                                        App to the drivers, minimizing route errors and failed deliveries.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>TRANSO Eco-Router helps in faster, accurate and confirmed deliveries</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        The Eco-Router feature in TRANSO with the Load-Vehicle-Route
                                        algorithm reduces delivery complexities. We have worked with multiple
                                        customer use cases to identify the challenges unique to last-mile deliveries
                                        and have accordingly improved the intelligence.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        We identified that scheduling dispatches and providing an optimal trip sheet
                                        to drivers was one of the top challenges for organisations. In order to
                                        improve total delivery time and providing near real-time updates to end
                                        consumers, we have included the following solution features:
                                        <ul>
                                            <li>Digital trip sheet on App with optimal drop sequence.</li>
                                            <li>Drop wise map navigation to drivers, location address and receiver contact details.</li>
                                            <li>Arrival notifications with better location accuracy via here Maps.</li>
                                            <li>Auto trip end, manual trip end with OTP and PoD upload feature.</li>
                                            <li>Near real-time trip status updates to the users.</li>
                                            <li>Nearby points of interest data for refuelling and emergencies.</li>
                                        </ul>
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        With TRANSO, experience a significant improvement in delivery time per order. The platform is
                                        focussed on delivering logistics efficiency, enabling more deliveries per vehicle which translates to
                                        reduction in cost of goods sold while reducing the carbon footprint. With TRANSO, you can save time,
                                        improve customer experiences, and ultimately create more value
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
                                            <p className='para2 m-0'><b>Karthik Pawar,</b></p>
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
