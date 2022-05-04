import '../Styling/contact.css';
import { useState, useEffect } from 'react';
import plane from '../Media/Icon_Submit.svg';
import valid from '../Media/Icon_Valid.svg';

const Contact = () => {
  const initialValues = { name: '', email: '', phoneOne: '', message: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, isSubmit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else {
      if (!regex.test(values.email)) {
        errors.email = 'Invalid email address';
      }
    }
    if (!values.message) {
      errors.message = 'Please enter a message';
    }
    return errors;
  };

  return (
    <div>
      <hr></hr>
      <div className="container">
        <h1>Contact us</h1>
        <p>
          Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi
          aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at
          vix.
        </p>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div>
            <img src={valid} alt=""></img>
            <h2>Your message has been sent</h2>
            <p>We will be in contact with you within 24 hours.</p>
          </div>
        ) : (
          <div></div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Full name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            ></input>
          </div>
          <p className="error_msg">{formErrors.name}</p>
          <div className="field">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            ></input>
            <p className="error_msg">{formErrors.email}</p>
          </div>
          <div className="field">
            <label>
              Phone number 01 <span>- optional</span>{' '}
            </label>
            <input
              type="tel"
              name="phoneOne"
              value={formValues.phoneOne}
              onChange={handleChange}
            ></input>
          </div>
          <button className="add_phone">Add new phone number</button>
          <div className="field">
            <div className="message_text_container">
              <label>Message</label>
              <p className="max_text_length_msg">
                Maximum text length is 500 characters
              </p>
            </div>
            <textarea
              type="text"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <p className="error_msg message_error_msg">{formErrors.message}</p>
          <input type="submit" value="Submit" className="submit_button"></input>
          <img src={plane} className="submit_img" alt=""></img>
        </form>
      </div>
    </div>
  );
};

export default Contact;
