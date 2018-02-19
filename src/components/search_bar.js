import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;

//html inputs has a property of onChange
//those with eventhandlers (like onChange, onSubmit...), have an event object
