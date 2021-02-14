import axios from 'axios';

const baseUrl = 'http://192.168.10.142:8000/api';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000, // 5000ms = 5s
});

const lumoAPI = {
  getAllProducts: () => {
    console.log('get products');
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
    console.log(data.toString());
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
