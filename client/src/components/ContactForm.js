import React from "react";
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import "../styles/ContactForm.css";

// ENUMS
import { FIND_US_OPTIONS } from '../components/enums';

const ContactForm = ({ values, handleChange, handleSubmit }) => {
  return (
    <div className="form-box section-contact-form">
      <div className="row">
        <h2>We'd love to hear from you</h2>
      </div>
      <p className="long-copy">
      To learn more about volunteering, donating, or if you know of an organization in need of our help, please fill out this form.
      </p>
      <div className="row">
        <form className="contact-form">
          <div className="row">
            <div className="col span-1-of-3">
              <label htmlFor="name">Name</label>
            </div>
            <div className="col span-2-of-3">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label htmlFor="email">Email</label>
            </div>
            <div className="col span-2-of-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label htmlFor="find-us">How did you find us?</label>
            </div>
            <div className="col span-2-of-3">
              <select
                name="findUs"
                id="find-us"
                defaultValue="Select one"
                onChange={handleChange}
              >
                {FIND_US_OPTIONS.map(opt => (<option value={opt.value}>{opt.label}</option>))};
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label htmlFor="news">Newsletter</label>
            </div>
            <div className="col span-2-of-3">
              <input
                type="checkbox"
                name="newsletter"
                id="news"
                checked={values.newsletter}
                onChange={handleChange}
              />
              Yes, please
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label htmlFor="message">Drop us a message</label>
            </div>
            <div className="col span-2-of-3">
              <textarea
                name="message"
                placeholder="Your message"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label>&nbsp;</label>
            </div>
            <div className="col span-2-of-3">
              <button type="button" onClick={handleSubmit}>Send it!</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    findUs: '',
    newsletter: true,
    message: '',
  }),

  handleSubmit: (values) => {
    console.log('Values', values);
  },
})(ContactForm);
