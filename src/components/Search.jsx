import { getDefaultNormalizer } from "@testing-library/dom";
import React, { useState } from "react";

const Search = ({getName}) => {

    const [text, setText] = useState("");

    const onChange = (name) => {
        setText(name);
        getName(name);
        
    }

    
  return (
    <div className="search_container">
      <form>
        <input 
        className="search" 
        type="text" 
        placeholder="Search caracters" 
        value={text} 
        onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
