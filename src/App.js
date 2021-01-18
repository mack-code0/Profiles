import "./utils/bootstrap.min.css"
import './App.css';
import Header from "./components/Header"
import { Component } from "react";
import axios from "axios"
import ProfileCardHolder from "./components/ProfileCardHolder"
import Pagination from "./components/Pagination"
import NoContact from "./components/NoContact"

class App extends Component {
  state = {
    users: [],
    exUsers:[],
    totalPages: "",
    currentPage: "",
    noContact: false
  }

  componentDidMount(){
    axios.get("https://api.enye.tech/v1/challenge/records")
    .then(res=>{
      const totalPages = (res.data.records.profiles.length%20)>0?(Math.floor(res.data.records.profiles.length/20))+1:Math.floor(res.data.records.profiles.length/20)
      this.setState({totalPages: totalPages})
        this.setState({currentPage: 1})
        this.setState({users: res.data.records.profiles})
        this.setState({exUsers: this.state.users.slice(0, 20)})
    })
  }

  clicked = (page)=>{
    let end = page*20
    let start = end-20
    this.setState({currentPage: page})
    this.setState({exUsers: this.state.users.slice(start, end)})
    console.log("This is current="+page);
  }

  search = ()=>{
      // Declare variables
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById('myInput');
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName('li');
    
      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
          document.querySelector(".myPagination").style.display=""
          this.setState({noContact:  false})
        } else {
          li[i].style.display = "none";
          document.querySelector(".myPagination").style.display="none"
          this.setState({noContact: true})
        }
      }
  }

  render(){
    return (
      <div className="App">
        <Header search={this.search} />
        <ProfileCardHolder users={this.state.exUsers} />
        <Pagination clicked={this.clicked} currentPage={this.state.currentPage} pages={this.state.totalPages} />
        <NoContact noContact={this.state.noContact} />
      </div>
    );
  }
}

export default App;
