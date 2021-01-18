const { Component } = require("react");

class ProfileCard extends Component{
    render(){
        return(
                <li className="w-100 mb-3 card-holder">
                    <span style={{fontSize: "2rem"}} className="bx bx-user mr-1 text-white ml-3"></span>
                    <a className="name text-white">{this.props.user.FirstName}</a>
                    <div className="card-item p-3 dark-bg w-100">
                        <div className="username">
                            <span className="title">Username:</span> Macaulay303
                        </div>
                        <div className="gender">
                            <span className="title">Gender:</span> M
                        </div>
                            <div className="email">
                                <span className="title">Email:</span> macdon393$gmail.com
                            </div>
                            <div className="phone">
                                <span className="title">Phone:</span> 0809 978 890
                            </div>
                            <div className="logi">
                                <span className="title">Longitude:</span> 909u8
                            </div>
                            <div className="lati">
                                <span className="title">Latitude:</span> 909u8
                            </div>
                            <div className="ccNumber">
                                <span className="title">Credit Card Number:</span> 190887
                            </div>
                            <div className="ccType">
                                <span className="title">Credit Card Type:</span> MasterCard
                            </div>
                        <div className="domainName">
                            <span className="title">Domain Name:</span> github.com
                        </div>
                        <div className="macAddress">
                            <span className="title">Mac Address:</span> poj.kl
                        </div>
                        <div className="url">
                            <span className="title">URL:</span> macaulay.com
                        </div>
                        <div className="lastLogin">
                            <span className="title">Last Login:</span> 899-90
                        </div>
                        <div className="paymentMethod">
                            <span className="title">Payment Method:</span> Card
                        </div>
                    </div>
                </li>
        )
    }
}

export default ProfileCard