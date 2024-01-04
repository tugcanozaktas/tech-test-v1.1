import React, {useState} from "react";
import "../styles/Search.css";

const Search = () => {
    const [value, setValue] = useState(null);

    return(
      <div className="search">
        <form className="search-form">
            <input className="search-input"  type="text" onChange={(e) => setValue(e.target.value)}/>
            <button className="search-button"  type="submit">Search!</button>
        </form>
      </div>
    )
}

export default Search;