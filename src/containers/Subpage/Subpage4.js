import React from 'react';
import { useState } from 'react';
import Navbar from '../../containers/Navbar/navbar'
import connect from '../../assests/subpage/Connected.jpg'
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
                    <p className='heading2 text-light text-center mt-lg-5 pt-lg-4 mt-md-4 pt-md-4 pt-5 m-0'>Connected Logistics</p>
                    <div className='row'>
                        <div className='col'>
                            <img src={connect} className='img-fluid col-lg-7 col-7 justify-content-center  subpage4 d-none d-sm-none d-md-flex d-lg-flex mx-auto' alt='information' />
                            <img src={connect} className='img-fluid col-lg-7 col-7 justify-content-center subpage-4 d-block d-sm-block d-md-none d-lg-none' alt='information' />
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
                                        <i>The trucking and logistics industry worldwide and especially in India has long been due for a technology overhaul for meeting the
                                            new age requirements of efficient, trusted, transparent and on-demand shipments. The interactions between the shipper and the
                                            transporter are mostly disconnected while the existing GPS tracker based vehicle tracking systems technology is more of a tracking
                                            only technology than anything else that would help drive business efficiency and profitability. The Indian trucking industry is
                                            predominant with the unorganized truckers who form a majority wherein the ownership ranges from 1 to 10 trucks and technology
                                            adoption among them is very low. Adding to this, middlemen and brokers command a substantial market share with not much of value
                                            addition to the system.
                                        </i>
                                        <br />
                                        <i>
                                            As we are experiencing, the world is moving towards on-demand App based systems for satisfying most of our daily needs. We are
                                            getting used to ordering a pizza, groceries or a cab from the convenience of a mobile App. The traditional way of sourcing things and
                                            movements are passé. Use of technology has made our lives easy with almost everything available at the click of a button on our
                                            mobile phones. Today, we have more time to spend with family, colleagues and friends, while our online orders are being processed
                                            remotely and are delivered at the requested time and place of our choice.

                                        </i>
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b> THE NEED TO CHANGE</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        In the goods transportation sector, trucks form a majority of
                                        the preferred mode of transportation by road. The road freight
                                        market in India is pegged at around USD 120+ Billion and is
                                        expected to grow to USD 300+ billion in the next couple of
                                        years. Also, the Road freight volumes and the number of
                                        commercial goods transportation vehicles are growing at a
                                        CAGR of 9 % and 10 %, respectively. With this kind of market
                                        capitalization, the said industry requires coining a new term –
                                        “Trucking Commerce” in line with “E-Commerce” and “M-Commerce”.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        To make good of the available opportunities, it will require
                                        technology adoption both by the trucker and the shipper that
                                        can bring them together on a common platform. Towards
                                        achieving this, a connected transportation technology that can
                                        bring benefits to the Transporters, Fleet Owners and Shippers
                                        is the need of the hour.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        The Shippers need not wait for their contracted trucks to make
                                        their shipments. At the click of a button, they can source a
                                        truck that is ready and nearby to ship their loads. This can
                                        bring in efficiency in their distribution network, while saving on
                                        warehouse management as well.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        Warehouse space is costly and the same has to be managed
                                        better to derive profits. Gone will be the days wherein trucks
                                        are lined up outside warehouses for getting unloaded.
                                        Warehouse managers can have better visibility on the space
                                        available or materials being shipped or arriving with the use of
                                        technology.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        Truckers and fleet owners have long suffered to maintain their
                                        fleet running with non-availability of loads when they need.
                                        Their profitability has been taking a hit month on month with
                                        little or no information on the loads at least for the return
                                        journeys. With technology adoption, all of the fleet can be
                                        connected to available markets across geographies to source
                                        the required loads for the trucks as and when they need.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>THE BENEFITS</b></p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        Benefits of getting onboard a connected logistics technology is
                                        manifold. One use case will be that of automating and digitizing the
                                        processes of logistics fulfilment. In the current operational
                                        scenario, it takes a substantial amount of time and manual effort to
                                        source trucks for shipments and involves printing and handing over
                                        of a good number of paper documentation to the drivers for the
                                        trucks to proceed on trip. While information on trucks in-transit
                                        and consignment tracking is missing or partially available. A truck
                                        carrying a shipment has to mandatorily carry papers related to the
                                        shipments which can go into at least 10 pages. Imagine this
                                        happening for 60 lakhs plus trucks that are moving shipments in
                                        India. How will it be if paper can be altogether avoided with
                                        digitization?
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-2'>
                                        Connecting the different stakeholders of the logistics ecosystem
                                        and bringing them on a common platform will enable efficiency
                                        and cost reduction, be it in administration or processes. With near
                                        real-time information being made available on a smartphone or a
                                        web application, decisions are faster with the click of a button.
                                        While the connected logistics application brings trust and
                                        transparency in transactions, it also allows shippers, transporters
                                        and drivers to interact and respond to events quicker.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        Truckers can boost their income per mile, and pick up bigger
                                        profits, by slashing the time their trucks are on the road with no
                                        cargo. As the trucking industry struggles to hire enough drivers to
                                        meet demand, maximizing the time of the existing drivers and
                                        utilizing trucks to their capacity is essential. Shippers could benefit
                                        from delivery efficiency and improved savings while many of truck
                                        routes become more efficient and competitive.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        Now is the right time to bring in the technological change that can
                                        enable the goods transportation industry in India to become more
                                        efficient keeping pace with other markets worldwide.
                                    </p>
                                    <p className='para my-3 my-md-3 my-lg-3'>
                                        TRANSO can help you get on to the Connected Logistics
                                        Technology. Talk to us today.
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
