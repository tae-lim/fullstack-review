import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.setData = this.setData.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  setData (data) {
    this.setState({
      repos: data
    })
  }

  fetch() {
    $.ajax({
      type: "GET",
      url: "/repos",
      context: this,
      success: (topRepos) => {
        this.setData(topRepos);
        console.log(this.state.repos);
      },
      failure: () => {
        console.log('It didnt work!');
      }
    })
  }

  componentDidMount() {
    this.fetch();
  }

  search (term) {
    //console.log(`${term} was searched`);
    // TODO
      //send the search string to server using jQuery ajax method to send a POST request to repos.
    $.ajax({
      type: "POST",
      url: "/repos",
      data: {term: term},
    })
    .done(function(res) {
       window.location.reload();
    })
  }

  //   search (term) {
  //   //console.log(`${term} was searched`);
  //   // TODO
  //     //send the search string to server using jQuery ajax method to send a POST request to repos.
  //   $.ajax({
  //     type: "POST",
  //     url: "/repos",
  //     data: {term: term},
  //     success: (data) => {
  //       this.fetch();
  //       console.log(this);
  //       console.log('It worked!');
  //     }

  //   });

  // }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));