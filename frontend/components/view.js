import React from 'react';

class View extends React.Component {
    constructor(props) {
        super(props);
    }

    formatDate(timeStemp) {
        let date = new Date(timeStemp).toDateString().split(' ').slice(0,3);

        return {
            weekday: date[0],
            day: date.slice(1,3).join(' ')
        };
    }

    render() {
        const temperature = this.props.weather.temperature - 273;
        const image = `https://openweathermap.org/img/w/${this.props.weather.icon}.png`;
        const {weekday, day} = this.formatDate(this.props.weather.date * 1000);
        const city = this.props.city;
        if (Object.keys(this.props.weather).length === 0 ) {
            return <div />
        }
        return (
            <div className="view">
                <h1 className="city">{city}</h1>
                <div className="weather"><img src={image} alt="icon" /> {temperature.toFixed(1)}</div>
                <div className="date">
                    {weekday}, {day}
                </div>
            </div>
        );
    }
}

module.exports = View;