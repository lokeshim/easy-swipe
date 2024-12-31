// pages/about.js
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>
          Credit Card Swipe for Cash: Instant Access to Your Credit Limit
        </title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.easyswipe.in/about/" />
      </Head>
      {/* About breadcrumb area start */}
      <section
        className="custom-header"
        style={{ background: "url('/img/About-Us-header.jpg')" }}
      ></section>
      {/* About breadcrumb area end */}
      <h1 className="d-none">
        Credit Card Swipe for Cash: Instant Access to Your Credit Limit
      </h1>
      <section className="mb-4" style={{ marginTop: "-120px" }}>
        <div className="container">
          <div className="row d-flex align-content-center justify-content-center">
            <div className="title text-center">
              <h2 className="text-main">
                Credit Card Swipe for Cash: Instant Access to Your Credit Limit
              </h2>
            </div>
            <div className="row d-flex align-items-center text-justify my-3">
              <div className="col-lg-6 col-12" data-aos="fade-right">
                <Image
                  src="/img/Credit-Card-Swipe-for-Cash.jpg"
                  className="img-fluid mb-3"
                  alt="Card"
                  width={612}
                  height={408}
                />
              </div>
              <div className="col-lg-6 col-12" data-aos="fade-left">
                <p className="lh-lg">
                  Looking for a quick way to access cash in times of need? With
                  our Credit Card Swipe for Cash service, you can seamlessly
                  convert your credit card limit into instant cash. Perfect for
                  emergencies or immediate financial needs, this process offers
                  a hassle-free solution to turn your available credit into
                  liquid funds.
                </p>
                <p className=" ">
                  {" "}
                  <strong>Why Choose Credit Card Swipe for Cash?</strong>{" "}
                </p>
                <p>
                  <strong>Instant Availability</strong>: Get cash in hand within
                  minutes by simply swiping your credit card.
                </p>

                <p>
                  <strong>No Delays</strong>: Avoid the lengthy processes
                  associated with traditional cash loans.
                </p>

                <p>
                  <strong>Convenient and Easy</strong>: A straightforward
                  swipe-and-receive process ensures quick access to your funds.
                </p>

                <p>
                  <strong>Flexible Usage</strong>: Use the cash for any
                  purpose&mdash;emergencies, bills, shopping, or personal
                  expenses.
                </p>

                <p>
                  <strong>Secure Transactions</strong>: Our secure payment
                  terminals and systems ensure your
                  information&nbsp;is&nbsp;safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
