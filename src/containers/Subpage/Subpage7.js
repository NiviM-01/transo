import React from 'react';
import { useState } from 'react';
import Navbar from '../../containers/Navbar/navbar'
import gps from '../../assests/subpage/GPS.png'
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
                    <p className='heading2 text-light text-center mt-lg-5 pt-lg-4 mt-md-4 pt-md-4 pt-5 m-0'>The Use of GPS Data In</p>
                    <p className='side-heading2 text-light text-center'>Freight Logistics</p>
                    <div className='row'>
                        <div className='col'>
                            <img src={gps} className='img-fluid col-lg-7 col-7 justify-content-center  subpage6 d-none d-sm-none d-md-flex d-lg-flex mx-auto' alt='information' />
                            <img src={gps} className='img-fluid col-lg-7 col-7 justify-content-center   subpage-6 d-block d-sm-block d-md-none d-lg-none' alt='information' />
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
                                        This document analyzes the potential of GPS Data in freight truck data collection and real-time
                                        shipment tracking using TRANSO unified logistics data platform.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        This document analyzes the potential of GPS Data in freight truck data collection and real-time
                                        shipment tracking using TRANSO unified logistics data platform.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        During the course of algorithm development, exhaustive tests were made with multiple
                                        use case scenarios and the GPS errors (some inherent with GPS systems and some which got
                                        introduced as part of the solution development) were corrected for accuracy.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        Goods transportation has undergone a revolution since the 19th century. Horse-drawn carriages
                                        have given way to much better improved modes and have allowed for efficient transportation.
                                        Motorised commercial vehicles have become widespread, carrying freight of all kinds, while
                                        trucks have been instrumental in carrying heavy loads over long distances.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        At the same time, the widening supply chain has increased demand for freight truck movement
                                        by road in comparison to other modes of freight transportation. Freight truck bottle necks are
                                        evident in all modes of transportation. As logistics facilities, distribution centers and intermodal
                                        facilities spread throughout the nation, availing trucking services on time is a major issue.
                                        Truck availability data is a critical input for improving efficiency in meeting freight demand
                                        and supply.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        There are many methods which can be used to collect and match freight data and truck data
                                        from logistics and intermodal facilities. TRANSO provides detailed methods such as data about
                                        the trucks on trip and empty, estimated time for completion of trips, availability of a driver for
                                        a trip, contracted and marketplace truck options etc using both GPS Data and operational data.
                                        Innovative and real-time data sets that reflect live traffic conditions are used extensively to
                                        arrive at the trip end data so that the trucks can be further utilized for new freight requests.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        Over a period of time, the tracking algorithms on TRANSO have been enhanced and updated
                                        with event based data to ease the information requirement of the stakeholders for recording and
                                        notifying when an event occurs or for a scheduled or a futuristic event.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>GPS DATA CAPTURE</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        The methods to capture GPS Data in TRANSO can be
                                        generally divided into three categories: Cellular Network
                                        based, Cell Phone based and GPS tracking device based.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        Cellular Network based system uses location coordinates
                                        provided the cellular network base stations (signal towers) for
                                        the cell phone in use. However, the cell phone position can be
                                        generated only when the phone is active and connected to the
                                        service provider network. This method of location data
                                        collection works with an API integration with the individual
                                        cellular service providers or with a third party aggregator who
                                        provides data from multiple cellular service providers. The
                                        accuracy of location estimation for cellular network based
                                        positioning technology is about 50-300 meters and may vary
                                        with the amount of network congestion. Additional location
                                        error could be introduced when the users are automatically
                                        transferred by the network from the nearest cell phone signal
                                        tower to one farther away but less heavily congested.

                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        GPS tracking device based system uses GPS Data provided
                                        by the GPS tracker and the tracker position is available
                                        anytime locally on the device without dependency on any data
                                        network. However, the location data will be available for use
                                        and computation only when the data is transmitted to a central
                                        server, for which the GPS tracker has to be actively connected
                                        to the internet.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        In all of the above GPS data collection methods, the location
                                        data is collected continuously on a 5-30 second interval and
                                        recorded in the database. The travel time and the distance between two adjacent location data
                                        points are computed based on the collected data and plotted on a map (Google Maps / Here
                                        Maps) with precise coordinates and the route travelled is drawn on the map.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>APPLICATION OF GPS DATA IN FREIGHT LOGISTICS</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        Shipping goods is a complex process and is more than moving products from one place to
                                        another. As a business, when volumes increase, so does the associated risk and cost of moving
                                        goods. The process of shipment is often not smooth sailing and the difference between a
                                        shipment arriving on time and one that has delays can cost dearly with reference to the business
                                        transaction, customer satisfaction and profitability. With location data availability, logistics
                                        operations and trucking can be made more efficient while the response time from order
                                        placement to delivery can be drastically improved.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        With TRANSO, GPS Data can be applied and used across the logistics functions to deliver
                                        value to the entire process. A few examples are as below;
                                        <ul>
                                            <li>End to End logistics visibility </li>
                                            <li>Fleet management</li>
                                            <li>Load planning based on truck availability search</li>
                                            <li>Error free and accurate data about trucks in transit</li>
                                            <li>Maintaining truck arrival and departure records to improve dispatch efficiency</li>
                                            <li>Routing and navigation for delivery efficiency</li>
                                            <li>Process automation and resource optimisation</li>
                                            <li>Freight audit and transparency </li>
                                            <li>Safety and Security of the truck and driver</li>
                                            <li>Data driven decision making</li>
                                            <li>Points of Interest data for drivers on their smartphones</li>
                                            <li>Incident / violations monitoring and management</li>
                                            <li>Real- time data exchange with the consignee</li>
                                        </ul>
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
