import axios from 'axios';

const api = axios.create({
  baseURL: 'https://interview-assessment.api.avamae.co.uk',
});

export const fetchCarouselImages = () => {
  return api
    .get('/api/v1/home/banner-details')
    .then((res) => {
      return res.data['Details'];
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const contactUs = (formValues, addAddress) => {
  const {
    name,
    email,
    phoneOne,
    phoneTwo,
    message,
    addressOne,
    addressTwo,
    city,
    state,
    postcode,
    country,
  } = formValues;

  const postObject = {
    FullName: name,
    EmailAddress: email,
    PhoneNumbers: [],
    Message: message,
    bIncludeAddressDetails: addAddress,
    AddressDetails: {
      AddressLine1: addressOne,
      AddressLine2: addressTwo,
      CityTown: city,
      StateCounty: state,
      Postcode: postcode,
      Country: country,
    },
  };

  if (phoneOne) {
    postObject['PhoneNumbers'].push(phoneOne);
  }
  if (phoneTwo) {
    postObject['PhoneNumbers'].push(phoneTwo);
  }

  return api
    .post('/api/v1/contact-us/submit', postObject)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};
