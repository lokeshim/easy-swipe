// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Bank from '../components/Bank';

export default function Home() {
  return (
    <>
    <Head>
      <title>Credit Card Swipe For Cash | Send Money With Credit Card</title>
      <meta name="description" content="Convert your credit limit into instant cash with EasySwipe. Quick, secure, and hassle-free credit card swipe for cash service" />
      <meta name="keywords" content="credit card swipe for cash  , send money with credit card in Bangalore, transferring money from credit card to bank account , cash withdrawal from credit card in bangalore, spot cash on credit card swipe in bangalore, Easy Swipe" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.easyswipe.in" />  
        {/* Schema JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EasySwipe",
              "url": "https://www.easyswipe.in",
              "logo": "https://www.easyswipe.in/img/logo.png",
              "sameAs": [
                "https://www.facebook.com/easyswipe",
                "https://www.twitter.com/easyswipe"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7090122133",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": "English"
              },
              "description": "EasySwipe provides secure and hassle-free credit card swipe for cash services in Bangalore. Instant transfer of funds from your credit card to your bank account.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Easy Swipe Lane",
                "addressLocality": "Bengaluru",
                "addressRegion": "KA",
                "postalCode": "560001",
                "addressCountry": "IN"
              }
            }),
          }}
        />

        {/* Additional Schema for Organization (updated URLs) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Easy Swipe",
              "alternateName": "Easy Swipe",
              "url": "https://www.easyswipe.in/",
              "logo": "https://www.easyswipe.in/img/logo.png",
              "sameAs": [
                "https://www.facebook.com/Cashoncreditcardnearmeinbangalore",
                "https://www.instagram.com/easyswipefinancialservice/",
                "https://www.linkedin.com/company/easy-swipe-cash-on-credit-card-in-bangalore/about/"
              ]
            }),
          }}
        />

        {/* Schema JSON-LD for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Easy Swipe",
              "url": "https://www.easyswipe.in/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.easyswipe.in/service?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />

        {/* Schema JSON-LD for Financial Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Easy Swipe",
              "image": "https://www.easyswipe.in/img/logo.png",
              "@id": "",
              "url": "https://www.easyswipe.in/",
              "telephone": "(+91) 709 012 2133",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3rd Floor, 1372/C, 32nd E Cross Rd, opp sanjay gandhi hospital, 4th T Block East, Pattabhirama Nagar, Jayanagar",
                "addressLocality": "Bengaluru",
                "postalCode": "560041",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/Cashoncreditcardnearmeinbangalore",
                "https://www.instagram.com/easyswipefinancialservice/",
                "https://www.linkedin.com/company/easy-swipe-cash-on-credit-card-in-bangalore/about/"
              ]
            }),
          }}
        />

        {/* Schema JSON-LD for FAQ Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What documents are required to obtain cash against my credit card?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To access cash against your credit card, you'll need to provide a digital copy of your PAN Card and Aadhar Card. For a detailed explanation of the process, please call us at +91-7090122133. We're here to assist you!"
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I obtain cash against my credit card?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You have two convenient options to get cash against your credit card: either through our online service or by visiting our office in person. For a complete explanation of the process, call us at +91-7090122133. We're here to guide you!"
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is it safe to get cash using my credit card?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it is safe. Obtaining cash from your credit card is as secure as using it for purchases or bill payments. The cash will be instantly credited to your account. For more details on the process, call us at +91-7090122133. We're here to assist you!"
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does 'cash against a credit card' mean?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It means you can withdraw cash from your credit card's available balance. We simply swipe your card, and the funds are transferred to your account immediately. For a detailed explanation of the process, call us at +91-7090122133. We're here to help!"
                  }
                }
              ]
            }),
          }}
        />
    </Head>
    <section >
        <h1 className='d-none'>Unlock Instant Financial Flexibility With Spot Credit Card To Cash Services</h1>
      
      <div className='d-md-block d-none'>
        <Image src="/img/banner.jpg" className="w-100 mybanner" alt="Easy Swipe" width={1920} height={827} />
        <a data-bs-target="#exampleModal1" data-bs-toggle="modal" title="" style={{
                position: 'absolute',
                left: '51%',
                top: '73%',
                width: '15%',
                height: '7%',
                zIndex: 2,
                cursor: 'pointer',
              }}></a>
      </div>
      <div className='d-md-none d-block'>
        <Image src="/img/m-banner.jpg" className="w-100 mybanner" alt="Easy Swipe" width={390} height={684} />
        <a data-bs-target="#exampleModal1" data-bs-toggle="modal" title="" style={{
                position: 'absolute',
                left: '33%',
                top: '80%',
                width: '35%',
                height: '4%',
                zIndex: 2,
                cursor: 'pointer',
              }}></a>
        </div>
    </section>
    <Bank />
    <section className="same-gap bg-white">
        <div className="container">
            <div className="row d-flex align-content-center justify-content-center">
                <div className="title text-center">
                    <h2 className="text-main">About Easy Swipe </h2>
                </div>

                <div className="col-md-6 text-center ">
                    <Image src="/img/About-C2C.jpg" data-aos="fade-right" data-aos-duration="1500" alt="About" className="img-fluid mb-2 p-3" width={705} height={429} />
                </div>
                <div className="col-md-6  d-flex align-content-center align-items-center" data-aos="fade-left" data-aos-duration="1500">
                    <div>
                        <div className="title text-left">
                            <p className="mb-3 fs-3 fw-bold text-main"> Unlock Instant Financial Flexibility with Spot Cash Against Credit Card Services</p>
                        </div>

                        <p className="text-justify lh-lg fs65">Are you in Bengaluru and need immediate cash? Look no further! At Easy Swipe, we specialize in providing fast and secure spot cash against credit cards, offering you an effortless solution to your financial needs. With our &ldquo;Credit Card Swipe Cash&ldquo; service, you can transfer money from your credit card to your bank account instantly.
                        </p>
                        <p className="text-justify lh-lg fs65">
                            Don&apos;t let financial emergencies catch you off guard. With Easy Swipe, getting cash from your credit card with one easy swipe has never been easier. Contact us today to find out how we can assist you in accessing instant cash when you need it most.
                        </p>
                    </div>

                </div>
            </div>
        </div>

    </section>
    <section className="project-info-section same-gap mysec" data-aos="fade-up" data-bg-color="#F6EBE7" style={{ backgroundColor: 'rgb(246, 235, 231)' }}>
        <div className="container">
            <div className="title text-center">
                <h2 className="text-main mb-0">Why Choose Easy Swipe?
                </h2>
                <p className="text-main">Choose Easy Swipe for fast, secure, and reliable spot cash solutions that cater to your financial needs with ease and transparency.
                </p>
            </div>

            <div className="project-info-div">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4" data-aos="fade-right" data-aos-duration="1500">
                        <div className="project-info-item">
                            <div className="project-info-inner-div ">
                                <Image src="/img/Fast-Approval.png" alt="Approval" width={128} height={128} className="img-fluid d-block mx-auto mb-4" />
                                <p className="fs-4 fw-bold text-main">Swift Approval</p>
                                <p className="text-dark">Get instant cash against your credit card with rapid approval! Our seamless process ensures you receive secure spot cash for your urgent needs in Bangalore, quickly and efficiently.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4" data-aos="fade-up" data-aos-duration="1500">
                        <div className="project-info-item">
                            <div className="project-info-inner-div ">
                                <Image src="/img/No-Hidden-Fees.png" alt="Fees" width={128} height={128} className="img-fluid d-block mx-auto mb-4" />
                                <p className="fs-4 fw-bold text-main">No Hidden Fees</p>
                                <p className="text-dark">Enjoy immediate cash against your credit card with complete transparency. We pride ourselves on a hassle-free process with no hidden fees, making it easy to access emergency funds.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4" data-aos="fade-left" data-aos-duration="1500">
                        <div className="project-info-item">
                            <div className="project-info-inner-div ">
                                <Image src="/img/Secure-Transaction.png" alt="Transaction" width={128} height={128} className="img-fluid d-block mx-auto mb-4" />
                                <p className="fs-4 fw-bold text-main">Secure Transaction</p>
                                <p className="text-dark">Trust in our secure transaction process. Easy Swipe offers instant cash against your credit card in Bangalore with guaranteed security, ensuring your financial safety at every step.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4" data-aos="fade-right" data-aos-duration="1500">
                        <div className="project-info-item">
                            <div className="project-info-inner-div ">
                                <Image src="/img/Low-Interest-Rate.png" alt="Interest" width={128} height={128} className="img-fluid d-block mx-auto mb-4" />
                                <p className="fs-4 fw-bold text-main">Competitive Interest Rate</p>
                                <p className="text-dark">Benefit from our low interest rate of just 2%*. We provide affordable and reliable financial assistance, offering quick cash against your credit card to meet your urgent needs.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4" data-aos="fade-up" data-aos-duration="1500">
                        <div className="project-info-item">
                            <div className="project-info-inner-div ">
                                <Image src="/img/Flexible-Repayment-Options.png" alt="Repayment" width={128} height={128} className="img-fluid d-block mx-auto mb-4" />
                                <p className="fs-4 fw-bold text-main">Flexible Repayment Plans</p>
                                <p className="text-dark">Take advantage of our flexible repayment options. Easy Swipe offers tailored solutions to fit your financial convenience, making it easier to manage your cash flow.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4" data-aos="fade-left" data-aos-duration="1500">
                        <div className="project-info-item">
                            <div className="project-info-inner-div ">
                                <Image src="/img/24x7.png" alt="Customer" width={128} height={128} className="img-fluid d-block mx-auto mb-4" />
                                <p className="fs-4 fw-bold text-main">24/7 Customer Support</p>
                                <p className="text-dark">Access 24/7 customer support for all your needs. Whether you need quick cash against your credit card in Bangalore or have questions, our dedicated team is here to assist you anytime, anywhere.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="project-info-section same-gap mysec" data-bg-color="#fff" data-aos="fade-right" data-aos-duration="1500">
        <div className="container">
            <div className="title text-center">
                <h2 className="text-main mb-0">How it Works ? </h2>
                <p className="text-main">Get Quick Cash Against Credit Card in Bangalore - Simple, Easy, and Fast Process Explained!
                </p>
            </div>

            <div className="project-info-div">
                <div className="col-md-8 d-block mx-auto">
                <Image
                  src="/img/how-it-work.webp"
                  alt="How it works"
                  layout="responsive" // Adjust as needed, 'intrinsic', 'fixed', or 'fill' can be used based on your requirement
                  width={400} // Specify appropriate width
                  height={400} // Specify appropriate height
                  unoptimized // Disable optimization for animated GIFs
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  style={{ filter: 'drop-shadow(1px 1px 10px #ddd7d7)' }}
                />
                </div>
            </div>
        </div>
    </section>
    <section className="section same-gap testimonal mysec" style={{ backgroundColor: "#F6EBE7" }} data-aos="fade-right" data-aos-duration="1500">
        <div className="container">
            <div className="row py-4">
                <div className="title text-center">
                    <h2 className="text-main">What Our Clients Say&apos;s</h2>
                </div>
            </div>

            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-caption">
                            <p className="text-center text-white mb-0">
                            &ldquo;Easy Swipe this company is amazing with my emergency time they help to withdraw money from my HDFC credit card to bank account that doing such amazing work in Bangalore city for helping peoples and their charging very minimum fees 2% only I suggest this C2C Enterprises company for her Bangalore peoples emergency needs thank you Team Easy Swipe.&ldquo;
                            </p>
                            <div id="image-caption" className="text-white text-center">
                                <strong>Pranay Rao</strong>
                                <br />
                                <small></small>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <p className="text-center text-white mb-0">
                            &ldquo;I used c2c cash transfer from credit card to bank account service to get cash against my Indusind bank credit card. its was soo easy and fast. i recommend this service. compared to cred or phone pay, Easy Swipe charges is affordable.&ldquo;
                            </p>
                            <div id="image-caption" className="text-white text-center">
                                <strong>Praveen GS</strong>
                                <br />
                                <small></small>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <p className="text-center text-white mb-0">
                            &ldquo;Very helpful service and excellent coordination and quick transaction. I came for first time seeing google. Thank u judar and Raghu&ldquo;
                            </p>
                            <div id="image-caption" className="text-dark text-center">
                                <strong>Kanchana Velu</strong>
                                <br />
                                <small></small>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev text-decoration-none" href="#demo" data-bs-slide="prev">
                    <i className="fas fa-arrow-left"></i>
                </a>
                <a className="carousel-control-next text-decoration-none" href="#demo" data-bs-slide="next">
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </section>
    <section className="same-gap mysec" style={{ backgroundColor: '#fff', backgroundImage: 'url(/img/bg.png)', backgroundSize: 'cover' }} data-aos="fade-right" data-aos-duration="1500">
        <div className="container">
            <div className="row">
                <div className="title text-center">
                    <h2 className="text-main">FAQ&apos;s</h2>
                </div>
                <div className="col-lg-12">
                    <div className="tp-faq-tab-content tp-accordion">
                        <div className="accordion" id="general_accordion">
                            <div className="accordion-item tp-faq-active">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        1. What documents are required to obtain cash against my credit card?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#general_accordion">
                                    <div className="accordion-body">
                                        <p>
                                            To access cash against your credit card, you&apos;ll need to provide a digital copy of your PAN Card and Aadhar Card. For a detailed explanation of the process, please call us at +91-7090122133. We&apos;re here to assist you!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        2. How can I obtain cash against my credit card?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#general_accordion">
                                    <div className="accordion-body">
                                        <p>
                                            You have two convenient options to get cash against your credit card: either through our online service or by visiting our office in person. For a complete explanation of the process, call us at +91-7090122133. We&apos;re here to guide you!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        3. Is it safe to get cash using my credit card?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#general_accordion">
                                    <div className="accordion-body">
                                        <p>
                                            Yes, it is safe. Obtaining cash from your credit card is as secure as using it for purchases or bill payments. The cash will be instantly credited to your account. For more details on the process, call us at +91-7090122133. We&apos;re here to assist you!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        4. What does &ldquo;cash against a credit card&ldquo; mean?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#general_accordion">
                                    <div className="accordion-body">
                                        <p>
                                            It means you can withdraw cash from your credit card&apos;s available balance. We simply swipe your card, and the funds are transferred to your account immediately. For a detailed explanation of the process, call us at +91-7090122133. We&apos;re here to help!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  );
}
