import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/navbar'
import covid from '../../assests/resources/coivd.png'
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
                    <p className='heading2 text-light text-center mt-lg-5 pt-lg-4 mt-md-4 pt-md-4 pt-5 m-0'>Shipments In-Transit information </p>
                    <p className='side-heading2 text-light text-center'> Critical to logistics efficiency</p>
                    <div className='row'>
                        <div className='col'>
                            <img src={covid} className='img-fluid col-lg-7 col-7 justify-content-center subpage2 d-none d-sm-none d-md-flex d-lg-flex mx-auto' alt='information' />
                            <img src={covid} className='img-fluid col-lg-4 col-7 justify-content-center subpage-2 d-block d-sm-block d-md-none d-lg-none' alt='information' />
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
                                            Where exactly are the shipments in-transit? When do they arrive? Are they on time? Who will receive the
                                            goods? What is arriving? How many trucks are arriving? Do I have enough space at the warehouse? What
                                            equipment and manpower do I need to load and unload the goods? How do I bring down the administration
                                            costs related to manual coordination and data entry? Is my business data protected?
                                        </i>
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        These and many more questions remain a challenge
                                        for logistics teams across the industry, more so
                                        relevant in the e-com and distribution sectors.
                                        Logistics today is all about information availability
                                        leading to efficient dispatches and deliveries. With
                                        largescale penetration and acceptability of online
                                        shopping, well planned dispatch and deliveries are
                                        critical to service the needs of the buyer, on time,
                                        every time.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>The Inefficiencies</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        “Package has left the facility, package has arrived at
                                        the facility, out for delivery”. This kind of
                                        information does not seem to make enough sense to
                                        the end users in this age of technological innovations
                                        and expectations of near real-time information.
                                        Surprisingly, even the large e-com and distribution
                                        players still plan and work around time based
                                        deliveries for trucks with stringent SLA’s, putting the
                                        drivers under tremendous stress. A no show at the
                                        designated time by the trucks would mean longer wait
                                        times for the trucks to load / unload, affecting the
                                        warehouse efficiency. Largely, the trucks meet the
                                        deadlines set. However, there are quite a number of
                                        instances wherein there are delayed arrivals and the
                                        trucks are stranded for want of unloading bays at the
                                        destination warehouses leading to trucks lying idle
                                        with the load and nowhere to go. This can have a
                                        significant effect on efficiency and losses, both for the
                                        customers and the truckers.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>GPS trackers are PASSE</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        Implementation of intelligent location based
                                        technologies that provide near real-time in-transit
                                        information for shipments can largely improve the e-com & distribution logistics systems by providing the
                                        right set of information to the relevant stakeholders
                                        on time that can enable better logistics planning.
                                        Smartphone based location intelligence systems are
                                        gaining ground with their business value justified in
                                        terms of investment and maintenance when
                                        compared to portable / fixed GPS trackers. Portable
                                        GPS trackers involve operational costs for every trip
                                        while the fixed GPS trackers are not open to
                                        provide information to all the stakeholders as
                                        desired. The truckers do not expose their GPS
                                        tracker credentials to an outside user due to the
                                        underlying technology limitation and for privacy
                                        reasons. Hence, the data entry is mostly manual and
                                        prone to errors creeping in. With limited availability
                                        of automated in-transit data about shipments, it is
                                        also a challenging task to keep the systems and users
                                        updated with near real-time information. Moreover,
                                        unmanaged GPS trackers at the trucker end can
                                        prove to be the weakest link when it comes to data
                                        privacy and protection for a business.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>Achieving the NEXT</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        While there are a lot of thoughts on what may be
                                        the right technology approach to deriving value at
                                        every step in the logistics processes, ease of use, near
                                        real-time information availability, transparency and
                                        operational costs will decide the future of shipment
                                        tracking and tracing. By enforcing technology
                                        discipline on the truckers and drivers, it is possible
                                        to achieve cost optimization and the desired results
                                        with just a smartphone rather than depending on a
                                        tightly bound GPS tracking hardware device.
                                        Largescale penetration and usage of smartphones
                                        among the trucking fraternity is a positive outlook
                                        for bringing in the necessary change.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                    TRANSO can get you there. Talk to us today
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
