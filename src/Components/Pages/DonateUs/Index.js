import React, { useState } from "react";
import styles from "./donate.module.css";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
import { Link } from "react-router-dom";
import MainLinksSideBar from "../../Assets/ElementsUi/Sidebar/NavLinksSidebar/Index";
export default function Index() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    amount: "",
  });

  function fillForm(event) {
    const { name, value } = event.target;
    setForm((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("raghu");
    displayRazorpay(form.amount);
  }

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_live_qthS6JwQNuJscL",
      // also remove TEST from line no. 118
      currency: "INR",
      amount: amount * 100,
      name: "Unnathi Healing Solution",
      description: "Thanks for Purchasing",
      image: "https://unnathi.org/images/logonew.jpg",

      // handler: function (response) {
      //   handlePaymentSuccess(response);
      // },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const updateAmount = (amounts) => {
    setForm((prevValue) => {
      return {
        ...prevValue,
        amount: amounts,
      };
    });
  };
  return (
    <>
      <BannerTitle
        title="Donate Us"
        titleTag="h1"
        titleColor="#fff"
        localImg="donation.jpg"
        imgColor="696969"
      />
      <div className={styles.HealingMainContainer}>
        <div className={styles.HealingContainer}>
          <div
            className={styles.HealingText}
            data-aos="fade-up-right"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <div className={styles.FormsContainer}>
              <h3>Donate Here</h3>
              {/* onSubmit={handleSubmit} */}
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={form.name}
                    onChange={fillForm}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Your Email"
                    value={form.email}
                    onChange={fillForm}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={fillForm}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="amount"
                    placeholder="Enter Your Amount"
                    value={form.amount}
                    onChange={fillForm}
                  />
                </div>
                <div className={styles.updateAmountButton}>
                  <a onClick={() => updateAmount("1001")}>1001/-</a>

                  <a onClick={() => updateAmount("2001")}>2001/-</a>

                  <a onClick={() => updateAmount("3001")}>3001/-</a>
                </div>
                {/* <div>
                  <select name="franchise" id="franchise">
                    <option value="" disabled selected hidden>
                      Select your Franchise
                    </option>
                    <option value="north">North</option>
                    <option value="south">South</option>
                    <option value="east">East</option>
                    <option value="west">West</option>
                  </select>
                </div> */}

                <div>
                  <textarea
                    rows="10"
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={fillForm}
                  />
                </div>

                <div className={styles.FormSubmit}>
                  <input type="submit" value="Send Message" />
                </div>
              </form>
            </div>
          </div>
          <div
            className={styles.HealingSidebar}
            data-aos="fade-up-left"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <MainLinksSideBar />
          </div>
        </div>
      </div>
    </>
  );
}
