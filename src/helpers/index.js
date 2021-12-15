import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8'

export function Validate(user){
    const error={};
    if(user.name==='')
    error.name='Name is required';
    if(user.email==='')
    error.email='Email required';
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(user.email!==''){
        if(re.test(user.email)===false)
        error.email='Enter Valid Email';
    }
    if(user.password==='')
    error.password='Password required';
    if(user.re_password==='')
    error.re_password='This field is required';
    else{
        if(user.re_password!==user.password)
        error.re_password="Passwords doesn't match";
    }
    return error;
}

// export default function Validate(user){
    
// }
export const encryptWithAES=(text,phrase)=>{
    return  AES.encrypt(text,phrase).toString();
}
export const decryptWithAES=(text,phrase)=>{
    const bytes=AES.decrypt(text,phrase);
    const originalText=bytes.toString(Utf8);
    return originalText;
}
export function getCookie(name){
    let cookie={};
    document.cookie.split(';').forEach(function(el){
        let [k,v]=el.split('=');
        cookie[k.trim()]=v;
    })
    return cookie[name];
}

export function millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      pad(hours.toString(), 2),
      pad(minutes.toString(), 2),
      pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
  }

  function pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }
  export async function fetchData(token){
    const response= fetch('http://localhost:8080/getUser/',{
        method:'POST',
        body:JSON.stringify({
            data:{
                token
            }
        }),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
        return data;
    }).catch((error)=>console.warn('something went wrong',error));
    return response;
  }
