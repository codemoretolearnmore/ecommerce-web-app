import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
function Navbar(props){
  function logout(){
    props.logout();
  }
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/shop/">Shop</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to="/about/">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact/">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <form className="form-inline my-2 my-lg-0" style={{padding:"0"}}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        
                        </form>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    
                    
                      {props.loginStatus===true?<li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {props.user.name}
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {<Link className="dropdown-item" to="/user/dashboard/">Dashboard</Link>}
                        <Link className="dropdown-item" to="#" onClick={logout}>Sign out</Link>
                      </div>
                    </li>
                      :<Link to="/login/" className="nav-link">Login</Link>}
                    
                    <li className="nav-item">
                      <Link className="nav-link" to="/user/cart/"><span className="fa fa-shopping-cart"></span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
function mapStateToProps(state){
  return {
    loginStatus:state.Auth.loginStatus,
    user:state.Auth.user
  }
}
function mapDispatchToProps(dispatch){
  return{
    logout:()=>dispatch({type:'logout'})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);