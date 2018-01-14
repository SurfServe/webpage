import React, { Component } from "react";
import "../styles/ContactForm.css";

class ContactForm extends Component {
  render() {
    return (
      <div className="form-box section-contact-form">
        <div className="row">
          <h2>We'd love to hear from you</h2>
        </div>
        <p className="long-copy">
        To learn more about volunteering, donating, or if you know of an organization in need of our help, please fill out this form.
        </p>
        <div className="row">
          <form className="contact-form" action="#" method="post">
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
                />
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="find-us">How did you find us?</label>
              </div>
              <div className="col span-2-of-3">
                <select name="find-us" id="find-us" defaultValue="Friends">
                  <option value="friends">Friends</option>
                  <option value="search">Search engine</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="news">Newsletter</label>
              </div>
              <div className="col span-2-of-3">
                <input type="checkbox" name="news" id="news" checked /> Yes,
                please
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="message">Drop us a message</label>
              </div>
              <div className="col span-2-of-3">
                <textarea name="message" placeholder="Your message" />
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label>&nbsp;</label>
              </div>
              <div className="col span-2-of-3">
                <input type="submit" value="Send it!" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
