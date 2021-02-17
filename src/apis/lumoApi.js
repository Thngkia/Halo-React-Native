import axios from 'axios';
import {API_URL} from '@env';

const baseUrl = API_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000, // 5000ms = 5s
});

const lumoAPI = {
  getAllProducts: () => {
    return axiosInstance.get(`/products`);
  },
  getProductById: (id) => {
    return axiosInstance.get(`/products/${id}`);
  },
  getProductByBarcode: (barcode) => {
    return axiosInstance.get('/products/', {
      params: {
        barcode: barcode,
        inventory: '',
        description: '',
        manufacturer: '',
      },
    });
  },
  postReceiptByUser: (data) => {
    return axiosInstance.post('/receipts/?user=2', {
      description: 'demo',
      user: 2,
      products: data.toString(),
    });
  },
  getReceiptsByUser: () => {
    return axiosInstance.get('/receipts/', {
      params: {
        user: 2,
      },
    });
  },
  getReceiptsById: (receiptId) => {
    return axiosInstance.get(`/receipts/${receiptId}`);
  },
};

export default lumoAPI;
