import { useState } from "react";
import Head from "next/head";

export default function SelfDeclaration() {
  const [formData, setFormData] = useState({
    name: "",
    accholname: "",
    bankname: "",
    cardnumber: "",
    amount: "",
    bankifsc: "",
    bankaccnum: "",
    aadharnum: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      { value: formData.name, message: "Name field cannot be blank" },
      { value: formData.cardnumber, message: "Card Number cannot be blank or more than 4 digits" },
      { value: formData.amount, message: "Amount cannot be blank" },
      { value: formData.bankname, message: "Bank Name cannot be blank" },
      { value: formData.bankaccnum, message: "Account Number cannot be blank" },
      { value: formData.bankifsc, message: "IFSC field cannot be blank" },
      { value: formData.accholname, message: "Account Holder Name cannot be blank" },
      { value: formData.aadharnum, message: "Aadhar Number cannot be blank" },
    ];

    for (const field of requiredFields) {
      if (!field.value) {
        alert(field.message);
        return;
      }
    }

    const mailsubject = `Confirmation of Transaction and Services - Card Ending in ${formData.cardnumber}`;
    const mailformat = `
To whom it may concern,

I hereby confirm that I have done transactions with, Easy Swipe to load an amount of Rs. ${formData.amount} to carry out utility/product purchase transactions.

I hereby indemnify Easy Swipe from any disputes arising in relation to this transaction in the future.

I hereby confirm that I will not raise any chargeback complaint for this transaction given against Easy Swipe and will not hold Easy Swipe for any disputes arising from this transaction in the future.

I have been serviced by the Easy Swipe Counter for the purpose it was meant for.

The amount received in the below account:

Account holder Name - ${formData.accholname}
Account Number - ${formData.bankaccnum}
IFSC Code - ${formData.bankifsc}
Bank Name - ${formData.bankname}

I may be identified through my:

a) Aadhar number ${formData.aadharnum}
b) Credit card last 4 digits ${formData.cardnumber}
`;

    const mailtolink = `mailto:c2centerprises.blr@gmail.com?subject=${encodeURIComponent(
      mailsubject
    )}&body=${encodeURIComponent(mailformat)}`;
    window.open(mailtolink);
  };

  return (
    <>
      <Head>
        <title>Self Declaration | Easyswipe.in</title>
        <meta name="description" content="With Easy Swipe, self-declaration is simple! Confirm your transaction securely and swiftly. Easy,transparent processing for all your credit card transactions." />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link href="mail.css" rel="stylesheet" />
        <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.easyswipe.in/mail/" />  
      </Head>
      <section className="bg-blue-50 py-5">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-center max-w-2xl">
              <h1 className="text-main text-2xl font-bold mb-4">
                Confirm Your Transaction<span className="text-danger">.</span>
              </h1>
              <p className="text-lg mb-0">
                Please provide your valid information for KYC (Know Your Customer) by sharing your Aadhar card number,
                PAN card, full name, and the last four digits of your card. After you fill out this form, it will be sent
                to your email. Make sure to attach your Aadhar card and PAN card to that email.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-blue-50 mail pb-5">
        <div className="absolute inset-0 bg-blue-50 h-48"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex justify-center">
            <div className="w-full lg:w-3/4 xl:w-2/3">
              <div className="bg-white shadow-lg rounded-lg p-8">
                <p className="text-danger mb-6">
                  Note: All form fields are required. Please fill each field to complete the process.
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="form-group relative">
                      <label className="block text-gray-700 font-semibold">Applicant Name</label>
                      <i className="fas fa-user input-icon absolute left-4 top-10 transform -translate-y-1/2 text-main text-xl pt-4"></i>
                      <input
                        className="form-input mt-2 block w-full border-2 border-primary rounded-lg pl-12 h-12 focus:border-primary focus:ring-0"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group relative">
                      <label className="block text-gray-700 font-semibold">Aadhar Number</label>
                      <i className="fas fa-id-card input-icon absolute left-4 top-10 transform -translate-y-1/2 text-main text-xl pt-4"></i>
                      <input
                        className="form-input mt-2 block w-full border-2 border-primary rounded-lg pl-12 h-12 focus:border-primary focus:ring-0"
                        type="text"
                        name="aadharnum"
                        placeholder="Aadhar Number"
                        value={formData.aadharnum}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group relative">
                      <label className="block text-gray-700 font-semibold">Last 4 Digits of Card No.</label>
                      <i className="fas fa-credit-card input-icon absolute left-4 top-10 transform -translate-y-1/2 text-main text-xl pt-4"></i>
                      <input
                        className="form-input mt-2 block w-full border-2 border-primary rounded-lg pl-12 h-12 focus:border-primary focus:ring-0"
                        type="text"
                        name="cardnumber"
                        placeholder="Card Number"
                        value={formData.cardnumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="form-group relative">
                      <label className="block text-gray-700 font-semibold">Bank Name</label>
                      <i className="fas fa-building input-icon absolute left-4 top-10 transform -translate-y-1/2 text-main text-xl pt-4"></i>
                      <input
                        className="form-input mt-2 block w-full border-2 border-primary rounded-lg pl-12 h-12 focus:border-primary focus:ring-0"
                        type="text"
                        name="bankname"
                        placeholder="Enter Bank Name"
                        value={formData.bankname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group relative">
                      <label className="block text-gray-700 font-semibold">Enter Amount</label>
                      <i className="fas fa-dollar-sign input-icon absolute left-4 top-10 transform -translate-y-1/2 text-main text-xl pt-4"></i>
                      <input
                        className="form-input mt-2 block w-full border-2 border-primary rounded-lg pl-12 h-12 focus:border-primary focus:ring-0"
                        type="number"
                        name="amount"
                        placeholder="Enter Amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group relative">
                      <label className="block text-gray-700 font-semibold">Account Holder Name</label>
                      <i className="fas fa-user input-icon absolute left-4 top-10 transform -translate-y-1/2 text-main text-xl pt-4"></i>
                      <input
                        className="form-input mt-2 block w-full border-2 border-primary rounded-lg pl-12 h-12 focus:border-primary focus:ring-0"
                        type="text"
                        name="accholname"
                        placeholder="Account Holder Name"
                        value={formData.accholname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="form-group relative">
                    <label className="block text-gray-700 font-semibold">Account Number</label>
                      <i className="fas fa-hashtag input-icon absolute left-4 top-10 transform -translate-y-1/2 text-main text-xl pt-4"></i>
                      <input
                        className="form-input mt-2 block w-full border-2 border-primary rounded-lg pl-12 h-12 focus:border-primary focus:ring-0"
                        type="text"
                        name="bankaccnum"
                        placeholder="Enter Account Number"
                        value={formData.bankaccnum}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group relative">
                      <label className="block text-gray-700 font-semibold">Bank IFSC Code</label>
                      <i className="fas fa-code input-icon absolute left-4 top-10 transform -translate-y-1/2 text-main text-xl pt-4"></i>
                      <input
                        className="form-input mt-2 block w-full border-2 border-primary rounded-lg pl-12 h-12 focus:border-primary focus:ring-0"
                        type="text"
                        name="bankifsc"
                        placeholder="Enter Bank IFSC Code"
                        value={formData.bankifsc}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-6">
                    <input
                      className="form-checkbox h-4 w-4 text-red-600 border-red-600 focus:ring-red-500"
                      type="checkbox"
                      id="flexCheckChecked"
                      required
                    />
                    <label className="text-gray-700 font-semibold" htmlFor="flexCheckChecked">
                      I confirm that all the details mentioned above are accurate.
                    </label>
                  </div>
                  <div className="mt-6">
                    <button className="btn btn-main btn-primary button-primary w-full" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

