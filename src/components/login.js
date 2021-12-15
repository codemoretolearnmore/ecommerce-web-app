import {Link} from 'react-router-dom';
import './index.css';
import React from 'react';
import {Validate} from './../helpers/index';
import $ from 'jquery';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
function Login(props){
    const [errors,setErrors]=useState({});
    const [loginStatus,setLoginStatus]=useState(props.loginStatus);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        console.log(props.history)
        if(props.loginStatus===true)
        props.history.push('/');
    },[])
    function login(evt){
        evt.preventDefault();
        const email=$('#log_email').val(),password=$('#log_pass').val();
        const user={email,password};
        const errors=Validate(user);
        if(errors.email!==undefined||errors.password!==undefined){
            setErrors(errors);
            // this.setState({errors})
            return;
        }else{
            // this.setState({errors:{}});
            setLoading(true);
            fetch('http://localhost:8080/login/',{
                method:'POST',
                body:JSON.stringify({
                    data:user
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((response)=>response.json())
            .then((data)=>{
                localStorage.setItem("token",data.token);
                console.log('data',data);
                if(data.user!==undefined){
                    setLoginStatus(true);
                    props.set(data.user)
                    setTimeout(()=>{
                        setLoading(false);
                        props.history.push('/');
                    },2000);
                }else{
                    alert(data.message);
                }
                
                
            }).catch((error)=>console.warn('something went wrong',error));
        }
    }

        return(
            <div className="container-fluid">
                <div className="row" style={{paddingTop:"3rem"}}>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 user">
                        <div className="user_form">
                            <form onSubmit={login}>
                                <div className="form-heading">
                                    <h3 className="text-center">Messenger</h3>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" id="log_email" placeholder="Enter Email Id"/>
                                    <p className="feedback-msg text-center p-0 m-0 text-danger">{errors.email}</p>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="password" id="log_pass" placeholder="Enter Password"/>
                                    <p className="feedback-msg text-center p-0 m-0 text-danger">{errors.password}</p>
                                </div>
                                <div className="form-group">
                                    <div className="remember">
                                        <input type="checkbox" className="" id="remember"/>
                                        <label style={{color:"white"}}>Remember Me</label>
                                    </div>
                                    <div className="forgot" style={{float:"right"}}>
                                        <Link to="/forgot_pass/" style={{color:"white"}}>Forgot Password?</Link>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" type="button" id="login" onClick={login}>
                                    {loading===true?<div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                    </div>:"Login"}
                                    </button>   
                                </div>
                                <div className="form-group text-center">
                                    <p className="text-center">or Login with</p>
                                    <button className="btn btn-social-icon btn-facebook btn-rounded"><span className="fa fa-facebook"></span></button>
                                    <button className="btn btn-social-icon btn-instagram btn-rounded"><span className="fa fa-instagram"></span></button>
                                    <button className="btn btn-social-icon btn-github btn-rounded"><span className="fa fa-github"></span></button>
                                </div>
                                <p style={{color:"white"}} className="go_to_register text-center">New to Messenger?<Link to='/register/' style={{color:"green"}}> register here</Link></p>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
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
function mapDispatchToProps(dispatch){
    return{
        set:(data)=>dispatch({type:'set',data})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)