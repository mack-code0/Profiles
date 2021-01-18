import PaginationLi from "./PaginationLi"
import ActivePaginationLi from "./ActivePaginationLi"
const { Component } = require("react");

class Pagination extends Component{
    render(){
        let total = this.props.pages
        let arr = []
        for(let i=1; i<=total; i++){
            arr.push(i)
        }
        return(
            <nav className="myPagination" aria-label="...">
            <ul className="pagination pagination-lg justify-content-center">
                {arr.map(index => this.props.currentPage==index?<ActivePaginationLi page={index} />:<PaginationLi clicked={this.props.clicked} page={index} />)}
            </ul>
            </nav>
        )
    }
}

export default Pagination