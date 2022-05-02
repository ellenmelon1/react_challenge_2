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
      console.log(err);
    });
};

fetchCarouselImages();
