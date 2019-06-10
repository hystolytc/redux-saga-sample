import axios from 'axios';

export const getProduct = async () => {
  try {
    const product = await axios.get('http://www.splashbase.co/api/v1/images/latest')
    return product.data.images;
  } catch(e) {
    console.log(e);
  }
}