import React from "react";
import "./style.css";

const Formik = () => {

  return (
    <>
      <div className="contact-map">

        <p>Contact Page</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616973.5604453757!2d63.943715812500024!3d27.711087600000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d51ef98b5509%3A0x1d890f8cf2d54a00!2sSasta%20Mart!5e0!3m2!1sen!2sin!4v1733915271074!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="form-container-formik">
        <div className="formLeftSide">
          <div className="para">
            <h2>Contact with Us</h2>
            <form action="https://formspree.io/f/xdkovpzv" method="POST" className="formik-form">
              <div className="input-block">
                <label htmlFor="user_name" className="input_label">
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="user_name"
                  required
                  autoComplete="off"
                  placeholder="Enter Name"
                />
              </div>

              <div className="input-block">
                <label htmlFor="user_email" className="input_label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="user_email"
                  required
                  placeholder="Enter Email"
                />
              </div>

              <textarea className="input-block" rows={4} name="message" placeholder="Enter your Thoughts"  ></textarea>


              <div className="modal-buttons">
                <button type="submit"   >
                  Send
                </button>
              </div>

            </form>
          </div>
        </div>
        <div className="side-image"></div>
      </div>
    </>
  )
}

export default Formik;
