import axios from 'axios';

const CART_BASE_URL="http://localhost:8080/cart";
const CARTADD_BASE_URL="http://localhost:8080/home";
const CARTDELETE_BASE_URL="http://localhost:8080/delete";
const CARTORDER_BASE_URL="http://localhost:8080/placeOrder";


class CartService{

    getCartItems(userid){

        return axios.get(CART_BASE_URL+'/'+userid);
    }

    addItemCart(product,userid){

        return axios.post(CARTADD_BASE_URL+'/'+userid,product);
    }
  
   deleteCartItem(userid,product)
   {
       return axios.post(CARTDELETE_BASE_URL+'/'+userid+'/'+product);
   }

   placeOrder(userid)
   {
       return axios.post(CARTORDER_BASE_URL+'/'+userid);
   }

   placeSingleOrder(userid,productname)
   {
       return axios.post(CARTORDER_BASE_URL+'/'+userid+'/'+productname);
   }
}

export default new CartService()