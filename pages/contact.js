// pages/contact.js
import Head from 'next/head';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    const { name, phone, email, message } = data;

    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/917090122133?text=Full Name: ${encodeURIComponent(name)}%0AMobile Number: ${encodeURIComponent(phone)}%0AEmail ID: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    // Open WhatsApp URL in a new tab
    window.open(whatsappUrl, '_blank');
    reset(); 
  };

  return (
    <>
      <Head>
        <title>Contact Us | Cash Withdrawal From Credit Card In Bangalore</title>
        <meta name="description" content="Effortlessly cash withdrawal from credit card in Bangalore with EasySwipe. Fast, secure, and convenient for all your cash needs. Explore today!" />
        <meta name="keywords" content="Easy Swipe, transfer money from credit card to bank in bangalore, send money using credit card in Bangalore, cash withdrawal from credit card in bangalore, spot cash on credit card swipe in bangalore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.easyswipe.in/contact/" />  
      </Head>
      <h1 className='d-none'>Cash Withdrawal From Credit Card In Bangalore</h1>
      <section className="custom-header" style={{ background: "url('/img/contactus-header.jpg')" }}></section>
      <section className="mb-4" style={{ marginTop: '-120px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3 className="text-main">Contact Us</h3>
                        <p className="text-main">
                          Feel Free to contact us any time. We will get back to you as soon as we can!.
                        </p>
                        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                          <input
                            type="text"
                            className={`form-control form-group mb-3 ${errors.name ? 'is-invalid' : ''}`}
                            placeholder="Name"
                            {...register('name', { required: 'Name is required' })}
                          />
                          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}

                          <input
                            type="email"
                            className={`form-control form-group mb-3 ${errors.email ? 'is-invalid' : ''}`}
                            placeholder="Email"
                            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                          />
                          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}

                          <input
                            type="tel"
                            className={`form-control form-group mb-3 ${errors.phone ? 'is-invalid' : ''}`}
                            placeholder="Mobile"
                            {...register('phone', { 
                              required: 'Mobile number is required',
                              minLength: {
                                value: 10,
                                message: 'Mobile number must be exactly 10 digits'
                              },
                              maxLength: {
                                value: 10,
                                message: 'Mobile number must be exactly 10 digits'
                              },
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Mobile number must be exactly 10 numeric digits'
                              }
                            })}
                          />
                          {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}

                          <textarea
                            className={`form-control form-group mb-3 ${errors.message ? 'is-invalid' : ''}`}
                            placeholder="Message"
                            {...register('message', { required: 'Message is required' })}
                          />
                          {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}

                          <button className="contact_form_submit mb-3" id="contact-button">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="right_conatct_social_icon d-flex align-items-end">
                      <div className="socil_item_inner d-flex">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-square fs-3 text-main"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram fs-3 text-main"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-linkedin fs-3 text-main"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter fs-3 text-main"></i>
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_info_sec">
                  <h4 className="text-white">Contact Info</h4>
                  <div className="d-flex info_single align-items-center text-white">
                    <a href="tel:+917090122133" className='text-white text-decoration-none'>
                    <i className="fas fa-headset"></i>
                    <span>+91 7090122133</span></a>
                  </div>
                  <div className="d-flex info_single align-items-center text-white">
                  <a href="mailto:easyswipe.blr@gmail.com" className='text-white text-decoration-none'>
                    <i className="fas fa-envelope-open-text"></i>
                    <span>easyswipe.blr@gmail.com</span> </a>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-map-marked-alt text-white"></i>
                    <span>
                      <strong>Easy Swipe</strong>
                      <br />
                      265/B, 36th B Cross Rd, 7th Block, Jayanagar, Bengaluru, Karnataka 560082
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.738597923948!2d77.5744590756728!3d12.924515215907665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU1JzI4LjIiTiA3N8KwMzQnMzcuMyJF!5e0!3m2!1sen!2sin!4v1722317900652!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
