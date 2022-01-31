import InfoButton from "./InfoButton";

export default function SearchLocationInput({ http, location, setLocation, setUrl }) {
    return (
        <form 
            className="search_form" 
            onSubmit={(e) => {e.preventDefault(); setUrl(http + location)}}>
            <input 
                onChange={(e) => {setLocation(e.target.value)}} 
                type="text" 
                value={location} 
            />
            <input type='submit' value="Change Location" />
            <InfoButton/>
        </form>
    )
}
