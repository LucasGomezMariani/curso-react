import React from 'react';
// import { useState } from 'react';
// import { getSearchItems } from '../../service/fireStore';


/* ------------------------------------------------------------------------------------------------ */
// En construción. Todavia no puedo lograr que se conecte a la base de datos y haga el filter segun el input onChange..

function Search() {
  // const [searchKeyword, setSearchKeyword] = useState("");

  //  function handleSearch(evt) {
  //   setSearchKeyword(evt.target.value)
  // }

  // async function getItemsFiltered() {
  //   let answer = await getSearchItems(searchKeyword);
  //   return answer;
  // }

  function clickSearch(evt) {
    evt.preventDefault();
    // getItemsFiltered();
  }


  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        // onChange={handleSearch}
      />
      <button onClick={clickSearch} className="btn btn-outline-success">Search</button>
    </form>
  );
}

export default Search;