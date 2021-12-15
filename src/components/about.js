import Nav from './nav';
import g3 from './images/g3.jpg';
import g2 from './images/g2.jpg';
import g1 from './images/g1.jpg';
import testimonial from './images/testimonial.jpg';
import Footer from './footer';
import {useState,useEffect} from 'react';
export default function About(props){
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },2000);
    },[])
    return(
        <>
        <Nav/>
        {loading===true?<div className="spinner-grow text-secondary" role="status" style={{position:"absolute",left:"50%",top:"50%",right:"50%"}}>
                            <span className="sr-only">Loading...</span>
                        </div>:<>
                        <main role="main">
            <section className="jumbotron" style={{backgroundColor:"#6d4c41"}}>
                <div className="container text-center">
                    <div className="row" style={{color:"white"}}>
                        <div className="col-md-8 mx-auto" style={{color:"white"}}>
                            <h1 className="jumbotron-heading">Album example</h1>
                            <p className="lead" style={{color:"white",fontFamily:"Josefin Sans"}}>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                            
                        </div>
                    </div>
                </div>
            </section>
        </main><br/><br></br>
        <section>
            <div className="container box-shadow">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src={g3} alt="product"/>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src={g2} alt="product"/>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src={g1} alt="product"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div className="container-fluid bg-dark mt-4 mb-2">
                <div className="row p-4">
                    <div className="col-md-8 p-4">
                        <h3 className="pt-4 pl-4" style={{color:"#eb6420",textTransform:"uppercase",fontWeight:"750"}}>join us:<span style={{color:"#fff"}}> from the tea garden to your cup</span></h3>
                        <p className="pt-2 pr-4 pl-4" style={{color:"white"}}>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
                    </div>
                    <div className="col-md-4 p-4 text-center" style={{margin:"auto"}}>
                        <button className="btn">View Help Videos</button>
                    </div>
                </div>
            </div><br/><br/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h4>Our Team</h4>
                        <span className="text-dark">They worked while...</span>
                    </div>
                </div>
                <div className="row mt-4 pt-4">
                    <div className="col-md-12 text-center mt-4 pt-4">
                        <div className="card-deck">
                            <div className="card" style={{border:"none"}}>
                                <img src="https://cdn.shopify.com/s/files/1/0461/9036/2778/files/team-1_1024x1024.jpg?v=1599123427" alt="worker"/>
                                <div className="card-body">
                                    <h4>Lorem Ipsum</h4>
                                    <p>Product Manager</p>
                                </div>
                            </div>
                            <div className="card" style={{border:"none"}}>
                                <img src="https://cdn.shopify.com/s/files/1/0461/9036/2778/files/team-2_1024x1024.jpg?v=1599123446" alt="worker"/>
                                <div className="card-body">
                                    <h4>Lorem Ipsum</h4>
                                    <p>Product Manager</p>
                                </div>
                            </div>
                            <div className="card" style={{border:"none"}}>
                                <img src="https://cdn.shopify.com/s/files/1/0461/9036/2778/files/team-3_1024x1024.jpg?v=1599123458" alt="worker"/>
                                <div className="card-body">
                                    <h4>Lorem Ipsum</h4>
                                    <p>Product Manager</p>
                                </div>
                            </div>
                            <div className="card" style={{border:"none"}}>
                                <img src="https://cdn.shopify.com/s/files/1/0461/9036/2778/files/team-4_1024x1024.jpg?v=1599123428" alt="worker"/>
                                <div className="card-body">
                                    <h4>Lorem Ipsum</h4>
                                    <p>Product Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br/><br/>
            <div className="container-fluid bg-dark">
                <div className="row p-4 m-4 mb-0">
                    <div className="col-md-4 p-4">
                        <div className="text-center" style={{color:"white",width:"100%"}}>
                            <div className="icon mb-3" style={{width:"100%"}}>
                                <span className="fa fa-truck" style={{fontSize:"60px",width:"100%"}}></span>
                            </div>
                            <h6 style={{color:"white"}}>Free Delievery for All Products</h6>
                        </div>
                    </div>
                    <div className="col-md-4 p-4">
                        <div className="text-center" style={{color:"white",width:"100%"}}>
                            <div className="icon mb-3" style={{width:"100%"}}>
                                <span className="fa fa-undo text-center" style={{color:"white",fontSize:"60px",width:"100%"}}></span>
                            </div>
                            <h6 style={{color:"white"}}>7 Days Return Policy</h6>
                        </div>
                    </div>
                    <div className="col-md-4 p-4">
                        <div className="text-center" style={{color:"white",width:"100%"}}>
                            <div className="icon mb-3" style={{width:"100%"}}>
                                <span className="fa fa-gift text-center" style={{color:"white",fontSize:"60px",width:"100%"}}></span>
                            </div>
                            <h6 style={{color:"white"}}>Free Gift Voucher on Shopping</h6>
                        </div>
                    </div>
                </div>
            </div><br></br><br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="text-center">Testimonial</h5>
                    </div>
                </div><br/>
                <div className="row text-center">
                    <div className="col-md-8 mx-auto" style={{margin:"auto"}}>
                        <div className="text-center p-2">
                            <img className="text-center" src={testimonial} width="160px" style={{borderRadius:"50%",width:"100px"}} alt="founder"/>
                        </div>
                        <div className="text-center">
                            <p className="text-center">Augue neque gravida in fermentum et sollicitudin tempor nec? San: Massa tempor nec feugiat nisl pretium fusce id velit. Facilisis mauris sit amet m...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section><Footer/>
                        </>}
        
        
        </>
    );
}