import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track submission
  const [contactPurpose, setContactPurpose] = useState('');

  const handlePurposeChange = (e) => {
    setContactPurpose(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setFormSubmitted(true); 
  };

  return (
    <main className="contact">
      <header className="contact-header">
        <h1>Contact Me</h1>
      </header>
      <section className="contact-info">
        <p>Email: <a href="mailto:xuhaocheng2001@gmail.com">xuhaocheng2001@gmail.com</a></p>
        <p>Instagram: <a href="https://instagram.com/haocheng_xu_0509" target="_blank" rel="noopener noreferrer">@haocheng_xu_0509</a></p>
        <p>Phone: <a href="tel:+18573286252">857-328-6252</a></p>
      </section>
      <section className="contact-form">
        <h2>Contact Form</h2>

        {formSubmitted ? (
          <div className="thank-you">
            <h3>Thank You!</h3>
            <p>Your message has been submitted. I will get back to you soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="purpose">Purpose of Contact:</label>
              <select
                id="purpose"
                name="purpose"
                value={contactPurpose}
                onChange={handlePurposeChange}
              >
                <option value="">Select</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Photography Inquiry">Photography Inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {contactPurpose === 'Other' && (
              <div className="form-group">
                <label htmlFor="other-purpose">Specify Purpose:</label>
                <input
                  type="text"
                  id="other-purpose"
                  name="otherPurpose"
                  placeholder="Enter purpose"
                />
              </div>
            )}

            <button type="submit" className="submit-button">Submit</button>
          </form>
        )}
      </section>
    </main>
  );
};

export default Contact;
