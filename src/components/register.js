import {Link} from 'react-router-dom';
import React from 'react';
import {Validate} from './../helpers/index'
import $ from 'jquery';
import {useState} from 'react';
export default function Register(props){
    const [errors,setErrors]=useState({});
    const [message,setMessage]=useState({});
    const [loading,setLoading]=useState(false);
    function register(evt){
        evt.preventDefault();
        
        const name=$('#reg_name').val(),email=$('#reg_email').val(),password=$('#reg_pass').val(),re_password=$('#re_reg_pass').val();
        const user={name,email,password,re_password};
        const errors=Validate(user);
        if(Object.keys(errors).length>0){
            setErrors(errors);
            return;
        }else{
            setLoading(true);
            setErrors({});
            fetch('http://localhost:8080/register/',{
                method:'POST',
                body:JSON.stringify({
                    data:user
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                setTimeout(()=>{
                    setLoading(false);
                    setMessage(data);
                },2000);
            }).catch((error)=>console.warn('something went wrong',error))
        }
    }

    return(
        <div className="container-fluid">
            <div className="row" style={{paddingTop:"3rem"}}>
                <div className="col-sm-4"></div>
                <div className="col-sm-4 user">
                    <div className="user_form">
                        <form onSubmit={register}>
                            <div className="form-heading">
                                <h3 className="text-center">Messenger</h3>
                            </div>
                            <div className="feedback">
                                <p className={"feedback-msg text-center"+(message.type==="error"?" text-danger":" text-success")}>{message.message}</p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" id="reg_name" placeholder="Enter Name"/>
                                <p className="feedback-msg text-center text-danger">{errors.name}</p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" id="reg_email" placeholder="Enter Email Id"/>
                                <p className="feedback-msg text-center text-danger">{errors.email}</p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" id="reg_pass" placeholder="Choose Password"/>
                                <p className="feedback-msg text-center text-danger">{errors.password}</p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" id="re_reg_pass" placeholder="Confirm Password"/>
                                <p className="feedback-msg text-center text-danger">{errors.re_password}</p>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" disabled={loading===true?true:false} type="button" id="register" onClick={register} style={{width:"100%"}}>
                                {loading===true?<div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                    </div>:"Register"}
                                </button>   
                            </div>
                            <div className="form-group text-center">
                                <p className="text-center">or Continue with</p>
                                <button className="btn btn-social-icon btn-facebook btn-rounded"><span className="fa fa-facebook"></span></button>
                                <button className="btn btn-social-icon btn-instagram btn-rounded"><span className="fa fa-instagram"></span></button>
                                <button className="btn btn-social-icon btn-github btn-rounded"><span className="fa fa-github"></span></button>
                            </div>
                            <p style={{color:"white"}} className="go_to_register text-center">Already have account?<Link to='/login/' style={{color:"green"}}> login here</Link></p>
                        </form>
                    </div>
                </div>
                <div className="col-sm-4"></div>
            </div>
        </div>
    );
    
}
