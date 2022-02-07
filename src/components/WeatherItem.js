import React from 'react'

function WeatherItem({ icon, iconAlt, text }) {
    return (
        <div className="icon_div">
                    <img className="icon" src={icon} alt={iconAlt} />
                    <p className="data_p">{text}</p>
                </div>
    )
}

export default WeatherItem
