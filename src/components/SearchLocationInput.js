import InfoButton from "./InfoButton";

function SearchLocationInput({ http, location, setLocation, setUrl }) {

    return (
        <form 
            className="search_form" 
            onSubmit={(e) => {e.preventDefault(); setUrl(http + location)}}>
            <input
                autoFocus
                onChange={(e) => {setLocation(e.target.value)}} 
                type="text"  
            />
            <input type='submit' value="Change Location" />
            <InfoButton/>
        </form>
    )
}

export default SearchLocationInput;