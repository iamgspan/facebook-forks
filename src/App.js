import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/search/searchbar-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Token from './components/token/token-component';
import CardList from './components/cardList/card.list-component';
import Pagination from './components/pagination/paginate-component';


class App extends Component { 
    constructor(){
      super();

      this.state = {
        forkUsers: [],
        searchBox: '',
        currentPage: 1
      }
    } 
    
    componentDidMount() { 
      document.title = "Facebook/React forks list"

      axios.get(`https://api.github.com/repos/facebook/react/forks`).then(res => {
        this.setState({forkUsers: res.data})
        toast.dismiss()
      })
    }
    
    
    getForkUsersList() {      
        axios.get(`https://api.github.com/repos/facebook/react/forks?page=${this.state.currentPage}`).then(res => {
          this.setState({forkUsers: res.data})
          toast.dismiss()
        })
      }
    
    saveToken = e => {
      this.setState({token: e.target.value})
    }

    handleFollow = e => {
      let config = {
        method: 'PUT',
        url: `https://api.github.com/user/following/${e.target.id}`,
        headers: { 
            'Authorization': `token ${this.state.token}`
        }}

      axios(config).then(response => {
        if (response.status === 204) {
          toast.success(`Successfully followed user!`)
        } else {
          toast.error(`Error following user!`)
        }
      }).catch(error => {
        if (this.state.token === undefined || this.state.token === null) {
            toast.error('Enter correct OAuth token!')
        } else {
          toast.warn(`Error following user: ${error}`)
        }
      });
    }

    render(){   
      const { currentPage, forkUsers, searchBox } = this.state;
      const filteredUsers = forkUsers.filter((user => user.owner.login.toLowerCase().includes(searchBox.toLowerCase())));
      
      const nextPage = async() => {
        toast.info('Loading next page...')
        await this.setState({currentPage : currentPage + 1});
        this.getForkUsersList();
      }

      const prevPage = async() => {
        toast.info('Loading previous page...')
        await this.setState({currentPage : currentPage - 1});
        this.getForkUsersList();
      } 
       

      return (
        <div className="App">
          <ToastContainer />
          <div>
            <SearchBar placeholder='Search Users' handleSearch={e => this.setState({searchBox: e.target.value}) }/>
            <Token placeholder='Enter auth token' saveToken={this.saveToken} />          
            <CardList forkUsers={filteredUsers} handleFollow={this.handleFollow} />
          </div>
          <div>
            <Pagination totalRecords={forkUsers.length} nextPage={nextPage} prevPage={prevPage}  />
          </div>
        </div>
      );
  }
}

export default App;
