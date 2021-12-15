import {Link} from 'react-router-dom';
import Nav from './../nav';
import {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import axios from 'axios';
import logo from './../logo192.png';
import {v4 as uuidv4} from 'uuid';
import {SECRET_KEY} from './config';
import Response from './../Response';
function Cart(props){
    const [productList,setProductList]=useState([{}]);
    const [totalAmount,setAmount]=useState(1);
    const [total,setTotal]=useState();
    const [show,setShow]=useState(false);
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
  
    async function displayRazorpay() {
      try {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
      );
  
      if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
      }
      
      // creating a new order
      const result = await axios.post("http://localhost:8080/payment/orders",{
          amount:totalAmount*100,receipt:uuidv4()
      });
  
      if (!result) {
          alert("Server error. Are you online?");
          return;
      }
  console.log('result',result);
      // Getting the order details back
      const { amount, id: order_id, currency } = result.data;
  
      const options = {
          key: SECRET_KEY, // Enter the Key ID generated from the Dashboard
          amount: amount.toString(),
          currency: currency,
          name: "CheckOut Form",
          description: "Checking Out Ecommerce Pankaj",
          image: { logo },
          order_id: order_id,
          handler: async function (response) {
            
              const data = {
                  orderCreationId: order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
                  amount: amount.toString(),
                  currency: currency,
                  userid:props.user_id,
                  productList
              };
  
              const result = await axios.post("http://localhost:8080/payment/success", data);
              console.log(result.data)
              props.history.push("/response/");
          },
          prefill: {
              name: props.user.name,
              email: props.user.email,
              contact: $('#checkout_phone').val(),
          },
          notes: {
              address: "Ecommerce Project Online",
          },
          theme: {
              color: "#61dafb",
          },
      };
  
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      paymentObject.on('payment.failed',function(resp){
          console.log(resp);
      })
      } catch (error) {
        console.log(error.response.data)
      }
  }
    function fetchProductList(){
        fetch("http://localhost:8080/cart/?userid="+props.user_id,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setProductList(data);
            setstate(data,"price");
            setstate(data,"count");
        }).catch((error)=>console.warn('something went wrong',error));
    }
    useEffect(()=>{
        fetchProductList();
        
    },[])
    function Action(action,product_id,count=1){
        if(action==="decrease" && count===0){
            return;
        }else{
            fetch("http://localhost:8080/cart/actions/",{
                method:'POST',
                body:JSON.stringify({
                    data:{
                        action,count,product_id,user_id:props.user_id
                    }
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((response)=>response.json())
            .then((data)=>{
                fetchProductList();
                console.log('ok');
            }).catch((error)=>console.warn('something went wrong',error));
        }
    }
    function setstate(productList,action){
        if(action==="price"){
            var total=productList.reduce(function(tot,obj){
                return tot+obj.product_price*obj.count;
            },0);
            setAmount(total);
        }else{
            var total=productList.reduce(function(tot,obj){
                return tot+obj.count;
            },0);
            setTotal(total);
        }
        
    }
    
    return(
        <>
        <Nav/><br/>
        <div className="container box-shadow">
            <div className="row">
                <div className="col-md-8 box-shadow p-3">
                    {show===false?<div className="cart p-3">
                        <div className="title">
                            <div className="row">
                                <div className="col">
                                    <h4>Shopping Cart</h4>
                                </div>
                                
                            </div>
                        </div>
                        <div className="product-list border-top border-bottom">
                            {productList.length>0?productList.map((product,index)=>{
                                return <div className="row align-items-center mb-2" key={index}>
                                <div className="col">
                                    <img src={product.product_url} alt="product"/>
                                </div>
                                <div className="col">
                                    <div className="row text-muted">{product.name}</div>
                                    <div className="row">Shoulder Bag</div>
                                </div>
                                <div className="col quantity">
                                    <button type="button" className="btn" onClick={()=>Action("decrease",product._id,product.count-1)}><span className="fa fa-minus"></span></button>
                                    {product.count}
                                    <button type="button" className="btn" onClick={()=>Action("increase",product._id,product.count+1)}><span className="fa fa-plus"></span></button>
                                </div>
                                <div className="col">
                                    <p>{product.product_price}</p>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn" onClick={()=>Action("delete",product._id)}><span className="fa fa-times"></span></button>
                                </div>
                            </div>
                            }):"No Product Availble"}
                        </div>
                    </div>:<div className="checkout-form">
                        <form>
                            <div className="form-group">
                                <input className="form-control" type="text" id="checkout_name" value={props.user.name} placeholder="Enter Name"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" id="checkout_email" value={props.user.email} placeholder="Enter Email"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="tel" id="checkout_phone" placeholder="Enter Contact No."/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" id="checkout_billing_address" placeholder="Enter Billing Address"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" id="checkout_shipping_address" placeholder="Enter Shipping Address"/>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-primary" onClick={displayRazorpay}>Proceed to Payment</button>
                                <button className="btn btn-secondary" onClick={()=>setShow(!show)}>Cancel</button>
                            </div>
                        </form>
                    </div>}
                </div>
                {show===false?<div className="col-md-4 p-3">
                    <div className="summary p-3 box-shadow">
                        <div>
                            <h5 className="text-center">Summary</h5><hr/>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <span>Total Item</span>
                            </div>
                            <div className="col-6 text-right">
                                <span>{total}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <span>SubTotal</span>
                            </div>
                            <div className="col-6 text-right">
                                <span><i className="fa fa-rupee-sign"></i> {totalAmount}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <span>Delivery Charges</span>
                            </div>
                            <div className="col-6 text-right">
                                <span>0</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <span>Total Amount</span>
                            </div>
                            <div className="col-6 text-right">
                                <span><i className="fa fa-rupee-sign"></i> {totalAmount}</span>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col-12">
                                {totalAmount!==0?<button onClick={()=>setShow(!show)} className="btn btn-warning text-light font-weight" style={{width:"100%"}} type="button">Checkout</button>
                                :null}
                                
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col-12">
                                <Link to="/shop/" className="btn btn-primary text-light font-weight" style={{width:"100%"}} type="button">{totalAmount!==0?"Continue to Shopping":"Shop Now"}</Link>
                            </div>
                        </div>
                    </div>
                </div>:null}
            </div>
        </div>
        </>
    );
}
function mapStateToProps(state){
    return{
        loginStatus:state.Auth.loginStatus,
        user_id:state.Auth.user._id,
        user:state.Auth.user
    }
}
export default connect(mapStateToProps,null)(Cart);