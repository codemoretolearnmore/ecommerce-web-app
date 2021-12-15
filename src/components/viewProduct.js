import {Link} from 'react-router-dom';
import Nav from './nav';
import {useState,useEffect} from 'react';
export default function ViewProduct(props){
    const [loading,setLoading]=useState(false);
    const [product,setProduct]=useState({});
    useEffect(()=>{
        const query=window.location.search;
        const prod_id=query.substr(5);
        var url="http://localhost:8080/getProduct";
        fetch(url,{
            method:'POST',
            body:JSON.stringify({
                data:{
                    id:prod_id
                }
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setProduct(data);
        }).catch((error)=>console.warn('something went wrong',error));
    },[])
    return(
        <>
            <Nav/>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="prod_img">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={product.product_url} alt="First slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="..." alt="Second slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="..." alt="Third slide"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="product_details p-2">
                                <div className="product_title">
                                    <h4>{product.name}</h4>
                                    <p>4.0 <span className="fa fa-star text-warning"></span></p>
                                    <p><span className="fa fa-rupee-sign"></span> {product.product_price}</p>
                                    <p>Category: {product.product_category}</p>
                                    <p>Description:-</p>
                                    <p>{product.product_description}</p>
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}