import SearchLocationInput from './SearchLocationInput';

function Header({ http, location, setLocation, setUrl }) {
    return (
        <div className="header_div">
            <h1>Weathered</h1>
            <SearchLocationInput 
                http={http}
                location={location}
                setLocation={setLocation}
                setUrl={setUrl}
            />
        </div>
    )
}

export default Header;