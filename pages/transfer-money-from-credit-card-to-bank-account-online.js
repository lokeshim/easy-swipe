// pages/about.js
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>Transfer Money from Credit Card to Bank Account</title>
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
        Transfer Money from Credit Card to Bank Account
      </h1>
      <section className="mb-4" style={{ marginTop: "-120px" }}>
        <div className="container">
          <div className="row d-flex align-content-center justify-content-center">
            <div className="title text-center">
              <h2 className="text-main">
                Transfer Money from Credit Card to Bank Account
              </h2>
            </div>
            <div className="row d-flex align-items-center text-justify my-3">
              <div className="col-lg-6 col-12" data-aos="fade-right">
                <Image
                  src="/img/Transfer-Money-from-Credit-Card.jpg"
                  className="img-fluid mb-3"
                  alt="Card"
                  width={612}
                  height={408}
                />
              </div>
              <div className="col-lg-6 col-12" data-aos="fade-left">
                <p className="lh-lg">
                  Need to access funds directly in your bank account? Our online
                  service makes it simple to transfer money from your credit
                  card to your bank account seamlessly. Whether it’s a small
                  amount like ₹1,000 or a larger transfer of ₹10,000, we ensure
                  the process is smooth, secure, and hassle-free.
                </p>
                <p className=" "> <strong>Why Choose Our Service?</strong> </p>
                <p>
                  <strong>Ease of Use</strong>: Initiate transfers from the
                  comfort of your home with just a few clicks.
                </p>

                <p>
                  <strong>Quick Processing</strong>: Experience instant or
                  same-day transfers, depending on your bank&#39;s policies.
                </p>

                <p>
                  <strong>Secure Transactions</strong>: We prioritise your
                  financial security with end-to-end encryption and robust
                  safeguards.
                </p>

                <p>
                  <strong>Flexible Amounts</strong>: Transfer any amount that
                  suits your needs, whether it&rsquo;s for urgent bills,
                  emergencies, or&nbsp;personal&nbsp;use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
