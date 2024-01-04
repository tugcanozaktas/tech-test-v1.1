import React from "react";
import "../styles/SearchResults.css";
import PropTypes from "prop-types";

const SearchResults = ({searchResults}) =>{

  return (
    <>
      <p><b><i>Search Results</i></b></p>
      <div className="search-results">
        {searchResults.map((link, index) => (
          <img key={index} className="image-card"  src={link} alt="spaceImage" />))}
        
      </div>
    </>
  )
};
SearchResults.propTypes = {
    searchResults: PropTypes.arrayOf(
        PropTypes.string,
    ).isRequired,
  }
export default SearchResults;