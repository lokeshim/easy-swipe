// pages/contact.js
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Contact() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/self-declaration.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setMessage({ type: 'success', text: "Email sent successfully!" });
        reset(); 
      } else {
        setMessage({ type: 'error', text: result.errors.join(' ') });
      }
    } catch (error) {
      console.error(error);
      setMessage({ type: 'error', text: "Error sending email." });
    }
  };

  return (
    <>
      <Head>
        <title>Self Declaration</title>
        <meta name="description" content="Self Declaration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.easyswipe.in/mail" />  
      </Head>

      <section className="bg-light mt-5 py-5">
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center mb-3">
              <h1 className="display-4 mb-4">
                Confirm Your Transaction<span className="text-danger">.</span>
              </h1>
              <p className="lead">
                Please provide your valid information for KYC (Know Your
                Customer) by sharing your Aadhar card number, PAN card, full
                name, and the last four digits of your card. After you fill out
                this form, it will be sent to your email. Make sure to attach
                your Aadhar card and PAN card to that email.
              </p>
            </div>
          </div>
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
              <div className="col-12">
                {message && (
                  <div
                    id="message"
                    className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}
                    role="alert"
                  >
                    {message.text}
                  </div>
                )}
              </div>
              <div className="col-md-4">
                <label className="form-label">Applicant Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span className="text-danger">This field is required</span>}
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Aadhar Number</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-id-card"></i>
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Aadhar Number"
                    {...register("aadharnumber", { required: true })}
                  />
                  {errors.aadharnumber && <span className="text-danger">This field is required</span>}
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Last 4 Digits of Card No.</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-credit-card"></i>
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Card Number"
                    {...register("cardnumber", { required: true })}
                  />
                  {errors.cardnumber && <span className="text-danger">This field is required</span>}
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Bank Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-building"></i>
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Bank Name"
                    {...register("bankname", { required: true })}
                  />
                  {errors.bankname && <span className="text-danger">This field is required</span>}
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Enter Amount</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-inr"></i>
                  </span>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Enter Amount"
                    {...register("amount", { required: true })}
                  />
                  {errors.amount && <span className="text-danger">This field is required</span>}
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Account Holder Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Account Holder Name"
                    {...register("accholdername", { required: true })}
                  />
                  {errors.accholdername && <span className="text-danger">This field is required</span>}
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Account Number</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-hashtag"></i>
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Account Number"
                    {...register("accnum", { required: true })}
                  />
                  {errors.accnum && <span className="text-danger">This field is required</span>}
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Bank IFSC Code</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-code"></i>
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Bank IFSC Code"
                    {...register("ifsc", { required: true })}
                  />
                  {errors.ifsc && <span className="text-danger">This field is required</span>}
                </div>
              </div>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                {...register("confirm", { required: true })}
              />
              <label className="form-check-label">
                I confirm that all the details mentioned above are accurate.
              </label>
              {errors.confirm && <span className="text-danger">You must confirm the details</span>}
            </div>

            <div className="text-center">
              <button className="btn btn-danger" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
