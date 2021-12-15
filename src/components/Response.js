import Nav from './nav';
import {connect} from 'react-redux';
import React, { useEffect } from 'react';
import {useState} from 'react';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
export default function Response(props){
    const [count,setCount]=useState();
    const startTimer=(start)=>{
        setCount(start);
        start-=1;
        if(start<0){
            props.history.push("/shop/")
            return;
        }
        else{
            setTimeout(()=>{
                startTimer(start);
            },1000);
        }
    }
    useEffect(()=>{
        startTimer(5);
    },[])
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto bg-success">
                    <div className="response-form text-center">
                        <div className="response-header p-4 mt-5">
                            <h2>{"Your payment was successful. Thank You for shopping with us."}</h2>
                        </div>
                        <div className="p-4 m-4">
                            <h4>Please Don't refresh page. Redirecting you in {count}</h4>
                            <h5>E-commerce Project made with ReacJS, Node js</h5>
                            <p>Self Project with all features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function mapStateToProps(state){
    return{
        loginStatus:state.Auth.loginStatus,
        user:state.Auth.user
    }
}