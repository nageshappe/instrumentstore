import axios from 'axios';

const PRODUCT_API_SIGNUP_URL="http://localhost:8080/signup";

class SignupService{

  
    addUser(details)
    {
        return axios.post(PRODUCT_API_SIGNUP_URL,details);
    }
}

export default new SignupService()