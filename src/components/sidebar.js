import {Link} from 'react-router-dom';
import user from './../components/images/user.png';
import {connect} from 'react-redux';
function Sidebar(props){
    console.log(props.user.type);
    return(
        <nav className="sidebar">
            <div className="header border-bottom">
                <div className="user-profile text-center">
                    <div className="user-image">
                        <img src={props.user.profile_img} alt="user" style={{borderRadius:"50%"}}/>
                    </div>
                    <div className="user-name pt-2">
                        <h6>{props.user.name}</h6>
                    </div>
                </div>
            </div>
            <ul className="sidebar-nav" style={{listStyle:"none",paddingLeft:"0"}}>
                <li className="nav-item">
                    <Link className="nav-link" to="/user/dashboard/">Dashboard</Link>
                </li>
                {props.user.type==="admin"?<li className="nav-item">
                    <Link className="nav-link" to="/user/products/">Products</Link>
                </li>:null}
                <li className="nav-item">
                    <Link className="nav-link" to="/user/account/">Account</Link>
                </li>
            </ul>
        </nav>
    );
}
function mapStateToProps(state){
    return{
        loginStatus:state.Auth.loginStatus,
        user:state.Auth.user
    }
}
export default connect(mapStateToProps,null)(Sidebar)