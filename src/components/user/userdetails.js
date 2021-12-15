import {connect} from 'react-redux';
function UserDetails(props){
    return(
        <div className="user-details box-shadow p-3 bg-light">
            <h4 className="text-center pb-3">User Details</h4>
            <table className="table p-3">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{props.user.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{props.user.email}</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>{props.user.password}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{props.user.address}</td>
                    </tr>
                    <tr>
                        <button className="btn btn-primary" data-toggle="modal" data-target="#edit_info">Edit</button>
                        <button className="btn btn-secondary">Save</button>
                    </tr>
                </tbody>
            </table>{
                                
            }
            
        </div>
    );
}
function mapStateToProps(state){
    return{
        loginStatus:state.Auth.loginStatus,
        user:state.Auth.user
    }
}
export default connect(mapStateToProps,null)(UserDetails)