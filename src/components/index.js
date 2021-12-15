import Top from './top';
import Middle from './middle';
import Footer from './footer';
import './index.css';
import {useState,useEffect} from 'react';

export default function Welcome(props){

    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },2000);
    },[]);
    
    return(
        <><Top/>
        {loading===true?<div class="spinner-grow" role="status" style={{position:"absolute",top:"50%",left:"50%",right:"50%",bottom:"50%"}}>
  <span class="sr-only">Loading...</span>
</div>:<><Middle/>
        <Footer/></>}
        
        </>
    )
}