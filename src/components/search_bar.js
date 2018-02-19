import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }
  render() {
    // console.log(window.document.body);
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;

//html inputs has a property of onChange
//those with eventhandlers (like onChange, onSubmit...), have an event object
