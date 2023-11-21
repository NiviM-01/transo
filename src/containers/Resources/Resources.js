import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/navbar';
import pandemic from '../../assests/resources/pandemic.png'
import covid from '../../assests/resources/coivd.png'
import success from '../../assests/subpage/Covid.png'
import logic from '../../assests/subpage/Connected.jpg'
import efficiency from '../../assests/subpage/Efficiency.jpg'
import last from '../../assests/subpage/Lastmile Profitability.jpg'
import gps from '../../assests/subpage/GPS.png'
import { BsArrowRight } from 'react-icons/bs'
import Footer from '../Footer/Footer';
import { useNavigate, useParams } from 'react-router';


function Resources() {
    const [btn, setBtn] = useState(1);
    const { id } = useParams();
    const navigation = useNavigate();
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
    const getid = () => {
        console.log(id, 'idid');
        if (id == 1) {
            setBtn(1);
        }
        else if (id == 2) {
            setBtn(2);
        }
        else if (id == 3) {
            setBtn(3);
        }
    }
    useEffect(() => {
        getid()
    }, [id])

    return (
        <>
            <Navbar page={3} />
            <div className='mt-lg-5 pt-lg-5 pt-md-5 mt-md-5'>
                <div className='container mt-lg-5 pt-lg-5 mt-md-5 pt-md-3 d-none d-sm-none d-md-block d-lg-block '>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-8'>
                            <div className='row gap-4'>
                                <div className='col-12 col-lg-3 col-md-2 '>
                                    <button className={btn === 1 ? 'btn text-light px-lg-4 px-md-2 rounded-1 bookademobtn col-12 ' : 'btn text-light px-lg-4 px-md-2 rounded-1 bookademobtn col-12 opacity-50'} onClick={() => { setBtn(1) }}>Blogs</button>
                                </div>
                                <div className='col-12 col-lg-4 col-md-4'>
                                    <button className={btn === 2 ? 'btn text-light px-lg-4 px-md-3 rounded-1 bookademobtn col-12 disabled' : 'btn text-light px-lg-4 px-md-3 rounded-1 bookademobtn col-12 opacity-50 disabled'} onClick={() => { setBtn(2) }}>Case Studies</button>
                                </div>
                                <div className='col-12 col-lg-4 col-md-4'>
                                    <button className={btn === 3 ? 'btn text-light px-lg-4 px-md-4 rounded-1 bookademobtn col-12 disabled ' : 'btn text-light px-lg-4 px-md-4 rounded-1 bookademobtn col-12 opacity-50 disabled'} onClick={() => { setBtn(3) }}>Whitepapers</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid d-block d-sm-block d-md-none d-lg-none mt-5 pt-3'>
                    <div className='row  justify-content-center'>
                        <div className='col-10'>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" onChange={(e) => { select(e) }}>
                                {/* <option selected>Blogs</option> */}
                                <option selected>Blogs</option>
                                <option>Case Studies</option>
                                <option>Whitepapers</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={btn === 1 ? '' : 'd-none'}>
                    <div className='container mt-lg-5 pt-lg-5 mt-md-5 pt-md-5 mt-5'>

                        <div className='row justify-content-center'>
                            <div className='col-10'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 col-md-5'>
                                        <img src={pandemic} className='img-fluid col-lg-11 col-md-12' alt='pandemic' />
                                    </div>
                                    <div className='col-12 col-lg-7 col-md-7'>
                                        <p className='side-heading m-0'><b>TRANSO for Smart Logistics<br/> and Digital Tranformation</b></p>
                                        <button className='para border-0 text-light rounded-1 btn-readmore'><a href='../subpage1' className='textdecoration'>Read more <BsArrowRight /></a></button>
                                        <br />
                                        <br />
                                        <p className='para'>3rd March, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row justify-content-center mt-lg-5 mt-md-5 mt-5'>
                            <div className='col-10'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 col-md-5'>
                                        <img src={covid} className='img-fluid col-lg-11 col-md-12' alt='covid' />
                                    </div>
                                    <div className='col-12 col-lg-7 col-md-7'>
                                        <p className='side-heading m-0'><b>Shipments In-Transit information –<br />Critical to logistics efficiency</b></p>
                                        <button className='para border-0 text-light rounded-1 btn-readmore'><a href='../subpage2' className='textdecoration'>Read more <BsArrowRight /></a></button>
                                        <br />
                                        <br />
                                        <p className='para'>8th February, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container mt-lg-5 mt-md-5 mt-5'>
                        <div className='row justify-content-center mt-lg-5 mt-md-3 pt-md-3'>
                            <div className='col-10'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 col-md-5'>
                                        <img src={success} className='img-fluid col-lg-11 col-md-12' alt='pandemic' />
                                    </div>
                                    <div className='col-12 col-lg-7 col-md-7'>
                                        <p className='side-heading m-0'><b>Logistics success during<br /> COVID-19 Pandemic</b></p>
                                        <button className='para border-0 text-light rounded-1 btn-readmore'><a href='../subpage3' className='textdecoration'>Read more <BsArrowRight /></a></button>
                                        <br />
                                        <br />
                                        <p className='para'>3rd March, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center mt-lg-5 mt-md-5 mt-5'>
                            <div className='col-10'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 col-md-5'>
                                        <img src={logic} className='img-fluid col-lg-11 col-md-12' alt='covid' />
                                    </div>
                                    <div className='col-12 col-lg-7 col-md-7'>
                                        <p className='side-heading m-0'><b>Connected Logistics</b></p>
                                        <button className='para border-0 text-light rounded-1 btn-readmore'><a href='../subpage4' className='textdecoration'>Read more <BsArrowRight /></a></button>
                                        <br />
                                        <br />
                                        <p className='para'>3rd March, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center mt-lg-5 mt-md-5 mt-5'>
                            <div className='col-10'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 col-md-5'>
                                        <img src={efficiency} className='img-fluid col-lg-11 col-md-12' alt='covid' />
                                    </div>
                                    <div className='col-12 col-lg-7 col-md-7'>
                                        <p className='side-heading m-0'><b>Improving last mile delivery<br/> efficiency with Intelligence</b></p>
                                        <button className='para border-0 text-light rounded-1 btn-readmore'><a href='../subpage5' className='textdecoration'>Read more <BsArrowRight /></a></button>
                                        <br />
                                        <br />
                                        <p className='para'>3rd March, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center mt-lg-5 mt-md-5 mt-5'>
                            <div className='col-10'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 col-md-5'>
                                        <img src={last} className='img-fluid col-lg-11 col-md-12' alt='covid' />
                                    </div>
                                    <div className='col-12 col-lg-7 col-md-7'>
                                        <p className='side-heading m-0'><b>Profitability of last<br/> mile delivery</b></p>
                                        <button className='para border-0 text-light rounded-1 btn-readmore'><a href='../subpage6' className='textdecoration'>Read more <BsArrowRight /></a></button>
                                        <br />
                                        <br />
                                        <p className='para'>3rd March, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center mt-lg-5 mt-md-5 mt-5'>
                            <div className='col-10'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 col-md-5'>
                                        <img src={gps} className='img-fluid col-lg-11 col-md-12' alt='covid' />
                                    </div>
                                    <div className='col-12 col-lg-7 col-md-7'>
                                        <p className='side-heading m-0'><b>The Use Of GPS Data in<br/> Freight Logistics</b></p>
                                        <button className='para border-0 text-light rounded-1 btn-readmore'><a href='../subpage7' className='textdecoration'>Read more <BsArrowRight /></a></button>
                                        <br />
                                        <br />
                                        <p className='para'>3rd March, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={btn === 2 ? '' : 'd-none'}>
                    <div className='container mt-lg-5 pt-lg-3 mt-md-5 pt-md-5 mt-5'>
                        <div className='row justify-content-center mt-md-3 pt-md-3'>
                            <div className='col-10'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 col-md-5'>
                                        <img src={covid} className='img-fluid col-lg-11 col-md-12' alt='pandemic' />
                                    </div>
                                    <div className='col-12 col-lg-7 col-md-7'>
                                        <p className='side-heading m-0'><b>Logistics success during<br /> COVID-19 Pandemic</b></p>
                                        <button className='para border-0 text-light rounded-1 btn-readmore'>Download Whitepaper</button>
                                        <br />
                                        <br />
                                        <p className='para'>3rd March, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center mt-lg-5 mt-md-5 mt-5'>
                            <div className='col-10'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 col-md-5'>
                                        <img src={covid} className='img-fluid col-lg-11 col-md-12' alt='covid' />
                                    </div>
                                    <div className='col-12 col-lg-7 col-md-7'>
                                        <p className='side-heading m-0'><b>Logistics success during<br /> COVID-19 Pandemic</b></p>
                                        <button className='para border-0 text-light rounded-1 btn-readmore'>Download Whitepaper</button>
                                        <br />
                                        <br />
                                        <p className='para'>3rd March, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={btn === 3 ? '' : 'd-none'}>
                    <div className='container mt-lg-5 pt-lg-5 mt-md-5 pt-md-5 mt-5'>

                        <div className='row justify-content-center'>
                            <div className='col-10'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 col-md-5'>
                                        <img src={pandemic} className='img-fluid col-lg-11 col-md-12' alt='pandemic' />
                                    </div>
                                    <div className='col-12 col-lg-7 col-md-7'>
                                        <p className='side-heading m-0'><b>Logistics success during<br /> COVID-19 Pandemic</b></p>
                                        <button className='para border-0 text-light rounded-1 btn-readmore'>Read more <BsArrowRight /></button>
                                        <br />
                                        <br />
                                        <p className='para'>3rd March, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row justify-content-center mt-lg-5 mt-md-5 mt-5'>
                            <div className='col-10'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 col-md-5'>
                                        <img src={covid} className='img-fluid col-lg-11 col-md-12' alt='covid' />
                                    </div>
                                    <div className='col-12 col-lg-7 col-md-7'>
                                        <p className='side-heading m-0'><b>Shipments In-Transit information –<br />Critical to logistics efficiency</b></p>
                                        <button className='para border-0 text-light rounded-1 btn-readmore'>Read more <BsArrowRight /></button>
                                        <br />
                                        <br />
                                        <p className='para'>3rd March, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid mt-lg-5 pt-lg-5 mt-md-4 pt-md-4 mt-3 pt-3'>
                    <div className='row'>
                        <div className='col p-0 '>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resources;
