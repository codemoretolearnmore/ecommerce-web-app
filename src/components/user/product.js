import {Link} from 'react-router-dom';
import $ from 'jquery';
import Nav from './../nav';
import Sidebar from './../sidebar';
import {useState,useEffect} from 'react';
export default function Dashboard(props){
    const [loading,setLoading]=useState(true);
    const [products,setProducts]=useState([]);
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
                setProducts(data);
            });
        }).catch((error)=>console.warn('something went wrong',error));
    }
    useEffect(()=>{
        var url="http://localhost:8080/fetchProduct/?type=";
        fetchProducts(url);
    },[]);
    
    function Delete(prod_id){
        var url="http://localhost:8080/product/actions/";
        fetch(url,{
            method:'POST',
            body:JSON.stringify({
                action:"delete",
                product_id:prod_id
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            url="http://localhost:8080/fetchProduct/?type=";
            fetchProducts(url);
            $('.closed').click();
        }).catch((error)=>console.warn('something went wrong',error));
    }
    function Add(){
        const name=$('#product_title').val(),product_url=$('#product_url').val(),product_price=$('#product_price').val(),
        product_description=$('#product_description').val(),product_category=$('#product_category :selected').val();
        const data={name,product_url,product_price,product_description,product_category};
        console.log(data);
        fetch('http://localhost:8080/products/',{
            method:'POST',
            body:JSON.stringify({
                data:data
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            $('.closed').click();
        }).catch((error)=>console.warn('something went wrong',error))
    }
    function setData(prod_id){
        console.log('clicking');
        products.map((product,index)=>{
            if(product._id===prod_id){
                $('#edit_title').val(product.name);
                if(product.product_category==="mens")
                    $('#edit_category option[value="mens"]').attr('selected','selected');
                else if(product.product_category==="womens")
                    $('#edit_category option[value="womens"]').attr('selected','selected');
                else if(product.product_category==="children")
                    $('#edit_category option[value="children"]').attr('selected','selected');
                $('.update').attr('id',product._id);
                $('#edit_price').val(product.product_price);
                $('#edit_url').val(product.product_url);
                $('#edit_description').val(product.product_description);
            }
        })
    }
    function Update(evt){
        console.log(evt.target.id);
        const name=$('#edit_title').val(),product_url=$('#edit_url').val(),product_price=$('#edit_price').val(),
        product_description=$('#edit_description').val(),product_category=$('#edit_category :selected').val();
        const data={name,product_url,product_price,product_description,product_category};
        var product_id=evt.target.id;
        fetch("http://localhost:8080/product/actions/",{
            method:'POST',
            body:JSON.stringify({
                action:"update",
                product_id:product_id,
                data
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            var url="http://localhost:8080/fetchProduct/?type=";
            fetchProducts(url);
            $('.closed').click();
        }).catch((error)=>console.warn('something went wrong',error))
    }
    return(
        <>
        <Nav/>
        <div className="modal fade" id="product_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Add Product </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex flex-column text-center">
                            <div className="form-group">
                                <input type="text" className="form-control" id="product_title" placeholder="Enter Product Name"/>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <select className="dropdown form-control mr-1" id="product_category">
                                        <option value="">Select Category</option>
                                        <option value="mens">Mens</option>
                                        <option value="womens">Womens</option>
                                        <option value="children">Children</option>
                                    </select>
                                    <input type="number" className="form-control ml-1" id="product_price" placeholder="Enter Price"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="product_url" placeholder="Enter Product URL"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" id="product_description" placeholder="Enter Product Description">
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={Add}>Add</button>
                        <button type="button" className="btn btn-secondary closed" data-dismiss="modal" aria-label="Close">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="edit_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Edit Product </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex flex-column text-center">
                            <div className="form-group">
                                <input type="text" className="form-control" id="edit_title" placeholder="Enter Product Name"/>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <select className="dropdown form-control mr-1" id="edit_category">
                                        <option value="">Select Category</option>
                                        <option value="mens">Mens</option>
                                        <option value="womens">Womens</option>
                                        <option value="children">Children</option>
                                    </select>
                                    <input type="number" className="form-control ml-1" id="edit_price" placeholder="Enter Price"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="edit_url" placeholder="Enter Product URL"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" id="edit_description" placeholder="Enter Product Description">
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary update" id="" onClick={(evt)=>Update(evt)}>Update</button>
                        <button type="button" className="btn btn-secondary closed" data-dismiss="modal" aria-label="Close">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2" id="sidebar"  style={{backgroundColor:"white"}}>
                    <Sidebar/>
                </div>
                <div className="col-md-10 pt-4 box-shadow" style={{borderRadius:"10px"}}>
                    <div className="row">
                        <div className="col-6">
                            <h5>Dashboard</h5>
                        </div>
                        <div className="col-6 text-right">
                            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#product_modal">Add Product</button>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Url</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {loading===true?<tr>
                                    <td>
                                    <div className="spinner-border text-primary" role="status" style={{position:"absolute",left:"40%",top:"60%",right:"40%"}}>
                                    <span className="sr-only">Loading...</span>
                                    </div>
                                    </td>
                                    
                                </tr>:products.map((product,index)=>{
                                        return <tr key={index}>
                                            <td>{index}</td>
                                            <td>{product.name}</td>
                                            <td><img src={product.product_url} alt="product" style={{width:"100px",height:"100px"}}/></td>
                                            <td>{product.product_price}</td>
                                            <td>{product.product_category}</td>
                                            <td>{product.product_rating}</td>
                                            <td>{product.product_description}</td>
                                            <td>
                                                <button className="btn btn-secondary" onClick={()=>setData(product._id)} data-toggle="modal" data-target="#edit_modal"><span className="fa fa-edit"></span></button><br/>
                                                <button className="btn btn-danger" onClick={()=>Delete(product._id)}><span className="fa fa-trash"></span></button>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}