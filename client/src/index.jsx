import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';


class App extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      collection: [
      {title: 'Game Of Thrones'}, 
      {title: 'Silence Of The Lambs'}, 
      {title: 'One Flew Over the Cuckoo\'s Nest'}
      ]
    };
    this.onClickHandle = this.onClickHandle.bind(this);
    this.onAddHandle = this.onAddHandle.bind(this);
  }

  onAddHandle(value) {
    var newCollection = this.state.collection.concat([{'title': value}]);
    this.setState({
      collection: newCollection
    })
  }

  onClickHandle(value) {
    var filteredCollection = this.state.collection.filter((movie) => movie.title.toLowerCase() === value.toLowerCase());
    this.setState({
      collection: filteredCollection
    })
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