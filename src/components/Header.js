import React, { Component } from  "react"

class Header extends Component{
    render(){
        return(
            <header className="dark-bg text-center p-3 d-flex justify-content-between">
                <h3>PROFILES</h3>
                <form id="form" className="d-flex align-items-center">
                    <input className="form-control trans" id="myInput" onKeyDown={this.props.search.bind(this)} type="search" placeholder="Search" aria-label="Search" />
                    {/* <button className="btn blue-bg ml-1" type="submit"><i class="bx bx-search-alt"></i></button> */}
                </form>
            </header>
        )
    }
}

export default Header