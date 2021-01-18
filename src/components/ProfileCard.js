const { Component } = require("react");

class ProfileCard extends Component{
    render(){
        return(
                <li className="w-100 mb-3 card-holder">
                    <span style={{fontSize: "2rem"}} className="bx bx-user mr-1 text-white ml-3"></span>
                    <a className="name text-white">{this.props.user.FirstName} {this.props.user.LastName}</a>
                    <div className="card-item p-3 dark-bg w-100">
                        <div className="username">
                            <span className="title">Username:</span> {this.props.user.UserName}
                        </div>
                        <div className="gender">
                            <span className="title">Gender:</span> {this.props.user.Gender}
                        </div>
                            <div className="email">
                                <span className="title">Email:</span> {this.props.user.Email}
                            </div>
                            <div className="phone">
                                <span className="title">Phone:</span> {this.props.user.PhoneNumber}
                            </div>
                            <div className="logi">
                                <span className="title">Longitude:</span> {this.props.user.Longitude}
                            </div>
                            <div className="lati">
                                <span className="title">Latitude:</span> {this.props.user.Latitude}
                            </div>
                            <div className="ccNumber">
                                <span className="title">Credit Card Number:</span> {this.props.user.CreditCardNumber}
                            </div>
                            <div className="ccType">
                                <span className="title">Credit Card Type:</span> {this.props.user.CreditCardType}
                            </div>
                        <div className="domainName">
                            <span className="title">Domain Name:</span> {this.props.user.DomainName}
                        </div>
                        <div className="macAddress">
                            <span className="title">Mac Address:</span> {this.props.user.MacAddress}
                        </div>
                        <div className="url">
                            <span className="title">URL:</span> {this.props.user.URL}
                        </div>
                        <div className="lastLogin">
                            <span className="title">Last Login:</span> {this.props.user.LastLogin}
                        </div>
                        <div className="paymentMethod">
                            <span className="title">Payment Method:</span> {this.props.user.PaymentMethod}
                        </div>
                    </div>
                </li>
        )
    }
}

export default ProfileCard