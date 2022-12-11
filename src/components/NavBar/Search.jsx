import React from 'react';

function Search() {
  function handleSearch(evt) {
    evt.preventDefault();
  }
  
  return (
    <form  className="d-flex" role="search">
    <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button onClick={handleSearch} className="btn btn-outline-success">Search</button>
  </form>
);
}

export default Search;