import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      collection : [
        {title: 'One Flew Over the Cuckoo\'s Nest'}
      ]
    };
    this.onClickHandle = this.onClickHandle.bind(this);
    this.onAddHandle = this.onAddHandle.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    $.ajax({
      url: '/movies'
    })
    .done((data) => this.setState({collection: data}))
  }

  onAddHandle(value) {
    var context = this
    var newCollection = this.state.collection.concat([{'title': value}]);
    $.ajax({
      url: '/movies',
      method: 'POST',
      data: JSON.stringify({'title': value}),
      contentType: 'application/json'
    })
    .done((data) => context.getMovies());
  }

  onClickHandle(value) {
    var filteredCollection = this.state.collection.filter((movie) => movie.title.toLowerCase() === value.toLowerCase());
    this.setState({
      collection: filteredCollection
    });
  }
  render() {
    return (
      <div>
      <h1>MovileList2</h1>
      <Search onClickHandle={this.onClickHandle}/>
      <MovieList collection={this.state.collection}/>
      <AddMovie onAddHandle={this.onAddHandle}/>
      </div>)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);