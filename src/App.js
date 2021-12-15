import './App.css';
import {Router, Route,Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";
import factory from './store';
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';
import Home from './components/index';
import Login from './components/login';
import Register from './components/register';
import About from './components/about';
import Shop from './components/shop';
import Contact from './components/contact';
import Account from './components/user/account';
import Cart from './components/user/cart';
import Dashboard from './components/user/dasshboard';
import ViewProduct from './components/viewProduct';
import Products from './components/user/product';
import Response from './../src/components/Response';
import AdminDashboard from './../src/components/user/adminDashboard';
var history=createBrowserHistory();
const {store,persistor}=factory();

function App(props) {
  return (
    <Router forceRefresh={true} history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login/" component={Login}/>
        <Route exact path="/register/" component={Register}/>
        <Route exact path="/about/" component={About}/>
        <Route exact path="/shop/" component={Shop}/>
        <Route exact path="/shop/view/" component={ViewProduct}/>
        <Route exact path="/contact/" component={Contact}/>
        <Route exact path="/user/account/" component={Account}/>
        <Route exact path="/user/cart/" component={Cart}/>
        <Route exact path="/user/dashboard/" render={()=>store.getState().Auth.user.type==="admin"?<AdminDashboard/>:<Dashboard/>}/>
        <Route exact path="/user/products/" component={Products}/>
        <Route exact path="/response/" component={Response}/>
      </Switch>
    </Router>
  );
}
const onBeforeLift = () => ({});
function Index(){
  return(
    <Provider store={store}>
      <PersistGate loading={null} onBeforeLift={onBeforeLift} persistor={persistor}>
        <App/>
      </PersistGate>
  </Provider>
  );
}
export default Index;
