import Nav from '../nav';
import {connect} from 'react-redux';
import Footer from '../footer';
import Sidebar from '../sidebar';
import {Line} from 'react-chartjs-2';
import Home from './../index';
function Account(props){
    const state = {
        labels: ['January', 'February', 'March',
                 'April', 'May','April','May','June','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'Sells',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            data: [65, 59, 80, 65, 56,70,35,60,120,34]
          }
        ]
      }
    if(props.loginStatus===true)
    return(
        <>
        <Nav/><br/><br/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2" id="sidebar" style={{position:"relative"}}>
                    <Sidebar/>
                </div>
                <div className="col-sm-10">
                        <div className="row">
                        
                        <div className="col-md-12" style={{position:"relative"}}>
                            <div className="row mb-4 text-center">
                                <div className="col-sm-4">
                                    <div className="card bg-info text-white">
                                        <div className="card-body">
                                            <h3>Total Sells <span className="fa fa-check"></span></h3>
                                        </div>
                                        <div className="card-footer">
                                            <p className="text-center text-white">120</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card bg-success text-white">
                                        <div className="card-body">
                                            <h3>Total Revenue <span className="fa fa-money-bill-wave"></span></h3>
                                        </div>
                                        <div className="card-footer">
                                            <p className="text-center text-white">120</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card bg-warning text-white">
                                        <div className="card-body">
                                            <h3>Total Products in Cart <span className="fa fa-shopping-cart"></span></h3>
                                        </div>
                                        <div className="card-footer">
                                            <p className="text-center text-white">120</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-sm-6">
                                    <div className="user-details box-shadow p-3 bg-light">
                                        <h5 className="text-center pb-3">Recent Purchases</h5>
                                        <div className="charts">
                                            <Line data={state} options={{
                                                animations:{
                                                    tension:{
                                                        duration:1000,
                                                        easing:'easeInOutBounce',
                                                        from:1,
                                                        to:0,
                                                        loop:false
                                                    }
                                                },
                                                title:{
                                                    display:true,
                                                    text:'Average Rainfall per month',
                                                    fontSize:20
                                                },
                                                legend:{
                                                    display:true,
                                                    position:'right'
                                                }}}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            
        </div>
        <Footer/>
        </>
    );else{
        props.history.push("/");
        return(<Home/>)
    }
}
function mapStateToProps(state){
    return{
        loginStatus:state.Auth.loginStatus,
    }
}
export default connect(mapStateToProps,null)(Account)
