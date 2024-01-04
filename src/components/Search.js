import React, {useState} from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages.js";
import PropTypes from "prop-types";

const Search = ({setSearchResults}) => {
    const [value, setValue] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(value));
    }

    return(
      <div className="search">
        <form onSubmit={handleSubmit} className="search-form">
            <input className="search-input"  type="text" onChange={(e) => setValue(e.target.value)}/>
            <button className="search-button"  type="submit">Search!</button>
        </form>
      </div>
    )
}
Search.propTypes = {
    setSearchResults: PropTypes.func.isRequired,
  }

export default Search;