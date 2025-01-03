import Link from 'next/link'; 
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Footer = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const router = useRouter();
  const [showMore, setShowMore] = useState(false);

  const toggleFooter = () => {
    setShowMore(!showMore);
  };

  const onSubmit = (data) => {
    const { name, email, phone, message } = data;

    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/917090122133?text=Full Name: ${encodeURIComponent(name)}%0AMobile Number: ${encodeURIComponent(phone)}%0AEmail ID: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    // Open WhatsApp URL in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form fields after successful submission
    reset();
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".mysection");

    function revealSections() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    }

    window.addEventListener("scroll", revealSections);

    // Trigger initial check on page load
    revealSections();

    return () => {
      window.removeEventListener("scroll", revealSections);
    };
  }, [router.pathname]);

  return (
    <footer className="mysec wow slideInUp" data-aos="fade-up" data-aos-duration="1500">
      <div className="container footer">
        <div className="row">
          <div className="col-md-11 d-block mx-auto">
            <div className="row border-bottom pt-md-4 pb-0 section">
              <div className="col-md-3 ps-3 mb-3 d-flex align-items-center justify-content-center">
                <div className="content">
                  <div className="ftr-logo">
                    <Image src="/img/logo.png" className="mb-2 img-fluid px-3" alt="Logo" width={275} height={160} />
                  </div>
                  <p className="fs-5 fw-bold ps-2 footer-heading mb-3 mt-4 mt-lg-0 pt-3 text-center">FOLLOW US</p>
                  <div className="ps-2 text-center">
                    <Link href="https://www.facebook.com/Cashoncreditcardnearmeinbangalore" className="text-decoration-none text-main pe-2 fs-2" target='_blank'>
                      <i className="fa-brands fa-facebook"></i>
                    </Link>
                    <Link href="https://www.instagram.com/easyswipefinancialservice/" className="text-decoration-none text-main px-2 fs-2" target='_blank'>
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link href="https://www.linkedin.com/company/easy-swipe-cash-on-credit-card-in-bangalore/about/" className="text-decoration-none text-main px-2 fs-2" target='_blank'>
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-md-3 ps-3 mb-3 d-flex align-content-center justify-content-center section">
                <div>
                  <p className="fs-4 fw-bold">Contact Us</p>
                  <ul className="ps-lg-4 ps-0 text-center d-inline mt-4">
                    <li className="my-2">
                      <Link href="tel:+917090122133" className="text-decoration-none text-main fs-6">
                        <i className="fa-solid fa-phone"></i> (+91) 709 012 2133
                      </Link>
                    </li>
                    <li className="my-2">
                      <p className="fs-6">
                        <i className="fa-solid fa-location-dot"></i> 265/B, 36th B Cross Rd,<br /> 7th Block, Jayanagar,<br /> Bengaluru,<br /> Karnataka 560082
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2 ps-3 text-left mb-3 d-flex align-content-center justify-content-center section">
                <div className="content">
                  <p className="fs-4 fw-bold">Quick Links</p>
                  <ul className="ps-lg-4 ps-0 text-center d-inline">
                    <li>
                      <Link href="./" className="text-decoration-none text-main lh fs-6">Home</Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-decoration-none text-main lh fs-6">About</Link>
                    </li>
                    <li>
                      <Link href="/service" className="text-decoration-none text-main fs-6">Service</Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-decoration-none text-main fs-6">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-decoration-none text-main fs-6">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 ps-3 text-left mb-3 d-flex justify-content-center align-items-center section">
                <div className="content">
                  <p className="mb-3 fs-4 fw-bold text-main">Enquire Now</p>
                  <form id="footer-form" onSubmit={handleSubmit(onSubmit)} style={{ paddingTop: '10px' }}>
                    <div className="row my-3">
                      <div className="box col-6">
                        <input
                          type="text"
                          className={`form-control form-group mb-3 ${errors.name ? 'is-invalid' : ''}`}
                          placeholder="Name"
                          {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                      </div>
                      <div className="box col-6">
                        <input
                          type="email"
                          className={`form-control form-group mb-3 ${errors.email ? 'is-invalid' : ''}`}
                          placeholder="Email"
                          {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="box col-12">
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
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="box-inner">
                        <textarea
                          className={`form-control form-group mb-3 ${errors.message ? 'is-invalid' : ''}`}
                          placeholder="Message"
                          {...register('message', { required: 'Message is required' })}
                        />
                        {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="box-inner">
                        <button type="submit" className="btn btn-danger submit-btn" id="footer-button">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {showMore && (
                <div className="row mt-4">
                  <div className="col-md-12">
                    <p className="fs-6 ">
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Credit cards swipe to get cash in bangalore
                    </Link>
                   &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Cash against credit card swipe services in bangalore
                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Get cash from credit card swipe in bangalore

                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Credit card to cash services in Bangalore

                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Get Cash on Credit cards in bangalore

                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Cash against credit cards in bangalore

                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Credit cards to cash in bangalore

                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Cash on credit cards in Bangalore

                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Cash on credit card services bangalore

                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Credit card to cash withdrawal in Bangalore

                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Swipe credit card for cash in bangalore

                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Instant cash withdrawal against credit card swipe bangalore
                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Instant cash against credit card swipe in bangalore
                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Get cash against credit card swipe in bangalore

                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Swipe credit card and get cash in bangalore
                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Cash withdrawal against credit card swipe in bangalore

                    </Link>
                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Cash on credit card swipe bangalore


                    </Link>

                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Cash withdrawal from credit card swipe in bangalore


                    </Link>

                    &nbsp; |    &nbsp;
                    <Link href="https://www.easyswipe.in/" className="text-decoration-none text-main fs-6">Cash on credit card swipe in bangalore

                    </Link>

                   


                    </p>
                    
                  </div>
                </div>
              )}
              <div className='col-md-12'>
              <button 
              id="morefooter" 
              className="border rounded-top-pill btn btn-danger  px-5 py-3 text-white mt-4" 
              onClick={toggleFooter}
            >
              {showMore ? 'Less Footer' : 'More Footer'}
            </button>
              </div>
                
            </div>
          
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-main py-3 mb-0 fs-6" style={{ color: '#003366c4' }}>Copyright © Easy Swipe 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
