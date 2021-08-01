import logo from './logo.svg';
import './App.css';
import ListProductComponent from './components/ListProductComponent';
import Navbar from './components/UserNavbar'
import {BrowserRouter as Router,Route , Switch} from 'react-router-dom'
import AddProductComponent from './components/AddProductComponent';
import EditProductComponent from './components/EditProductComponent';
import OrdersComponents from './components/OrdersComponents';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import LogoutComponent from './components/LogoutComponent'
import  ProductInfo from './components/ProductInfo';
import UserOrders from './components/UserOrders';
import UserCart from './components/UserCart';
import AddToCart from './components/AddToCart';
import DeleteCart from './components/DeleteCart';
import Protected from './components/Protected'
import ProtectedAdmin from './components/ProtectedAdmin';


function App() {
  return (
<>
      <Router>
      <Switch>
        <Route path ="/" exact component={LoginComponent}></Route>
        
        <Protected path='/home' exact component ={HomeComponent} />
        <Route path ="/login"  component={LoginComponent}></Route>
        <Route path ="/signup"  component={SignupComponent}></Route>
        <Route path ="/logout"  component={LogoutComponent}></Route>
        <ProtectedAdmin path ="/products"  component={ListProductComponent}/>
        <ProtectedAdmin path ="/admin"  component={ListProductComponent}/>
        <Protected path ="/cart/id"  component={UserCart}/>
        <ProtectedAdmin path="/delete/:productId" component={ListProductComponent}/>
        <Protected path="/deletecart/:productName" component={DeleteCart}/>
        <Protected path='/product-info/:productId' exact component={ProductInfo}/>
        <Protected path='/addcart/:productId' exact component={AddToCart}/>
        <Protected path ="/orders" component={UserOrders}/>
        <ProtectedAdmin path ="/allorders" component={OrdersComponents}/>
        <ProtectedAdmin path ="/add-product" component={AddProductComponent}/>
        <ProtectedAdmin path ="/edit-product/:productId" component={EditProductComponent}/>

      </Switch>
    
    </Router>
    </>
  );
}

export default App;
