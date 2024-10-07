// pages/about.js
import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function About() {
  const [swipeAmount, setSwipeAmount] = useState(1000);
  const [selectedPercentage, setSelectedPercentage] = useState(2);
  const [calculationHistory, setCalculationHistory] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [result, setResult] = useState({
    charges: 0,
    netAmount: 0,
  });
  const [activeTab, setActiveTab] = useState("calculator"); // State for active tab

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handlePercentageChange = (percentage) => {
    setSelectedPercentage(percentage);
  };

  const calculateCharges = () => {
    const charges = (swipeAmount * selectedPercentage) / 100;
    const netAmount = swipeAmount - charges;
    setResult({ charges, netAmount });
    addToHistory(swipeAmount, selectedPercentage, charges, netAmount);
  };

  const addToHistory = (amount, percentage, charges, net) => {
    const newHistory = [
      { amount, percentage, charges, net, date: new Date() },
      ...calculationHistory,
    ];
    setCalculationHistory(newHistory.slice(0, 5));
  };

  return (
    <>
      {/* SEO Head Section */}
      <Head>
        <title>Credit Card Cash Withdrawal Calculator | EasySwipe</title>
        <meta
          name="description"
          content="Use our Credit Card Cash Withdrawal Calculator to easily calculate charges on cash withdrawals from your credit card."
        />
        <meta
          name="keywords"
          content="credit card, cash withdrawal, calculator, credit card charges, cash advance fees, credit card cash calculator"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="EasySwipe" />
        <meta
          property="og:title"
          content="Credit Card Cash Withdrawal Calculator"
        />
        <meta
          property="og:description"
          content="Easily calculate cash withdrawal charges using our Credit Card Cash Withdrawal Calculator."
        />
        <meta
          property="og:url"
          content="https://www.easyswipe.in/credit-card-cash-withdrawal-calculator/"
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://www.easyswipe.in/credit-card-cash-withdrawal-calculator/"
        />
      </Head>

      {/* About breadcrumb area start */}
      <section
        className="custom-header d-none"
        style={{ background: "url('/img/About-Us-header.jpg')" }}
      ></section>
      {/* About breadcrumb area end */}
      <h1 className="d-none">CREDIT CARD CASH WITHDRAWAL CALCULATOR</h1>

      {/* Credit Card Cash Withdrawal Calculator Section */}
      <div className="container py-5 mt-3">
        <div className="col-md-6 px-3 d-block mx-auto">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title mb-2">
                CREDIT CARD CASH WITHDRAWAL CALCULATOR
              </h1>
              <p className="card-description mb-0">
                Calculate the charges for withdrawing cash against your credit
                card.
              </p>
            </div>
            <div className="card-content">
              <div className="toggle-container">
                <span className="toggle-label">Dark Mode</span>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={() => setIsDarkMode(!isDarkMode)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="tabs">
                <div
                  className={`tab ${
                    activeTab === "calculator" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("calculator")}
                >
                  Calculator
                </div>
                <div
                  className={`tab ${activeTab === "history" ? "active" : ""}`}
                  onClick={() => setActiveTab("history")}
                >
                  History
                </div>
              </div>

              {/* Conditional Rendering Based on Active Tab */}
              {activeTab === "calculator" && (
                <>
                  <div className="input-group">
                    <label htmlFor="swipeAmount">Swipe Amount (₹)</label>
                    <input
                      type="number"
                      id="swipeAmount"
                      value={swipeAmount}
                      onChange={(e) =>
                        setSwipeAmount(parseFloat(e.target.value))
                      }
                      min="0"
                      step="100"
                    />
                  </div>
                  <div className="input-group">
                    <label>Select Charge Percentage</label>
                    <div className="percentage-buttons">
                      {[2, 2.5, 3, 3.5, 5].map((percentage) => (
                        <button
                          key={percentage}
                          className={`percentage-button ${
                            selectedPercentage === percentage ? "active" : ""
                          }`}
                          onClick={() => handlePercentageChange(percentage)}
                        >
                          {percentage}%
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    className="calculate-button"
                    onClick={calculateCharges}
                  >
                    Calculate Charges
                  </button>
                </>
              )}

              {/* History Tab */}
              {activeTab === "history" && (
                <div className="card mt-3">
                  <div className="card-header">
                    <h2 className="card-title">History</h2>
                  </div>
                  <div className="card-content">
                    {calculationHistory.length === 0 ? (
                      <p>No history available.</p>
                    ) : (
                      <ul className="history-list">
                        {calculationHistory.map((item, index) => (
                          <li key={index} className="history-item">
                            <p>
                              <strong>Amount:</strong> ₹{item.amount.toFixed(2)}
                            </p>
                            <p>
                              <strong>Charge:</strong> {item.percentage}% (₹
                              {item.charges.toFixed(2)})
                            </p>
                            <p>
                              <strong>Net:</strong> ₹{item.net.toFixed(2)}
                            </p>
                            <p>
                              <small>{item.date.toLocaleString()}</small>
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* New Section for Calculation Result */}
          {result.netAmount > 0 && (
            <div className="result-section mt-4">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Calculation Result</h2>
                </div>
                <div className="card-content">
                  <div className="result-item">
                    <span className="result-label">Selected Amount:</span>
                    <span className="result-value">
                      ₹{swipeAmount.toFixed(2)}
                    </span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Charge Percentage:</span>
                    <span className="result-value">{selectedPercentage}%</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Charges Amount:</span>
                    <span className="result-value">
                      ₹{result.charges.toFixed(2)}
                    </span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Net Amount to Transfer:</span>
                    <span className="result-value net-amount">
                      ₹{result.netAmount.toFixed(2)}
                    </span>
                  </div>
                  <button className="transfer-button btn bg-success my-3 w-100">
                    Transfer to Bank Account
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
