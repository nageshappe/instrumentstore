import axios from 'axios';

const PRODUCT_API_LOGIN_URL="http://localhost:8080/login";
const PRODUCT_API_USERID_URL="http://localhost:8080/userid";

class LoginService{

  
    getUserId(email)
    {
        return axios.get(PRODUCT_API_USERID_URL+'/'+email);
    }


    checkUser(check)
    {
        return axios.post(PRODUCT_API_LOGIN_URL,check);
    }
}

export default new LoginService()