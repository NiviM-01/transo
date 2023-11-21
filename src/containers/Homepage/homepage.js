import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/navbar';
import Coverimg from '../../assests/home/homecover.png';
import Coverimgmobile from '../../assests/home/homemob.svg';
import Homeicon1 from '../../assests/home/homeicon1.svg';
import Homeicon2 from '../../assests/home/homeicon2.svg';
import Homeicon3 from '../../assests/home/homeicon3.svg';
import TransoMaster from '../../assests/home/TransoMaster.png';
import TransoMastermob from '../../assests/home/TransoMastermob.png';
import Proactivevisibility from '../../assests/home/Proactive visibility.png';
import Logistics from '../../assests/home/Logistics.png';
import Journey from '../../assests/home/Journey.png';
import Multimodal from '../../assests/home/Multimodal.png';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { PiCaretCircleDownLight, PiCaretCircleUpLight } from 'react-icons/pi';
import Shipimg from '../../assests/home/Maximizeimg1.png';
import Shipimgmob from '../../assests/home/Shipimgmob.png';
import LoadConsolidation from '../../assests/home/LoadConsolidation.svg';
import MultipleConstraints from '../../assests/home/Multiple Constraints.svg';
import Routeoptimization from '../../assests/home/Route optimization.svg';
import Ownyourdata from '../../assests/home/Own your data.png';
import UnbreakableSecurity from '../../assests/home/Unbreakable Security.png';
import IntuitiveUser from '../../assests/home/Intuitive User.png';
import banner2 from '../../assests/home/banner2.png';
import Mobile from '../../assests/home/mobile.png';
import Transo from '../../assests/home/groupimage.png';
// import Nippon from '../../assests/home/nippon.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Footer/Footer';
import rect from '../../assests/home/rect.svg'
import { useNavigate } from 'react-router';
import bridging from '../../assests/home/bridging.png'

function Homepage() {
    const [dot, setdot] = useState(1);
    const [slide, setslide] = useState(1);
    const [text, settext] = useState('Visibility');
    const [ifside,setIfside] = useState('right')
    // const [change, setchange] = useState(1)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1000,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }
        ]
    };

    useEffect(() => {

        const interval = setInterval(() => {
            if (text === 'Visibility') {
                settext('Processes')

            } else if (text === 'Processes') {
                settext('Experience')

            } else {
                settext('Visibility')

            }

        }, 4000);

        return () => clearInterval(interval);
    }, [text]);

    const fadedcontent = [
        { id: 1, img: Proactivevisibility, subheading: 'Proactive Visibility and Intervention', content: [{ id: 1, point: 'Stay in the loop with accurate, real-time information processed through advanced algorithms.' }, { id: 2, point: 'Stay a step ahead by analyzing your freight operations, from tracking to monitoring critical milestones.' }] },
        { id: 2, img: Logistics, subheading: 'Logistics Going Digital', content: [{ id: 1, point: 'Smoothly navigate your logistics world by going digital and gaining transparency through accurate & auditable tracking data.' }, { id: 2, point: 'Get a solid proof of activity and delivery via standardized logistics processes and digital confirmations.' }] },
        { id: 3, img: Journey, subheading: 'Journey Risk Management', content: [{ id: 1, point: 'Ensure truck and driver safety with a proactive system that alerts against any deviation from standard operating procedure.' }, { id: 2, point: 'Equip drivers with an understanding of potential hazards while ensuring timely support.' }, { id: 3, point: 'Easily mark JRM zones on the map without traveling physically.' }] },
        { id: 4, img: Multimodal, subheading: 'Multimodal Ecosystem', content: [{ id: 1, point: 'Revolutionize logistics by integrating various modes of transport to optimize efficiency, reliability and sustainability.' }, { id: 2, point: 'Air, Sea, Water and Road, we cover it all.' }] },

    ]
    const nextpage = () => {
        if (dot >= 4) {
            setdot(1)
        } else {
            setdot(dot + 1)
        }

    }
    const previouspage = () => {
        if (dot <= 1) {
            setdot(4)
        } else {
            setdot(dot - 1)
        }

    }
    const nextslide = () => {
        if (slide >= 2) {
            setslide(1)
        } else {
            setslide(slide + 1)
        }

    }
    const previousslide = () => {
        if (slide <= 1) {
            setslide(2)
        } else {
            setslide(slide - 1)
        }

    }
    const navigation = useNavigate();
    return (
        <>
            <Navbar />
            <div className='container-fluid position-relative my-5' style={{ overflow: 'hidden' }} >
                <div className='row '>
                    <div className='col-12 position-absolute covertextalign'>
                        <div className='d-flex'>

                        </div>
                        <p className='col-12 col-lg-4 col-md-5 homeheadtext p-0 m-0'>
                            Break the Silos,
                            Improve <br className='d-block d-sm-block d-md-none d-lg-none'/>Logistics<br className='d-none d-sm-none d-md-block d-lg-block' /> {text === 'Visibility' ? <main className='ai typewriter-container-three '>{text}</main> : ''}{text === 'Processes' ? <span className='ai typewriter-container'>{text}</span> : ''}{text === 'Experience' ? <span className='ai typewriter-container-two'>{text}</span> : ''}</p>
                        <p className='col-12 col-lg-4 col-md-5 mt-3 banner-text' style={{ color: '#083B5A' }}>Unlock the next phase in logistics innovation.
                            Experience unparalleled efficiency, live tracking,
                            real-time visibility and optimized supply chains.</p>
                    </div>
                </div>
                <div className='row justify-content-center '>
                    <div className='col-12 col-lg-10 col-md-10 position-absolute homeiconsposition'>
                        <div className='row gap-5 gap-lg-0 gap-md-0'>
                            <div className='col-12 col-md-4 col-lg-4'>
                                <img src={Homeicon1} alt='21% Improved SLAs' className='img-fluid col-3 d-flex mx-auto' />
                                <p className='text-center text-light iconsubhead mt-4'><b>Improved SLAs <br />between Vendors </b></p>
                            </div>
                            <div className='col-12 col-md-4 col-lg-4'>
                                <img src={Homeicon2} alt='12% Reduction in Costs ' className='img-fluid col-3 d-flex mx-auto' />
                                <p className='text-center text-light iconsubhead mt-4'><b>Reduction in <br />Compliance Costs </b> </p>
                            </div>
                            <div className='col-12 col-md-4 col-lg-4'>
                                <img src={Homeicon3} alt='24% Lowered Carbon Footprint' className='img-fluid col-3 d-flex mx-auto' />
                                <p className='text-center text-light iconsubhead mt-4'><b> Lowered Carbon<br /> Footprint</b></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col p-0'>
                        <img src={Coverimg} alt='Coverimg' className='img-fluid col-12 d-none d-sm-none d-md-block d-lg-block ' />
                        <img src={Coverimgmobile} alt='Coverimg' className='img-fluid col-12 d-block d-sm-block d-md-none d-lg-none mt-5' />
                    </div>
                </div>
            </div>
            <div className='position-relative'>
                <div className='container'>
                    <div className='row '>
                        {/* <div className='col  '>
                            <div className='position-absolute Bridgingtextpotion'>
                                <p className='Bridging text-light fw-light'>Bridging People,<br />
                                    Operations and Data</p>
                                <button className='btn  bookdemobuttoncolor rounded-1 px-3 px-lg-5 px-md-5' onClick={() => { navigation('/bookademo') }}><b>Book a Demo</b></button>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='container-fluid m-0'>
                    <div className='row'>
                        <div className='col p-0'>
                            <img src={bridging} alt='bridging' className='img-fluid col-12 p-0 position-absolute bridgingposition' />
                            {/* <img src={TransoMaster} alt='Transo Master' className='img-fluid col-12 d-none d-sm-none d-md-block d-lg-block' />
                            <img src={TransoMastermob} alt='Transo Master' className='img-fluid col-12 d-block d-sm-block d-md-none d-lg-none' /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-lg-5 py-md-4 p-1  my-lg-5 my-md-4 my-1' style={{ overflow: 'hidden' }}>
                <div className='row mt-lg-5 pt-lg-5'>
                    <div className='col'>
                        <p className='text-center fw-light drivingStrategytext'>Driving Strategy, Business Impact <br className='d-none d-sm-none d-md-block d-lg-block' />and Profit</p>
                    </div>
                </div>
                <div className='row py-5'>
                    {fadedcontent.map((e) => {
                        const { id, img, subheading, content } = e;
                        if (dot === id) {
                            return (
                                <>
                                    <div className='col-12 col-md-11 col-lg-11' key={id}>
                                        <div className={ifside==='left'?'row fadecontentLeft':ifside==='right'?'row fadecontentRight':'row'}>
                                            <div className={dot === id ? 'col-12 col-lg-6 col-md-6 ' : 'col-12 col-lg-6 col-md-6 '} key={id}>
                                                <img src={img} alt='Proactive visibility' className='img-fluid col-11 col-lg-12 col-md-12 d-flex mx-auto ' />
                                            </div>
                                            <div className={dot === id ? 'col-12 col-lg-6 col-md-6 p-3 p-lg-5 p-md-4 ' : 'col-12 col-lg-6 col-md-6 p-5 '}>
                                                <div className='py-5'>
                                                    <p className='col-11 drivingsubheading'>{subheading}</p>
                                                    <ul className='bulletscolor'>
                                                        {content.map((e) => {
                                                            const { id, point } = e;
                                                            return (
                                                                <li key={id}><p className='proactive-text'>{point}</p></li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }

                    })}

                    <div className='col-12 col-lg-1 col-md-1 d-none d-sm-none d-md-block d-lg-flex  justify-content-lg-end mt-0 mt-lg-5 mt-md-0'>
                        <div className='mt-lg-5'>
                            <div>
                                <div className={dot === 1 ? 'sidenavigationdotactive my-3 d-flex ms-auto' : 'sidenavigationdot my-3 d-flex ms-auto'} onClick={() => { setdot(1) }}></div>
                                <div className={dot === 2 ? 'sidenavigationdotactive my-3 d-flex ms-auto' : 'sidenavigationdot my-3 d-flex ms-auto'} onClick={() => { setdot(2) }}></div>
                                <div className={dot === 3 ? 'sidenavigationdotactive my-3 d-flex ms-auto' : 'sidenavigationdot my-3 d-flex ms-auto'} onClick={() => { setdot(3) }}></div>
                                <div className={dot === 4 ? 'sidenavigationdotactive my-3 d-flex ms-auto' : 'sidenavigationdot my-3 d-flex ms-auto'} onClick={() => { setdot(4) }}></div>
                            </div>
                            <div className='col d-flex justify-content-end gap-1 mt-4' >
                                <BsArrowLeftCircle fontSize='24px' onClick={() => {previouspage();setIfside('left')}} />
                                <BsArrowRightCircle fontSize='24px' onClick={() => {nextpage();setIfside('right')}} />
                            </div>
                        </div>

                    </div>
                    <div className='col-12 col-lg-1 col-md-1 d-block d-sm-block d-md-none d-lg-none  justify-content-lg-end mt-0 mt-lg-5 mt-md-0'>
                        <div className='px-3'>
                            <div className='row'>
                                <div className='col-6 d-flex gap-2 my-auto'>
                                    <div className={dot === 1 ? 'sidenavigationdotactive ' : 'sidenavigationdot '} onClick={() => { setdot(1) }}></div>
                                    <div className={dot === 2 ? 'sidenavigationdotactive ' : 'sidenavigationdot '} onClick={() => { setdot(2) }}></div>
                                    <div className={dot === 3 ? 'sidenavigationdotactive ' : 'sidenavigationdot '} onClick={() => { setdot(3) }}></div>
                                    <div className={dot === 4 ? 'sidenavigationdotactive ' : 'sidenavigationdot '} onClick={() => { setdot(4) }}></div>
                                </div>
                                <div className='col-6 d-flex justify-content-end gap-3' >
                                    <BsArrowLeftCircle fontSize='22px' onClick={() => {previouspage();setIfside('left')}} />
                                    <BsArrowRightCircle fontSize='22px' onClick={() => {nextpage();setIfside('right')}} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row my-4 p-3'>
                    <div className='col d-flex justify-content-center'>
                        <button className='btn text-light rounded-1 col-12 col-md-4 col-lg-2' style={{ background: '#083B5A',fontFamily:'Inter' }} ><a href='../bookademo' className='textdecoration'>Book a Demo</a></button>
                    </div>
                </div>
            </div>  
            <div className='container-fluid position-relative overflow'>
                <div className='row'>
                    <div className='col-12 col-lg-6 col-md-6 position-absolute shiptextposition pt-lg-5 pt-md-3'>
                        <div>
                            <p className='col-12 col-lg-9 col-md-12 shipheadtext text-light fw-light'>Maximize revenue<br className='d-none d-sm-none d-md-none d-lg-block'/> potential<br className='d-block d-sm-block d-md-block d-lg-none'/> with AI/ML</p>
                            <p className='fw-bold shipsubheading'>No unused space <br />No extra distance travelled!</p>
                            <div className='mt-3'>
                                <div className='row mt-4'>
                                    <div className='col-3  col-md-2 col-lg-2'>
                                        <img src={Routeoptimization} alt='Routeoptimization' className='img-fluid col-6 col-md-8 col-lg-8' />
                                    </div>
                                    <div className='col d-flex align-items-center'>
                                        <p className='text-light m-0 optimize'>Route optimization</p>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-3 col-md-2 col-lg-2'>
                                        <img src={LoadConsolidation} alt='LoadConsolidation' className='img-fluid col-6 col-md-8 col-lg-8' />
                                    </div>
                                    <div className='col d-flex align-items-center'>
                                        <p className='text-light m-0 optimize'>Load Consolidation</p>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-3 col-md-2 col-lg-2'>
                                        <img src={MultipleConstraints} alt='MultipleConstraints' className='img-fluid col-6 col-md-8 col-lg-8' />
                                    </div>
                                    <div className='col d-flex align-items-center'>
                                        <p className='text-light m-0 optimize'>Multiple Constraints</p>
                                    </div>
                                </div>
                            </div>
                            <button className='btn BlogsandWhitepapers rounded-1 mt-2 mt-lg-5 mt-md-3'><a href='../resources/:id' className='textdecoration2'>Read Blogs and Whitepapers</a></button>
                        </div>
                    </div>
                </div>
                <div className='row' style={{ background: '#0C5C84' }}>
                    <div className='col p-0'>
                        <img src={Shipimg} alt='Shipimg' className='img-fluid col-12 d-none d-sm-none d-md-block d-lg-block' />
                        <img src={Shipimgmob} alt='Shipimgmob' className='img-fluid col-12  d-block d-sm-block d-md-none d-lg-none' />
                    </div>
                </div>
            </div>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col py-5'>
                        <p className='text-center fw-light drivingStrategytext'>The Transo Advantage</p>
                    </div>
                </div>
                {/* <div className='row justify-content-center gap-5'>
                    <div className='col-10 col-md-3 col-lg-3 cardshadow'>
                        <div className='row'>
                            <div className='col pt-5'>
                                <img src={Ownyourdata} alt='Own your data' className='img-fluid col-9 d-flex mx-auto' />
                                <p className='cardtext fw-bold text-center mt-lg-2 hoverheading'><img src={rect} className='img-fluid' alt='rect' width='6%'/> Own your data</p>
                                <p className='text-center d-block d-sm-block d-md-none d-lg-none'>Track and define meaningful KPIs and gain an in-depth understanding of what your data signifies for your business.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-10 col-md-3 col-lg-3 cardshadow'>
                        <div className='row'>
                            <div className='col pt-5'>
                                <img src={UnbreakableSecurity} alt='Own your data' className='img-fluid col-7  d-flex mx-auto' />
                                <p className='cardtext fw-bold text-center mt-lg-2'><img src={rect} className='img-fluid' alt='rect' width='6%'/> Unbreakable <br className=' d-none d-sm-none d-md-block d-lg-block' />Security</p>
                                <p className='text-center d-block d-sm-block d-md-none d-lg-none'>Collaborate with trusted partners, adhere to industry standards and implement robust protocols. </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-10 col-md-3 col-lg-3 cardshadow '>
                        <div className='row'>
                            <div className='col pt-5'>
                                <img src={IntuitiveUser} alt='Own your data' className='img-fluid col-3 d-flex mx-auto' />
                                <p className='cardtext fw-bold text-center mt-lg-2'><img src={rect} className='img-fluid' alt='rect' width='6%'/> Intuitive User<br className=' d-none d-sm-none d-md-block d-lg-block' /> Experience</p>
                                <p className='text-center d-block d-sm-block d-md-none d-lg-none'>Experience a hassle-free logistics journey with our user friendly design, enhancing productivity and navigating complex tasks with ease.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/*cards */}
                <div className='row justify-content-center gap-5 d-none d-sm-none d-md-flex d-lg-flex'>
                    <div className='col-10 col-md-3 col-lg-3 cardshadow  div1'>
                        <div className='row p-3'>
                            <div className='col pt-3 content'>
                                <img src={Ownyourdata} alt='Own your data' className='img-fluid col-7 d-flex mx-auto' />
                                <p className='cardtext fw-bold text-center mt-lg-4 '><img src={rect} className='img-fluid' alt='rect' width='5%' style={{fontFamily:'inter'}}/> Own your data</p>
                                <p className='text-center d-block d-sm-block d-md-none d-lg-none  py-5 data-text'><img src={rect} className='img-fluid' alt='rect' width='6%' />  Track and define meaningful KPIs and gain an in-depth understanding of what your data signifies for your business.</p>
                            </div>
                            <div className='col pt-5 content2'>
                                <div className='row '>
                                    <div className='col-2'>
                                        <img src={rect} className='img-fluid col-8 d-flex ms-auto' alt='rect' width='6%' />
                                    </div>
                                    <div className='col-10'>
                                        <p className='data-text '>Track and define meaningful KPIs and gain an in-depth understanding of what your data signifies for your business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-10 col-md-3 col-lg-3 cardshadow  div1'>
                        <div className='row'>
                            <div className='col pt-5 content'>
                                <img src={UnbreakableSecurity} alt='UnbreakableSecurity' className='img-fluid col-7 d-flex mx-auto ' />
                                <p className='cardtext fw-bold text-center mt-lg-2 '><img src={rect} className='img-fluid' alt='rect' width='6%'/> Unbreakable Security</p>
                                <p className='text-center d-block d-sm-block d-md-none d-lg-none py-5'>Collaborate with trusted partners, adhere to industry standards and implement robust protocols.</p>
                            </div>
                            <div className='col pt-5 content2'>
                                <div className='row  '>
                                    <div className='col-2'>
                                    <img src={rect} className='img-fluid col-8 d-flex ms-auto' alt='rect' width='6%'/>
                                    </div>
                                    <div className='col-10'>
                                        <p className=''>Collaborate with trusted partners, adhere to industry standards and implement robust protocols.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='col-10 col-md-3 col-lg-3 cardshadow div1'>
                        <div className='row p-3'>
                            <div className='col pt-2 content '>
                                <img src={UnbreakableSecurity} alt='UnbreakableSecurity' className='img-fluid col-6 d-flex mx-auto ' />
                                <p className='cardtext fw-bold text-center mt-lg-4 '><img src={rect} className='img-fluid' alt='rect' width='5%' /> Robust Security</p>
                                <p className='text-center d-block d-sm-block d-md-none d-lg-none  py-5 data-text'>Collaborate with trusted partners, adhere to industry standards and implement robust protocols.</p>
                                <br />
                            </div>
                            <div className='col pt-5 content2'>
                                <div className='row'>
                                    <div className='col-2'>
                                        <img src={rect} className='img-fluid col-8 d-flex ms-auto' alt='rect' width='6%' />
                                    </div>
                                    <div className='col-10'>
                                        <p className='data-text'>Collaborate with trusted partners, adhere to industry standards and implement robust protocols. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-10 col-md-3 col-lg-3 cardshadow  div1'>
                        <div className='row p-1'>
                            <div className='col pt-3 content'>
                                <img src={IntuitiveUser} alt='IntuitiveUser' className='img-fluid col-3 d-flex mx-auto ' width='24%' />
                                <p className='cardtext fw-bold text-center mt-lg-2 '><img src={rect} className='img-fluid' alt='rect' width='5%' /> Intuitive UI</p>
                                <p className='text-center d-block d-sm-block d-md-none d-lg-none  py-5 data-text'>Experience a hassle-free logistics journey with our user friendly design, enhancing productivity and navigating complex tasks with ease.</p>
                            </div>
                            <div className='col pt-5 content2 '>
                                <div className='row'>
                                    <div className='col-2'>
                                        <img src={rect} className='img-fluid col-8 d-flex ms-auto' alt='rect' width='6%' />
                                    </div>
                                    <div className='col-10'>
                                        <p className='data-text'>Experience a hassle-free logistics journey with our user friendly design, enhancing productivity and navigating complex tasks with ease.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center gap-5 d-flex d-sm-flex d-md-none d-lg-none'>
                    <div className='col-10 col-md-3 col-lg-3 cardshadow '>
                        <div className='row'>
                            <div className='col pt-5 '>
                                <img src={Ownyourdata} alt='Own your data' className='img-fluid col-9 d-flex mx-auto ' />
                                <p className='cardtext fw-bold text-center mt-lg-2'>Own your data</p>
                                <p className='text-center d-block d-sm-block d-md-none d-lg-none  py-5'>Track and define meaningful KPIs and gain an in-depth understanding of what your data signifies for your business.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-10 col-md-3 col-lg-3 cardshadow  '>
                        <div className='row'>
                            <div className='col pt-5 '>
                                <img src={UnbreakableSecurity} alt='UnbreakableSecurity' className='img-fluid col-7 d-flex mx-auto ' />
                                <p className='cardtext fw-bold text-center mt-lg-2'>Robust Security</p>
                                <p className='text-center d-block d-sm-block d-md-none d-lg-none py-5'>Collaborate with trusted partners, adhere to industry standards and implement robust protocols.<span> </span></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-10 col-md-3 col-lg-3 cardshadow  '>
                        <div className='row'>
                            <div className='col pt-5 '>
                                <img src={IntuitiveUser} alt='IntuitiveUser' className='img-fluid col-3 d-flex mx-auto ' />
                                <p className='cardtext fw-bold text-center mt-lg-2 '>Intuitive UI</p>
                                <p className='text-center d-block d-sm-block d-md-none d-lg-none  py-5'>Experience a hassle-free logistics journey with our user friendly design, enhancing productivity and navigating complex tasks with ease.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col d-flex justify-content-center my-5'>
                        <button className='btn text-light rounded-1 col-12 col-md-4 col-lg-2' style={{ background: '#083B5A',fontFamily:'Inter',fontSize:'16px' }} ><a href='../product' className='textdecoration'>Product and Features</a></button>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col p-0'>
                        <img src={banner2} alt='banner2' className='img-fluid col-12' />
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-6 p-3 p-md-5 p-lg-5 d-none d-sm-none d-md-block d-lg-block'>
                        <p className='col-12 fw-light drivingStrategytext'>Your Brand,<br className=' d-none d-sm-none d-md-block d-lg-block' />
                            Our Solutions</p>
                        <p className=' col-10 fw-bold mobilesubtext'>White Label and Customize
                            as <br className=' d-none d-sm-none d-md-block d-lg-block' />Your Own</p>
                        <p className='col-10 brand-text'>Level up your brand identity and create a <br className=' d-none d-sm-none d-md-block d-lg-block' />personalized experience with a touch of<br className=' d-none d-sm-none d-md-block d-lg-block' /> innovation.</p>
                        <button className='btn text-light rounded-1 ' style={{ background: '#083B5A',fontFamily:'Inter' }} ><a href='../bookademo' className='textdecoration'>Book a Call</a></button>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <img src={Mobile} alt='Mobile' className='img-fluid col-12' />
                    </div>
                </div>
                <div className='row justify-content-end '>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <div className='row'>
                            <div className='col-12 '>
                                <img src={Transo} alt='Transo' className='img-fluid col-11 col-md-12 col-lg-12' />
                            </div>
                            {/* <div className='col-7 d-flex'>
                                <img src={Nippon} alt='Nippon' className='img-fluid  col-10 col-md-10 col-lg-12' />
                            </div> */}
                        </div>
                    </div>

                </div>
                <div className='row d-block d-sm-block d-md-none d-lg-none'>
                    <div className='col-12 col-md-6 col-lg-6 p-3 p-md-5 p-lg-5 '>
                        <p className='col-12 fw-light drivingStrategytext'>Your Brand,<br className=' d-none d-sm-none d-md-block d-lg-block' />
                            Our Solutions</p>
                        <p className=' col-11 fw-bold mobilesubtext'>White Label and Customize
                            as <br />Your Own</p>
                        <p className='col-10'>Level up your brand identity and create a <br className=' d-none d-sm-none d-md-block d-lg-block' />personalized experience with a touch of<br className=' d-none d-sm-none d-md-block d-lg-block' /> innovation.</p>
                        <button className='btn text-light rounded-1 ' style={{ background: '#083B5A' }}>Book a Call</button>
                    </div>
                </div>
            </div>
            {/* <div className='slidecolor'>
                <div className='container'>
                    <div className='row p-2 p-md-1 p-lg-5'>
                        <div className='col p-3 p-md-1 p-lg-5'>
                            <Slider {...settings}>
                                <div>
                                    <div className='row justify-content-center p-3'>
                                        <div className='col-12 col-md-12 col-lg-8'>
                                            <p className='text-lg-center text-light slide-para'>Overall experience with Transo was great, it was easy to implement and the new dashboard offered various customisable tools important to my organisation.</p>
                                            <p className='text-lg-center text-light slide-text mt-3 mt-lg-5 mt-md-4 fw-bold'>Nippon Express- Shrey D (Project Manager)</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='row justify-content-center p-3'>
                                        <div className='col-12 col-md-12 col-lg-8'>
                                            <p className='text-lg-center text-light slide-para'>Overall experience with Transo was great, it was easy to implement and the new dashboard offered various customisable tools important to my organisation.</p>
                                            <p className='text-lg-center text-light slide-text mt-3 mt-lg-5 mt-md-5 fw-bold'>Nippon Express- Shrey D (Project Manager)</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <hr className='border' />
                        </div>
                    </div>
                    <div className='row d-none d-sm-none d-md-block d-lg-block'>
                        <div className='col'>
                            <p className='fw-light text-light text-center Trustedbrandstext'>Trusted by Leading Brands</p>
                            <div className='row p-5'>
                                <div className='col d-flex align-items-center justify-content-center'>
                                    <img src={Gucci} alt='gucci' className='img-fluid col-8' />
                                </div>
                                <div className='col d-flex align-items-center justify-content-center'>
                                    <img src={Chanel} alt='Chanel' className='img-fluid col-8' />
                                </div>
                                <div className='col d-flex align-items-center justify-content-center'>
                                    <img src={Puma} alt='Puma' className='img-fluid col-8' />
                                </div>
                                <div className='col d-flex align-items-center justify-content-center'>
                                    <img src={Apply} alt='Apply' className='img-fluid col-3' />
                                </div>
                                <div className='col d-flex align-items-center justify-content-center'>
                                    <img src={Prada} alt='Prada' className='img-fluid col-10' />
                                </div>
                                <div className='col d-flex align-items-center justify-content-center'>
                                    <img src={Sony} alt='Sony' className='img-fluid col-10' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col p-0'>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage