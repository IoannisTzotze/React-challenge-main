import React, { Component } from "react";
import _debounce from 'lodash/debounce'
import axios from 'axios';
import Autosuggest from 'react-autosuggest'
import { Link } from 'react-router-dom'
import TMDBlogo from "../images/movie_logo.svg";
import { URL_SEARCH, API_KEY_ALT , IMG_SIZE_XSMALL } from '../const';
import theme from "./theme.module.css";

const getSuggestionValue = suggestion => {const newsuggest = suggestion.title

return newsuggest };


 const renderSuggestion = (suggestion) => (
    <div>
    <Link to= {`/moviedetails/${suggestion.id}`}> 
      <img className="searchResult-image" alt = {`Poster Path ${suggestion.title}`} src= {suggestion.poster_path === null ?  TMDBlogo : ( IMG_SIZE_XSMALL + suggestion.poster_path ) } />
        <div className="searchResult-text">
          <div className="searchResult-name">
            {suggestion.title}
          </div>
          <div className="searchResult-date">
          {suggestion.release_date}
        </div>
        </div>
        </Link>
    </div>
  );

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: []
    };
  }

    onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
  onSuggestionsFetchRequested = ({ value }) => {
  const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

          const url = URL_SEARCH + inputValue + API_KEY_ALT;

  return inputLength === 0 ? [] : axios.get(url).then(response => {
            this.setState({suggestions: response.data.results})
          }).catch(error => { console.log(`Error Message ${error}`)});
}
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  }


  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Search for a title...',
      value,
      onChange: this.onChange
    };

    const onSuggestionsFetchRequested = _debounce((term) => {this.onSuggestionsFetchRequested(term) }, 1000);

    return (
      
      <Autosuggest
      theme={theme}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
        
    );
  }
}

export default Search;