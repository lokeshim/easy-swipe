import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

const CashAgainstCreditCardFeeCalculator = () => {
  const [transactionAmount, setTransactionAmount] = useState(25000);
  const [feePercentage, setFeePercentage] = useState(2);
  const [feeAmount, setFeeAmount] = useState(500);
  const [grandTotal, setGrandTotal] = useState(25500);

  const calculateAmount = () => {
    const fee = (transactionAmount * feePercentage) / 100;
    const total = transactionAmount + fee;
    setFeeAmount(fee);
    setGrandTotal(total);
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    const { name, email, phone, message } = data;

    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/917090122133?text=Full Name: ${encodeURIComponent(name)}%0AMobile Number: ${encodeURIComponent(phone)}%0AEmail ID: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    // Open WhatsApp URL in a new tab
    window.open(whatsappUrl, '_blank');
    reset(); 
  };

  return (
    <div>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div className="box-outer">
                <div className="form-box-t">
                  <h2>Easy Swipe</h2>
                  <form id="popup-form" onSubmit={handleSubmit(onSubmit)}>
                    <div id="popup-note"></div>
                    <div className="box">
                      <input
                        type="text"
                        className={`form-control form-group mb-3 ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Name"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                    </div>
                    <div className="box">
                      <input
                        type="email"
                        className={`form-control form-group mb-3 ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="Email"
                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                    </div>
                    <div className="box">
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
                    <div className="box-inner">
                      <textarea
                        className={`form-control form-group mb-3 ${errors.message ? 'is-invalid' : ''}`}
                        placeholder="Message"
                        {...register('message', { required: 'Message is required' })}
                      />
                      {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                    </div>
                    <div className="box-inner">
                      <button className="btn btn-danger" type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{ background: '#f5ad01' }}>
            <div className="modal-body" style={{ background: '#f5ad01' }}>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div className="box-outer">
                <div className="form-box-t">
                  <h2 className="fs-3 fw-bold text-main">Cash Against Credit Card Fee Calculator</h2>
                  <div className="mb-3">
                    <label htmlFor="totaltransectionamt" className="fs-6 text-main d-block mb-1">Transaction Amount (INR):</label>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        id="totaltransectionamt"
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(Number(e.target.value))}
                        placeholder=""
                      />
                      <span className="input-group-text p-0">₹</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="feePercentage" className="fs-6 text-main mb-1 d-block">Percentage Fee (%):</label>
                    <select
                      className="form-select form-select-lg mb-3"
                      id="feePercentage"
                      value={feePercentage}
                      onChange={(e) => setFeePercentage(Number(e.target.value))}
                    >
                      <option value="2">2 %</option>
                      <option value="2.5">2.5 %</option>
                      <option value="2.7">2.7 %</option>
                      <option value="3">3 %</option>
                      <option value="5">5 %</option>
                    </select>
                  </div>
                  <div className="d-grid mb-3">
                    <button className="btn btn-danger" onClick={calculateAmount}>Calculate</button>
                  </div>
                  <p className="text-muted mb-1 fw-bold text-main">Fee Amount: ₹ <span id="showPercentamt">{feeAmount}</span>/-</p>
                  <p className="text-muted mb-0 text-main fw-bold">Grand Total Amount (including fee): ₹ <span id="showfinalamthere">{grandTotal}</span>/-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar-box" style={{ position: 'fixed', top: '50%', right: '10px', zIndex: 99 }}>
        <div className="sidebar" id="sidebar">
          <div className="sidebar-icon">
            <a data-bs-toggle="modal" data-bs-target="#exampleModal1">
              <Image src="/img/swipe-card.png" id="diceImage" className="img-fluid" style={{ width: '50px' }} width={50} height={50} alt="Swipe Card" />
            </a><br/><br/><br/><br/><br/><br/>
            <a href="https://wa.me/917090122133">
              <Image src="/img/watsappnew.png" id="diceImage" className="img-fluid" style={{ width: '50px' }} width={50} height={50} alt="Swipe Card" />
            </a>
            <br/><br/>
            <a href="tel:+917090122133" className='ps-2 '>  <Image src="/img/phone-call.png" id="diceImage" className="img-fluid" style={{ width: '40px' }} width={40} height={40} alt="Swipe Card" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashAgainstCreditCardFeeCalculator;
