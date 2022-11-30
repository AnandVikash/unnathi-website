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
    displayRazorpay(250);
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
      key: "rzp_test_C72Sv4nEj0YmsA",
      // also remove TEST from line no. 118
      currency: "INR",
      amount: amount * 100,
      name: "Sphoorti",
      description: "Thanks for Purchasing",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1280px-Test-Logo.svg.png",

      // handler: function (response) {
      //   handlePaymentSuccess(response);
      // },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <>
      <BannerTitle
        title="Donate Us"
        titleTag="h1"
        titleColor="#fff"
        localImg="banner-5.jpg"
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
              <h3>Leave us a message</h3>
              {/* onSubmit={handleSubmit} */}
              <form>
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
