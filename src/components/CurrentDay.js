import HourlyForecast from './HourlyForecast';

function CurrentDay({
    conditionIcon,
    conditionText,
    current_temp_f,
    data,
    feelslike_f,
    hourly,
    localtime,
    name,
    region
 }) {
    return (
        <div className="current_div">
            <div className="locationHeader_div">
                <div className="condition_div">
                    <img src={conditionIcon} alt={conditionText}></img>
                        <div className="name_div">
                            <h3>{name}, {region}</h3>
                            <p>{localtime}</p>
                        </div>
                </div>
                <div className="temps_div">
                    <p className="temp_p">Current: <span className="temp_span">{current_temp_f}&deg;</span></p>
                    <p className="temp_p">Feels Like: <span className="temp_span">{feelslike_f}&deg;</span></p>
                </div>
            </div>
            <HourlyForecast data={data} hourly={hourly} />
        </div>
    )
}

export default CurrentDay;