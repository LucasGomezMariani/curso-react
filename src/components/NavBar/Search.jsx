import React from 'react';
import { useState } from 'react';
import { getSearchItems } from '../../service/fireStore';


function Search() {
  const [searchKeyword, setSearchKeyword] = useState("");

  function handleSearch(evt) {
    setSearchKeyword(evt.target.value)
  }

  async function getItemsAsync() {
    let answer = await getSearchItems(searchKeyword);
    setProducts(answer);
    return products;
  }

  function clickSearch(evt) {
    evt.preventDefault();
    getItemsAsync();    
  }


  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleSearch}
      />
      <button onClick={clickSearch} className="btn btn-outline-success">Search</button>
    </form>
  );
}

export default Search;