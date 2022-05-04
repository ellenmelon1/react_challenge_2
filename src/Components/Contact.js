import '../Styling/contact.css';
import { useState } from 'react';

const Contact = () => {
  const initialValues = { name: '', email: '', phoneOne: '', message: '' };
  const [formValues, setFormValues] = useState(initialValues);

  return (
    <div>
      <hr></hr>
      <div className="container">
        <form>
          <h1>Contact us</h1>
          <p>
            Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi
            aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan
            at vix.
          </p>
          <div className="field">
            <label>Full name</label>
            <input type="text" name="name"></input>
          </div>
          <div className="field">
            <label>Email address</label>
            <input type="email" name="email"></input>
          </div>
          <div className="field">
            <label>
              Phone number 01 <span>- optional</span>{' '}
            </label>
            <input type="number" name="phoneOne"></input>
          </div>
          <button className="add_phone">Add new phone number</button>
          <div className="field">
            <div className="message_text_container">
              <label>Message</label>
              <p className="max_text_length_msg">
                Maximum text length is 500 characters
              </p>
            </div>
            <textarea type="text" name="message"></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
