import Nav from './../nav';
import {connect} from 'react-redux';
import Footer from './../footer';
import UserDetails from './userdetails';
import Sidebar from './../sidebar';
import Home from './../index';
import $ from 'jquery';
import {useState,useEffect} from 'react';
function Account(props){
    $('.feedback-msg').hide();
    const [name,setName]=useState(props.user.name);
    const [email,setEmail]=useState(props.user.email);
    const [address,setAddress]=useState(props.user.address);
    const [profile_img,setProfile_Img]=useState(props.user.profile_img);
    function setDetails(evt){
        var key=evt.target.id.split('_')[1];
        var value=evt.target.value;
        if(key==="name") setName(value);
        else if(key==="email") setEmail(value);
        else if(key==="address") setAddress(value);
    }
    function saveEdits(userid){
        var name=$('#edit_name').val()===""?props.user.name:$('#edit_name').val();
        var email=$('#edit_email').val()===""?props.user.email:$('#edit_email').val();
        var address=$('#edit_address').val()===""?props.user.address:$('#edit_address').val();
        if(name===""||email===""||address===""){
            $('.feedback-msg').show();
            return;
        }else{
            const data={name,email,address};
            fetch('http://localhost:8080/user/edits/',{
                method:'POST',
                body:JSON.stringify({
                    userid,data
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((response)=>response.json())
            .then((data)=>{
                props.set({name,email,_id:userid,address,profile_img,type:props.user.type});
            }).catch((error)=>console.warn('something went wrong',error));
        }
        
    }
    if(props.loginStatus===true)
    return(
        <>
        <Nav/><br/><br/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2" id="sidebar" style={{position:"relative"}}>
                    <Sidebar user={props.user}/>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-md-12" style={{overflow:"hidden",height:"400px"}}>
                            <UserDetails/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Not liking anymore? <button className="btn btn-danger">Delete Account</button></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" tabIndex="-1" role="dialog" id="edit_info">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Edit Profile</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p className="feedback-msg text-center text-danger">All fields are required*</p>
                    <div className="form-group">
                        <input className="form-control" type="text" id="edit_name" value={name} onChange={setDetails} placeholder="Enter New Name"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="email" id="edit_email" value={email} onChange={setDetails} placeholder="Enter New Email"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" id="edit_address" value={address} onChange={setDetails} placeholder="Enter New Address"/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" onClick={()=>saveEdits(props.user._id)} className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );else{
        props.history.push("/");
        return (<Home/>);
    }
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
export default connect(mapStateToProps,mapDispatchToProps)(Account)
