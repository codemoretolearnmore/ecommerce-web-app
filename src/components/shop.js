import {Link} from 'react-router-dom';
import Nav from './nav';
import {useState,useEffect} from 'react';
import {connect} from 'react-redux';
function Shop(props){
    const[loading,setLoading]=useState(true);
    const[productList,setProductList]=useState([]);
    function fetchProducts(url){
        setLoading(true);
        fetch(url,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setTimeout(function(){
                setLoading(false);
                setProductList(data);
            },3000);
        }).catch((error)=>console.warn('something went wrong',error));
    }
    function fetchOnSwitch(evt){
        console.log(evt.target.id);
        var url="http://localhost:8080/fetchProduct/?type="+evt.target.id.split('-')[0];
        fetchProducts(url);
    }
    useEffect(()=>{
        var url="http://localhost:8080/fetchProduct/?type=mens";
        fetchProducts(url);
    },[])
    function AddToCart(product_id){
        console.log(product_id,props.userid);
        fetch("http://localhost:8080/cart/",{
            method:'POST',
            body:JSON.stringify({
                data:{
                    product_id:product_id,
                    user_id:props.userid
                }
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            
        }).catch((error)=>console.warn('something went wrong',error));
    }
    return(
        <>
        <Nav/>
        <main role="main">
            <section className="jumbotron bg-dark">
                <div className="container">
                    <div className="row" style={{color:"white"}}>
                        <div className="col-md-5 mx-auto" style={{color:"white"}}>
                            <h1 className="jumbotron-heading">Album example</h1>
                            <p className="lead" style={{color:"white"}}>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                            <p>
                                <Link to="#" className="btn btn-primary my-2">Shop Now</Link>
                            </p>
                        </div>
                        <div className="col-md-7 mx-auto banner">
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
          
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <div className="sidebar left-sidebar p-3" style={{width:"200px"}}>
                            <div className="sidebar">
                                <div className="categories">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h6 className="font-weight-500">Category</h6>
                                        </div>
                                        <div className="col-sm-4">
                                            <button className="btn navbar-toggler" data-toggle="collapse" data-target="#category" aria-controls="category" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor:"transparent",padding:"0.2rem",fontSize:"14px"}}>
                                                <span className="fa fa-angle-up"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <ul className="sidebar-nav" style={{listStyle:"none",paddingLeft:"0.9rem"}} id="category">
                                        <li className="nav-item">
                                            <input type="checkbox"/>
                                            <span className="text-secondary"> Shoulder Bags</span>
                                        </li>
                                        <li className="nav-item">
                                            <input type="checkbox"/>
                                            <span className="text-secondary"> Top Handle Bags</span>
                                        </li>
                                        <li className="nav-item">
                                            <input type="checkbox"/>
                                            <span className="text-secondary"> Carry Bags</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="price">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h6>Price</h6>
                                        </div>
                                        <div className="col-sm-4">
                                            <button className="btn navbar-toggler" data-toggle="collapse" data-target="#price" aria-controls="price" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor:"transparent",padding:"0.2rem",fontSize:"14px"}}>
                                                <span className="fa fa-angle-up"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <ul className="sidebar-nav" style={{listStyle:"none",paddingLeft:"0.9rem"}} id="price">
                                        <li className="nav-item">
                                            <span className="text-left">r</span>
                                            <span className="text-right text-align-right">4</span>
                                        </li>
                                        <li className="nav-item">
                                            <input type="range" name="price" min="0" max="1000" value="100"/>
                                        </li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="color">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h6>Color</h6>
                                        </div>
                                        <div className="col-sm-4">
                                            <button className="btn navbar-toggler" data-toggle="collapse" data-target="#color" aria-controls="color" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor:"transparent",padding:"0.2rem",fontSize:"14px"}}>
                                                <span className="fa fa-angle-up"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <ul className="sidebar-nav" style={{listStyle:"none",paddingLeft:"0.8rem"}} id="color">
                                        <li className="nav-item">
                                            <div className="row">
                                                <div className="col-sm-2 m-1">
                                                    <button className="btn btn-rounded btn-primary" style={{borderRadius:"50%",height:"100%",borderColor:"gray"}}></button>
                                                </div>
                                                <div className="col-sm-2 m-1">
                                                    <button className="btn btn-rounded btn-secondary" style={{borderRadius:"50%",height:"100%"}}></button>
                                                </div>
                                                <div className="col-sm-2 m-1">
                                                    <button className="btn btn-rounded btn-warning" style={{borderRadius:"50%",height:"100%"}}></button>
                                                </div>
                                                <div className="col-sm-2 m-1">
                                                    <button className="btn btn-rounded btn-danger" style={{borderRadius:"50%",height:"100%"}}></button>
                                                </div>
                                                <div className="col-sm-2 m-1">
                                                    <button className="btn btn-rounded btn-info" style={{borderRadius:"50%",height:"100%"}}></button>
                                                </div>
                                                <div className="col-sm-2 m-1">
                                                    <button className="btn btn-rounded btn-light" style={{borderRadius:"50%",height:"100%",borderColor:"gray"}}></button>
                                                </div>
                                                <div className="col-sm-2 m-1">
                                                    <button className="btn btn-rounded btn-dark" style={{borderRadius:"50%",height:"100%"}}></button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10">
                        
                        <div className="d-flex flex-row ml-3">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" onClick={fetchOnSwitch} id="mens-tab" data-toggle="tab" href="#men" role="tab" aria-controls="men" aria-selected="true">Mens</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={fetchOnSwitch} id="womens-tab" data-toggle="tab" href="#women" role="tab" aria-controls="women" aria-selected="false">Womens</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={fetchOnSwitch} id="children-tab" data-toggle="tab" href="#children" role="tab" aria-controls="children" aria-selected="false">Children</a>
                                </li>
                            </ul>
                            
                        </div>
                        <div className="d-flex flex-row ml-3">
                            <div className="text-muted m-2" id="res">{"Showing " + productList.length+ " results"}</div>
                            <div className="ml-auto mr-lg-4">
                                <div id="sorting" className="border rounded p-1 m-1"> <span className="text-muted">Sort by </span> 
                                    <select name="sort" id="sort" style={{outline:"none",border:"none"}}>
                                        <option value="popularity">Popularity</option>
                                        <option value="prcie">Price : High to low</option>
                                        <option value="prcie">Price : Low to high</option>
                                        <option value="time">Newest First</option>
                                        <option value="time">Oldest First</option>
                                        <option value="rating">Rating</option>
                                    </select> 
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="men" role="tabpanel" aria-labelledby="mens-tab">
                                <div className="row m-2 equal">
                                    <div className="card-deck m-1">
                                        {loading===true?<div className="spinner-grow text-secondary" role="status" style={{position:"absolute",left:"50%",top:"50%",right:"50%"}}>
                                        <span className="sr-only">Loading...</span>
                                        </div>:productList.map((product,index)=>{
                                            return <div className="card mb-4 text-center m-2" key={index}>
                                                <img className="card-img-top" src={product.product_url} alt="Card cap" style={{width:"80px",margin:"auto",height:"80px"}}/>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">{product.name}</h5>
                                                    <p className="text-left" style={{width:"50%",float:"left"}}><span className="fa fa-rupee-sign"></span><span> {product.product_price}</span></p>
                                                    <p className="text-right" style={{width:"50%",float:"left"}}>{product.product_rating===0?"No":product.product_rating}</p>
                                                    <button onClick={()=>AddToCart(product._id)} className="btn btn-primary" style={{width:"100%"}}>Add to Cart</button>
                                                </div>
                                            </div>
                                        })}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
function mapStateToProps(state){
    return{
        loginStatus:state.Auth.loginStatus,
        userid:state.Auth.user._id
    }
}
export default connect(mapStateToProps,null)(Shop)