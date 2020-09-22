import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './searchbar';
import Gif from './gif';
import GifList from './giflist';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gifArray: [],
      selectedGifId: "fx5Eg6LbyUq8RSWAKy"
    };
  }


  search = (query) => {
    giphy('1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifArray: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifArray={this.state.gifArray} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
