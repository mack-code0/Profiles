const { Component } = require("react");

class PaginationLi extends Component{
    render(){
        let page = this.props.page
        return(
            <li onClick={this.props.clicked.bind(this, page)} className="page-item"><a className="page-link">{page}</a></li>
        )
    }
}

export default PaginationLi