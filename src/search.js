
function SearchIt({setSearch}){

    return(
        <input className="search-bar"
       
  placeholder='Search ...' 
  onChange={e=> setSearch(e.target.value)}
/>
    )
}
export default SearchIt