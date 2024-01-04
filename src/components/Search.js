import React, {useState} from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages.js";

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

export default Search;