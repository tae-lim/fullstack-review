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
  }

  componentDidMount() {
    let that = this;
    function setData(response) {
      that.setState({
        repos: response
      });
    }
    $.ajax({
      type: "GET",
      url: "/repos",
      success: function(topRepos) {
        setData(topRepos);
        console.log('this is the data', data);
        console.log('this is the repos', that.state.repos);
      },
      failure: function() {
        console.log('It didnt work!');
      }
    })
  }

  search (term) {
    //console.log(`${term} was searched`);
    // TODO
      //send the search string to server using jQuery ajax method to send a POST request to repos.
    $.ajax({
      type: "POST",
      url: "http://localhost:1128/repos",
      data: {term: term},
      success: function(data) {
        console.log('It worked!');
      },
      failure: function() {
        console.log('It didnt work!');
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));