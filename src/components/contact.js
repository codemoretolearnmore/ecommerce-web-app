import Nav from './nav';
import user from './images/user.png';
import Footer from './footer';
export default function Contact(props){
    return(
        <>
        <Nav/>
        <div className="form-header text-center">
            <img src={user} alt="user"/>
            
        </div>
        <div className="container">
            <div className="row mt-3" style={{boxShadow:"1px 4px 4px 1px lightgray"}}>
                <div className="col-md-8 mx-auto mt-5 pb-4 pt-4">
                    <div className="contact-form p-5" style={{backgroundColor:"#60a3bc"}}>
                        <h4 className="text-center m-4">Contact Form</h4>
                        <form className="p-2">
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" id="contact-name" placeholder="Enter Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" id="contact-email" placeholder="Enter Email"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="contact-subject" placeholder="Enter Subject"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="company-name" id="company-name" placeholder="Enter organization name"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="4" style={{width:""}} placeholder="Type your message here..."></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-info">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div><br/><br/><br/>
        <Footer/>
        </>
    );
}