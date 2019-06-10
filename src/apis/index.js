import axios from 'axios';

export const getProduct = async () => {
  try {
    const product = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    return product.data;
  } catch(e) {
    console.log(e);
  }
}