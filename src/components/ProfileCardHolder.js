import ProfileCard from "./ProfileCard"
const { Component } = require("react");

class ProfileCardHolder extends Component{
    render(){
        return(
            <ul id="myUL" className="card-list p-3 w-100">
                {this.props.users.map(user=><ProfileCard key={user.CreditCardNumber} user={user} />)}
            </ul>
        )
    }
}

export default ProfileCardHolder