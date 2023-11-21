import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/navbar'
import information from '../../assests/information.png'
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
                    <p className='heading2 text-light text-center mt-lg-5 pt-lg-4 mt-md-4 pt-md-4 pt-5 m-0'>TRANSO for Smart Logistics and Digital</p>
                    <p className='side-heading2 text-light text-center'> TRANSFORMATION</p>
                    <div className='row'>
                        <div className='col'>
                            <img src={information} className='img-fluid col-lg-7 col-7 justify-content-center  image d-none d-sm-none d-md-flex d-lg-flex mx-auto' alt='information' />
                            <img src={information} className='img-fluid col-lg-7 col-7 justify-content-center   image2 d-block d-sm-block d-md-none d-lg-none' alt='information' />
                        </div>
                    </div>

                </div>
                <br />

                <div className='container d-none d-sm-none d-md-block d-lg-block'>
                    <div className='row justify-content-center mt-lg-5 pt-lg-5 mt-md-5 pt-md-5'>
                        <div className='col-8 col-lg-8 col-md-8'>
                            <div className='row'>
                                {/* <div className='col-12  col-md-2  mt-lg-4 pt-lg-5  '>
                                    <img src={avatar} className='img-fluid m-0 col-8' alt='avatar' />
                                </div> */}
                                <div className='col-12 col-lg-4 col-md-4  mx-3 mt-lg-5 mt-md-3 p-0 pt-lg-5'>
                                    <p className='para fw-bold fs-5'>Srikanth M, </p>
                                </div>
                                {/* <div className='col-12 col-lg-1 col-md-1 mt-lg-5 mt-md-3 p-0 text-center pt-lg-5'>
                                    <div class="vr"></div>
                                </div> */}
                                {/* <div className='col-12 col-lg-3 col-md-3 mt-lg-5 mt-md-3 p-0 pt-lg-5'>
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
                                        We understand that logistics efficiency and visibility
                                        is paramount for organisations and hence we have
                                        created TRANSO, the intelligent SaaS application
                                        platform in collaboration with here Technologies
                                        to help organizations survive and thrive in the face
                                        of increasing digitalization, customer demand and
                                        global disruption.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        While long shipment processes and delivery times or
                                        uninformed arrival times can make a huge difference
                                        in customer satisfaction, the need today is to enable
                                        seamless first mile, line haul and last-mile drop-offs.
                                        With TRANSO, you have what it needs to meet the
                                        demanding delivery schedules.

                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        <i>
                                            Your organisation can now benefit by using the TRANSO Smart platform with built-in process automation,
                                            end to end visibility on a unified data dashboard, dispatch planning, trip booking, and delivery intelligence
                                            combined with route &load optimisation, document digitisation, real-time notifications and fleet
                                            management features to streamline your logistics operations and deliveries. TRANSO can integrate
                                            seamlessly and coexist with your existing GPS devices and ERP applications
                                        </i>
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>Minimizing last-mile delivery errors with enhanced location context for
                                        faster, accurate and confirmed deliveries</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        TRANSO Eco Router with the Load-Vehicle-Route algorithm reduces
                                        delivery complexities. We have worked with multiple customer use cases to
                                        identify the challenges unique to last-mile deliveries and have accordingly
                                        improved the intelligence.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        We identified that scheduling dispatches and providing an optimal trip sheet
                                        to drivers was one of the top challenges for organisations. In order to
                                        improve total delivery time and providing near real-time updates to end
                                        consumers, TRANSO is packaged with the following solution features:
                                    </p>
                                    <ul>
                                        <li>
                                            Driver App on a smartphone, powered by here Maps
                                        </li>
                                        <li>
                                            Digital trip sheet on App with optimal drop sequence.
                                        </li>
                                        <li>
                                            Drop wise map navigation to drivers, location address and receiver contact details.
                                        </li>
                                        <li>
                                            Arrival notifications with better location accuracy via here Maps.
                                        </li>
                                        <li>
                                            Auto trip end, manual trip end with OTP and PoD upload feature.
                                        </li>
                                        <li>
                                            Near real-time trip status updates to the user and consignee.
                                        </li>
                                        <li>
                                            Nearby points of interest data on Driver App for refuelling and emergencies.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>Intelligent Physical Transport</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        TRANSO platform helps you manage your logistics by having all your carrier operations in one place.
                                        Gain a deeper understanding and end to end visibility of your vehicles, drivers and trips with TRANSO.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>Track and Trace</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        TRANSO makes it easy to track your fleet and shipments in near real-time with live location information,
                                        total distance travelled and route taken by the trucks along with stoppage details. Instead of having
                                        multiple log-ins for multiple GPS tracker dashboards, save time by using one log-in and navigate within a
                                        single app easily. TRANSO works with Mobile GPS, GPS Trackers and SIM based tracking while
                                        presenting you the required information on an easy to use unified interface.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>Automate and simplify safety, compliance and reporting</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        Verify authenticity of the vehicle and driver at the click of a button. Get notified for all truck and driver
                                        safety violations as they happen with the integrated violations module. Automatically get all the
                                        information around mandatory documents and safety compliance. Access existing fleet and driver
                                        documents on the application and receive automatic reminders when there is a maintenance renewal due.
                                        Analyze fleet and driver performance while the KPI reports provide actionable insights that help you
                                        improve efficiencies and profitability.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        TRANSO provides a significant improvement in delivery time per order. The platform is focussed on
                                        delivering logistics efficiency, enabling more deliveries per vehicle which translates to reduction in
                                        operational cost while also reducing the carbon footprint.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        <i>With TRANSO deliver more packages at a lower cost and serve your customers in a smarter, more agile way.</i>
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
