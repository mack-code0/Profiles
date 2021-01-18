const { Component } = require("react");

class NoContact extends Component{
    render(){
        if(!this.props.noContact){
            return(<span className="d-none"></span>)
        }else{
            return(
                <section style={{height: "80vh"}} className="w-100 d-flex align-items-center justify-content-center no-contacts">
                    <h1 style={{color: "rgb(192, 192, 192)", fontSize: "4rem"}}>No Contacts</h1>
                </section>
            )
        }
    }
}

export default NoContact