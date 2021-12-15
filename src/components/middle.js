import {Link} from 'react-router-dom';
import Video from './video.mp4'
import banner from './images/g3.jpg';
import b1 from './images/b1.jpg';
import b2 from './images/b2.jpg';
import b3 from './images/b5.jpg'
export default function Middle(){
    return(
        <main>
            <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">Punny headline</h1>
                    <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
                    <Link className="btn btn-outline-secondary" to="#">Coming soon</Link>
                </div>
                <div className="product-device box-shadow d-none d-md-block"></div>
                <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
            </div>
            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3" style={{color:"black"}}>
                        {/* <h2 className="display-5"></h2> */}
                    </div>
                    <div className="bg-dark box-shadow mx-auto" style={{width: "80%", height: "230px", borderRadius: "21px 21px 0px 0px"}}>
                        <video src={Video} style={{width:"100%"}}></video>
                    </div>
                </div>
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        {/* <h2 class="display-5">Another headline</h2> */}
                        <span className="display-6">About us</span>
                        {/* <p class="lead">And an even wittier subheading.</p> */}
                    </div>
                    <div className="bg-white box-shadow mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0px 0px", color: "black"}}>
                        <p>Lorem ipsum dolor sit amet elit. Provident. fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit, ac cursus quis, leo.Lorem ipsum dolor sit amet elit. Provident. fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit, ac cursus quis, leo.Lorem ipsum dolor sit amet elit. Provident. fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit, ac cursus quis, leo.Lorem ipsum dolor sit amet elit. Provident. fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit, ac cursus quis, leo.Lorem ipsum dolor sit amet elit. Provident. fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit, ac cursus quis, leo.</p>
                    </div>
                </div>
            </div>
            <div className="position-relatives overflow-hidden p-3 p-md-5 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">Punny headline</h1>
                    <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
                    <Link className="btn btn-outline-secondary" to="#">Coming soon</Link>
                </div>
            </div>
            <div className="d-md-flex box-shadow flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-light mr-md-3 pt-3 pb-md-5 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3" style={{color:"black"}}>
                        {/* <h2 className="display-5"></h2> */}
                    </div>
                    <div className="bg-dark box-shadow mx-auto" style={{width: "80%", height: "260px", borderRadius: "21px 21px 0px 0px"}}>
                        <img src={banner} alt="banner" width="100%" height="100%"/>
                    </div>
                </div>
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        {/* <h2 class="display-5">Another headline</h2> */}
                        <span className="display-6" style={{color:"#4c4c4c"}}>Features</span>
                        {/* <p class="lead">And an even wittier subheading.</p> */}
                    </div>
                    <div className="bg-white box-shadow mx-auto" style={{width: "80%", height: "260px", borderRadius: "21px 21px 0px 0px", color: "black"}}>
                        <p className="font-weight-normal" style={{fontFamily:"sans-serif"}}>Lorem ipsum dolor sit amet elit. Provident. fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit, ac cursus quis, leo.Lorem ipsum dolor sit amet elit. Provident. fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit, ac cursus quis, leo.Lorem ipsum dolor sit amet elit. Provident. fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit, ac cursus quis, leo.Lorem ipsum dolor sit amet elit. Provident. fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit, ac cursus quis, leo.Lorem ipsum dolor sit amet elit. Provident. fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit, ac cursus quis, leo.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-4 pt-4">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h4 className="display-6 font-weight-normal">Featured Products</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top" data-src="" alt="Thumbnail [100%x225]" style={{height: "225px", width: "100%", display: "block"}} src={b1} data-holder-rendered="true"/>
                            <div className="card-body">
                                <div className="title text-center" style={{width:"100%"}}> 
                                    <h5>Bag1</h5>
                                    <span className="fa fa-user"></span>
                                    <span className="fa fa-user"></span>
                                    <span className="fa fa-user"></span>
                                    <span className="fa fa-user"></span>
                                </div>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-success btn-sm btn-outline-success" style={{color:"white"}}>+ Cart</button>
                                        <button type="button" className="btn btn-primary btn-sm btn-outline-primary" style={{color:"white"}}>Buy Now</button>
                                    </div>
                                    <small className="text-muted">999 <span className="fa fa-rupee"></span></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top" data-src="" alt="Thumbnail [100%x225]" style={{height: "225px", width: "100%", display: "block"}} src={b2} data-holder-rendered="true"/>
                            <div className="card-body">
                            <div className="title text-center" style={{width:"100%"}}> 
                                    <h5>Bag2</h5>
                                    <span className="fa fa-user"></span>
                                    <span className="fa fa-user"></span>
                                    <span className="fa fa-user"></span>
                                    <span className="fa fa-user"></span>
                                </div>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                    <button type="button" className="btn btn-success btn-sm btn-outline-success" style={{color:"white"}}>+ Cart</button>
                                        <button type="button" className="btn btn-primary btn-sm btn-outline-primary" style={{color:"white"}}>Buy Now</button>
                                    </div>
                                    <small className="text-muted">999 <span className="fa fa-rupee"></span></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top" data-src="" alt="Thumbnail [100%x225]" style={{height: "225px", width: "100%", display: "block"}} src={b3} data-holder-rendered="true"/>
                            <div className="card-body">
                            <div className="title text-center" style={{width:"100%"}}> 
                                    <h5>Bag3</h5>
                                    <span className="fa fa-user"></span>
                                    <span className="fa fa-user"></span>
                                    <span className="fa fa-user"></span>
                                    <span className="fa fa-user"></span>
                                </div>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                    <button type="button" className="btn btn-success btn-sm btn-outline-success" style={{color:"white"}}>+ Cart</button>
                                        <button type="button" className="btn btn-primary btn-sm btn-outline-primary" style={{color:"white"}}>Buy Now</button>
                                    </div>
                                    <small className="text-muted">999 <span className="fa fa-rupee"></span></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}