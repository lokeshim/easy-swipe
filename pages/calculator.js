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
  const [animatedResult, setAnimatedResult] = useState({
    selectedAmount: 0,
    charges: 0,
    netAmount: 0,
  });
  const [activeTab, setActiveTab] = useState("calculator");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handlePercentageChange = (percentage) => {
    setSelectedPercentage(percentage);
    setToastMessage(""); // Reset toast message when changing percentage
  };

  const calculateCharges = () => {
    const charges = (swipeAmount * selectedPercentage) / 100;
    const netAmount = swipeAmount - charges;
    setResult({ charges, netAmount });
    addToHistory(swipeAmount, selectedPercentage, charges, netAmount);
    animateResult(swipeAmount, charges, netAmount);
    showToast(`Calculation complete. Net amount: ₹${netAmount.toFixed(2)}`);
  };

  const addToHistory = (amount, percentage, charges, net) => {
    const newHistory = [
      { amount, percentage, charges, net, date: new Date() },
      ...calculationHistory,
    ];
    setCalculationHistory(newHistory.slice(0, 5));
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 55000); // Duration of the toast message
  };

  const animateResult = (swipeAmount, charges, netAmount) => {
    let selectedCount = 0;
    let chargesCount = 0;
    let netCount = 0;

    const chargesInterval = Math.ceil(charges / 100); // Change the speed as needed
    const netInterval = Math.ceil(netAmount / 100); // Change the speed as needed
    const selectedInterval = Math.ceil(swipeAmount / 100); // Change the speed as needed

    const selectedTimer = setInterval(() => {
      if (selectedCount < swipeAmount) {
        selectedCount += selectedInterval;
        if (selectedCount > swipeAmount) selectedCount = swipeAmount; // Prevent overshoot
        setAnimatedResult((prev) => ({ ...prev, selectedAmount: selectedCount }));
      } else {
        clearInterval(selectedTimer);
      }
    }, 10); // Adjust the timing for smoother animation

    const chargesTimer = setInterval(() => {
      if (chargesCount < charges) {
        chargesCount += chargesInterval;
        if (chargesCount > charges) chargesCount = charges; // Prevent overshoot
        setAnimatedResult((prev) => ({ ...prev, charges: chargesCount }));
      } else {
        clearInterval(chargesTimer);
      }
    }, 10); // Adjust the timing for smoother animation

    const netTimer = setInterval(() => {
      if (netCount < netAmount) {
        netCount += netInterval;
        if (netCount > netAmount) netCount = netAmount; // Prevent overshoot
        setAnimatedResult((prev) => ({ ...prev, netAmount: netCount }));
      } else {
        clearInterval(netTimer);
      }
    }, 10); // Adjust the timing for smoother animation
  };

  return (
    <>
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

      <section
        className="custom-header d-none"
        style={{ background: "url('/img/About-Us-header.jpg')" }}
      ></section>
      <h1 className="d-none">CREDIT CARD CASH WITHDRAWAL CALCULATOR</h1>
<section className="mybg">
      <div className="container py-5 mt-3 ">
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
                      ₹{animatedResult.selectedAmount.toFixed(2)}
                    </span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Charge Percentage:</span>
                    <span className="result-value">{selectedPercentage}%</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Total Charges:</span>
                    <span className="result-value">
                      ₹{animatedResult.charges.toFixed(2)}
                    </span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Net Amount:</span>
                    <span className="result-value">
                      ₹{animatedResult.netAmount.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

{toastMessage && ( // Show toast every time a calculation is performed
            <div className="mydiv bg-white">
              {toastMessage}
            </div>
          )}
        </div>
      </div>
      </section>
    </>
  );
}
