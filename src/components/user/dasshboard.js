import Nav from '../nav';
import {connect} from 'react-redux';
import Footer from '../footer';
import Sidebar from '../sidebar';
import Home from './../index';
import {useState,useEffect} from 'react';
import {millisecondsToHuman} from './../../helpers/index';
function Account(props){
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/orders/",{
            method:'POST',
            body:JSON.stringify({
                userid:props.user._id
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setOrders(data);
        }).catch((error)=>console.warn('something went wrong',error));
    },[])
    console.log(orders.length)
    if(props.loginStatus===true)
  
    return(
        <>
        <Nav/><br/><br/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2" id="sidebar" style={{position:"relative"}}>
                    <Sidebar/>
                </div>
                <div className="col-sm-10">
                        <div className="row">
                        
                        <div className="col-md-12" style={{position:"relative"}}>
                            <div className="row mb-4 text-center">
                                <div className="col-sm-4">
                                    <div className="card bg-info text-white">
                                        <div className="card-body">
                                            <h3>Total Sells <span className="fa fa-check"></span></h3>
                                        </div>
                                        <div className="card-footer">
                                            <p className="text-center text-white">120</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card bg-success text-white">
                                        <div className="card-body">
                                            <h3>Total Revenue <span className="fa fa-money-bill-wave"></span></h3>
                                        </div>
                                        <div className="card-footer">
                                            <p className="text-center text-white">120</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card bg-warning text-white">
                                        <div className="card-body">
                                            <h3>Total Products in Cart <span className="fa fa-shopping-cart"></span></h3>
                                        </div>
                                        <div className="card-footer">
                                            <p className="text-center text-white">120</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-sm-12">
                                    <div className="user-details box-shadow p-3 bg-light">
                                        <h5 className="text-center pb-3">Recent Purchases</h5>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th>Name</th>
                                                    <th>Image</th>
                                                    <th>Price</th>
                                                    <th>Category</th>
                                                    <th>Rating</th>
                                                    <th>Date</th>
                                                </tr>
                                                <tr>
                                                    <td scope="row"></td>
                                                    <td></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.length===0?null:orders.map((order,index)=>{
                                                    return <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{order.name}</td>
                                                        <td><img src={order.product_url} alt="product" width="15%"/></td>
                                                        <td>{order.product_price}</td>
                                                        <td>{order.product_category}</td>
                                                        <td>{order.product_rating}</td>
                                                        <td>{order.product_description}</td>
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            
        </div>
        <Footer/>
        </>
    );else{
        props.history.push("/")
         return (<Home/>)
    }
}
function mapStateToProps(state){
    return{
        loginStatus:state.Auth.loginStatus,
        user:state.Auth.user
    }
}
export default connect(mapStateToProps,null)(Account)
