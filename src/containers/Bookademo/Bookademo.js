import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import { TfiLocationPin } from 'react-icons/tfi';
import { BsTelephone } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import bookademo from '../../assests/bookademo.png'
import Footer from '../Footer/Footer';
import axios from 'axios';


function Bookademo() {
    const [mailData, setMaildata] = useState({
        name: '',
        email: '',
        number: '',
        organization: ''
      });
    
      const userDetails = (e) => {
        const { name, value } = e.target;
        setMaildata({ ...mailData, [name]: value });
      }
    
      const sendEmail = async (e) => {
        e.preventDefault();
        const payload = {
          service_id: 'service_dfdgrer',
          template_id: 'template_a8ojelb',
          user_id: 'KkSm9Ocg3HAgTSWi7',
          template_params: {
            'name': mailData.name,
            'emailid': mailData.email,
            'number': mailData.number,
            'organization': mailData.organization
          }
        }
        axios.post('https://api.emailjs.com/api/v1.0/email/send', JSON.stringify(payload), {
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((res) => {
          alert(res.data==='OK'?'Form Submitted':'');
          setTimeout(() => {
            window.location.reload()
          }, 1000)
    
        }).catch((err) => {
          alert('Failed to Submit')
          console.log(err);
        })
        // emailjs.sendForm('service_olbrll8', 'template_t27196i', form.current, '--bGpdlwbyiphKSbp')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
      };
    return (
        <>
            <Navbar />
            <div className='bg-img2 mt-lg-5 mt-md-5 mt-3'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-12 col-lg-7 col-md-7'>
                            <form  onSubmit={sendEmail}>
                                <div className='row mt-lg-5 pt-lg-5 pt-md-5 pt-5 justify-content-center'>
                                    <div className='col-11 col-lg-7 col-md-7'>
                                        <p className=' bookademo-text'>Let’s get in touch</p>
                                        <div className="form-group">
                                            <input type='text' placeholder='Name' name='name' className="form-control bookademo  p-1 border-bottom border-dark rounded-0 background" id='input1' onChange={(e) => { userDetails(e) }} required/>
                                            <div className='inputborder' ></div>
                                        </div>
                                    </div>
                                    <div className='col-11 col-lg-7 col-md-7 mt-lg-4 mt-md-3 mt-3'>
                                        <div className="form-group">
                                            <input type='email' placeholder='Email' name='email' className="form-control bookademo  p-1 border-bottom border-dark rounded-0 background" id='input1' onChange={(e) => { userDetails(e) }} required/>
                                            <div className='inputborder'></div>
                                        </div>
                                    </div>
                                    <div className='col-11 col-lg-7 col-md-7 mt-lg-4 mt-md-3 mt-3'>
                                        <div className="form-group">
                                            <input type='number' placeholder='Phone Number' name='number' className="form-control bookademo  p-1 border-bottom border-dark rounded-0 background" id='input1' onChange={(e) => { userDetails(e) }} required/>
                                            <div className='inputborder' ></div>
                                        </div>
                                    </div>
                                    <div className='col-11 col-lg-7 col-md-7 mt-lg-4 mt-md-3 mt-3'>
                                        <div className="form-group">
                                            <input type='text' placeholder='Name of Organization' name='organization' className="form-control bookademo  p-1 border-bottom border-dark rounded-0 background" id='input1' onChange={(e) => { userDetails(e) }} required/>
                                            <div className='inputborder' ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-3 mt-lg-3'>
                                    <div className='col-12 col-lg-9 col-md-8 d-flex justify-content-center'>
                                        <button className='btn rounded-1 fw-bold mt-lg-4 mt-md-3 mt-3 bookademo-btn col-11 col-lg-5 col-md-4' type='submit' >Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='col-5 mt-lg-5 pt-lg-5 mt-md-5 pt-md-2 '>
                            <div className='col-12 px-3 px-lg-4 mt-lg-4 px-md-3 d-none d-sm-none d-md-block d-lg-block'>
                                <div className='row'>
                                    <div className='col-2'><TfiLocationPin color='white' /></div>
                                    <div className='col'>
                                        <p className='text-light address'><a>#161, 2nd Floor,
                                            Above Reliance Trends,
                                            Basavanagar Main Road
                                            Vignan Nagar, Bengaluru,
                                            Karnataka 560037</a></p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-2'><BsTelephone color='white' /></div>
                                    <div className='col'>
                                        <p className='text-light address'>095913 75909</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-2'><TfiEmail color='white' /></div>
                                    <div className='col'>
                                        <p><a href="mailto:info@transo.in?" className='text-light text-decoration-none address'>info@transo.in</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className='container d-none d-sm-none d-md-block d-lg-block mt-lg-5 mt-md-3 mt-5'>
                                <img src={bookademo} className='img-fluid col-lg-8 col-md-9 col-12' alt='bookademo' />
                            </div>
                        </div>

                        <div className='container d-block d-sm-block d-md-none d-lg-none mt-5 pt-3'>
                            <img src={bookademo} className='img-fluid col-lg-8 col-md-9 col-10 mx-3' alt='bookademo' width='10%' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Bookademo;
