export default function SearchLocationInput({ http, location, setLocation, setUrl }) {
    return (
        <form 
            className="search_form" 
            onSubmit={(e) => {e.preventDefault(); setUrl(http + location)}}>
            <input 
                maxLength="5"
                onChange={(e) => {setLocation(e.target.value)}}
                pattern="^\d{5}$" 
                type="text" 
                value={location} 
            />
            <input type='submit' value="Search By Zip Code" />
        </form>
    )
}
