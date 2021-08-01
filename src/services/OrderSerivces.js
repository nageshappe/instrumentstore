import axios from 'axios';

const PRODUCT_USERORDERS_BASE_URL="http://localhost:8080/orders";
const PRODUCT_ADMINORDERS_BASE_URL="http://localhost:8080/admin/getallorders";

class OrderService{

   

   getOrdersById(userid)
   {
        return axios.get(PRODUCT_USERORDERS_BASE_URL+'/'+userid);
   }
  
    getAllOrders(){
        return axios.get(PRODUCT_ADMINORDERS_BASE_URL);
    }

}

export default new OrderService()