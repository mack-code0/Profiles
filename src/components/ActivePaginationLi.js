const { Component } = require("react");

class ActivePaginationLi extends Component{
    render(){
        return(
            <li className="page-item active" aria-current="page">
                <span className="page-link">
                    {this.props.page}
                    <span className="sr-only">(current)</span>
                </span>
            </li>
        )
    }
}

export default ActivePaginationLi