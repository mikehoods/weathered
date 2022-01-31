
function InfoButton() {
    return (
        <div className="help">
            <p className="question">?</p>
            <div className="popup">
                <h3>Acceptable Search Parameters</h3>
                <ul>
                    <li>Latitude and Longitude (Decimal degree) e.g: 48.8567,2.3508</li>
                    <li>City name e.g.: Paris</li>
                    <li>US zip e.g.: 10001</li>
                    <li>UK postcode e.g: SW1</li>
                    <li>Canada postal code e.g: G2J</li>
                    <li>metar: (metar code) e.g: metar:EGLL</li>
                    <li>iata: (3 digit airport code) e.g: iata:DXB</li>
                </ul>
                
            </div>
        </div>
    )
}

export default InfoButton
