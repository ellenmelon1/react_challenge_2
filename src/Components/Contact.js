import '../Styling/contact.css';
import { useEffect, useState } from 'react';
import plane from '../Media/Icon_Submit.svg';
import valid from '../Media/Icon_Valid.svg';
import { contactUs } from '../api';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    phoneOne: '',
    phoneTwo: '',
    message: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [addPhone, setAddPhone] = useState(false);
  const [addAddress, setAddAddress] = useState(false);
  const [messageColour, setMessageColour] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      contactUs(formValues, addAddress).catch((err) => {
        setErrorMessage(err);
        setIsSubmit(false);
      });
    } else {
      setIsSubmit(false);
    }
  }, [isSubmit, addAddress, formErrors, formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    if (value.length > 500) {
      setMessageColour(true);
    } else {
      setMessageColour(false);
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAddPhone = (e) => {
    e.preventDefault();
    setAddPhone((curr) => !curr);
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    setAddAddress((curr) => !curr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const postcodeRegex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;

    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.email) {
      errors.email = 'Email address is required';
    }
    if (!values.message) {
      errors.message = 'Please enter a message';
    }
    if (values.message.length > 500) {
      errors.message = 'Max length 500 characters';
    }
    if (values.phoneOne.length > 20) {
      errors.phoneOne = 'Invalid phone number';
    }
    if (values.phoneTwo.length > 20 && addPhone) {
      errors.phoneTwo = 'Invalid phone number';
    }
    if (addAddress) {
      if (!postcodeRegex.test(values.postcode)) {
        errors.postcode = 'Invalid postcode';
      }
      if (!values.postcode) {
        errors.postcode = 'Required';
      }
      if (!values.addressOne) {
        errors.addressOne = 'First line of address is required';
      }
      if (!values.city) {
        errors.city = 'Required';
      }
      if (!values.state) {
        errors.state = 'Required';
      }
      if (!values.country) {
        errors.country = 'Required';
      }
    }
    return errors;
  };

  return errorMessage ? (
    <div className="contact_error_message">
      <p>{errorMessage + ' Please try again'}</p>
    </div>
  ) : (
    <div className="background">
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
            <br></br>
            <div className="message_sent">
              <img src={valid} alt=""></img>
              <p id="message_sent_bold">Your message has been sent</p>
              <p id="message_sent_normal">
                We will be in contact with you within 24 hours.
              </p>
            </div>
            <div className="white_space_after_contact"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="name_and_email">
              <div className="field name">
                <label>Full name</label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                ></input>
                <p className="error_msg">{formErrors.name}</p>
              </div>
              <div className="field email">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                ></input>
                <p className="error_msg">{formErrors.email}</p>
              </div>
            </div>
            <div className="field phoneOne">
              <label>
                Phone number 01 <span>- optional</span>
              </label>
              <input
                type="tel"
                name="phoneOne"
                value={formValues.phoneOne}
                onChange={handleChange}
              ></input>
              <p className="error_msg">{formErrors.phoneOne}</p>
            </div>
            <div className={`field_visible_${addPhone}`}>
              <label>
                Phone number 02 <span>- optional</span>
              </label>
              <input
                type="tel"
                name="phoneTwo"
                value={formValues.phoneTwo}
                onChange={handleChange}
              ></input>
              <p className="error_msg">{formErrors.phoneTwo}</p>
            </div>
            <button
              type="button"
              className="add_phone"
              onClick={handleAddPhone}
            >
              Add new phone number
            </button>
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
                onChange={handleMessageChange}
                className={`message-too-long-${messageColour}`}
              ></textarea>
            </div>
            <p className="error_msg message_error_msg">{formErrors.message}</p>
            <label className="radio_container">
              <div className="radio_text">Add address details</div>
              <input type="checkbox" onClick={handleAddAddress}></input>
              <span className="checkmark"></span>
            </label>
            <div className={`add_address_visible_${addAddress}`}>
              <div className="field addressOne">
                <label>Address line 1</label>
                <input
                  type="text"
                  value={formValues.addressOne}
                  name="addressOne"
                  onChange={handleChange}
                ></input>
                <p className="error_msg">{formErrors.addressOne}</p>
              </div>
              <div className="field addressTwo">
                <label>
                  Address line 2 <span>- optional</span>
                </label>
                <input
                  type="text"
                  value={formValues.addressTwo}
                  name="addressTwo"
                  onChange={handleChange}
                ></input>
                <p className="error_msg"></p>
              </div>
              <div className="field city">
                <label>City/Town</label>
                <input
                  type="text"
                  value={formValues.city}
                  name="city"
                  onChange={handleChange}
                ></input>
                <p className="error_msg">{formErrors.city}</p>
              </div>
              <div className="field state">
                <label>State/County</label>
                <input
                  type="text"
                  value={formValues.state}
                  name="state"
                  onChange={handleChange}
                ></input>
                <p className="error_msg">{formErrors.state}</p>
              </div>
              <div className="field">
                <label>Postcode</label>
                <input
                  type="text"
                  value={formValues.postcode}
                  name="postcode"
                  onChange={handleChange}
                ></input>
                <p className="error_msg">{formErrors.postcode}</p>
              </div>
              <div className="field">
                <label>Country</label>
                <input
                  type="text"
                  value={formValues.country}
                  name="country"
                  onChange={handleChange}
                ></input>
                <p className="error_msg">{formErrors.country}</p>
              </div>
            </div>
            <div>
              <input
                type="submit"
                value="Submit"
                className="submit_button"
              ></input>
              <img src={plane} className="submit_img" alt=""></img>
            </div>
          </form>
        )}
        <div className={`white_space_needed_${!addAddress}`}></div>
      </div>
    </div>
  );
};

export default Contact;
