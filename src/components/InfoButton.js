
function InfoButton() {
    return (
        <div className="help">
            <p className="question">?</p>
            <div className="popup">
                <h3>Acceptable Search Parameters</h3>
                <ul>
                    <li><strong>Latitude and Longitude (Decimal degree): </strong>48.8567,2.3508</li>
                    <li><strong>City name: </strong>Paris</li>
                    <li><strong>US zip: </strong>10001</li>
                    <li><strong>UK postcode: </strong>SW1</li>
                    <li><strong>Canada postal code: </strong>G2J</li>
                    <li><strong>3 digit airport code: </strong>DXB</li>
                    <li><strong>metar:(metar code): </strong>metar:EGLL</li>
                </ul>   
            </div>
        </div>
    )
}

export default InfoButton
