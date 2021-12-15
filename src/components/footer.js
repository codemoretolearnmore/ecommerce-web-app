import {Link} from 'react-router-dom';
export default function Footer(){
    return(
         <footer className="page-footer font-small stylish-color-dark pt-4 mt-4 bg-dark" style={{color:"white"}}>
            <div className="container text-center text-md-left">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Subscribe!</h5>
                        <p>Subsribe to newsletter to get daily fashion and discount updates in your inbox</p>
                        <form className="form-inline mt-2 mt-md-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div> 
                    <hr className="clearfix w-100 d-md-none"/>

                    <div className="col-md-3 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/">Link 4</Link>
                            </li>
                            <li>
                                <Link to="/">Link 4</Link>
                            </li>
                            <li>
                                <Link to="/">Link 4</Link>
                            </li>
                            <li>
                                <Link to="/">Link 4</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="clearfix w-100 d-md-none"/>
                    <div className="col-md-3 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/">Link 4</Link>
                            </li>
                            <li>
                                <Link to="/">Link 4</Link>
                            </li>
                            <li>
                                <Link to="/">Link 4</Link>
                            </li>
                            <li>
                                <Link to="/">Link 4</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="clearfix w-100 d-md-none"/>
                    
            </div>
        </div>
        <hr/>

        <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
            <button className="btn-floating btn-fb mx-1">
                <i className="fa fa-facebook-f"> </i>
            </button>
            </li>
            <li className="list-inline-item">
            <button className="btn btn-floating btn-tw mx-1">
                <i className="fa fa-twitter"> </i>
            </button>
            </li>
            <li className="list-inline-item">
            <button className="btn btn-floating btn-gplus mx-1">
                <i className="fa fa-google-plus"> </i>
            </button>
            </li>
            <li className="list-inline-item">
            <button className="btn btn-floating btn-li mx-1">
                <i className="fa fa-linkedin"> </i>
            </button>
            </li>
            <li className="list-inline-item">
            <button className="btn-floating btn-dribbble mx-1">
                <i className="fa fa-dribbble"> </i>
            </button>
            </li>
        </ul>

        <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <Link to="https://mdbootstrap.com/"> MDBootstrap.com</Link>
        </div>


        </footer>

    );
}