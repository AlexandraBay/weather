import React from 'react';
import axios from 'axios';
import Form from './form';
import View from './view';
import Days from './days';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {},
            forecast: [],
            currentDay: 0,
            city: ''
        };
        this.appid = '3b2be9e9dca6481a62bcb8b9e2d61cf6';

        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleAjaxRespForecast = this.handleAjaxRespForecast.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
    }

    getUrlQueryForecast(city) {
        return `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.appid}`;
    }

    handleCityChange(city) {
        city = city === '' ? 'Novosibirsk'
            : city;
        axios.get(this.getUrlQueryForecast(city))
            .then(this.handleAjaxRespForecast)
            .catch(
                function (error) {
                    alert('Wrong city name');
                }
            );
    }

    handleAjaxRespForecast(result) {
        const city = result.data.city.name;
        const allForecast = result.data.list.map((item) => {
            return {
                temperature: item.main.temp,
                icon: item.weather[0].icon,
                date: item.dt
            }
        });
        const forecast = allForecast.filter((item, index) => {
            return index % 8 === 0;
        });

        this.setState({forecast, city});
    }

    handleDayChange(currentDay) {
        this.setState({currentDay})
    }

    render() {
        const countDays =  this.state.forecast.length > 14 ? 14 : this.state.forecast.length;
        const currentWeather = countDays > 0 ? this.state.forecast[this.state.currentDay] : {};

        return (
            <div>
                <Form
                    onCityChanged = {this.handleCityChange}
                />
                <View
                    weather = {currentWeather}
                    city = {this.state.city}
                />
                <Days
                    count = {countDays}
                    onDayChanged = {this.handleDayChange}
                />
            </div>
        )
    };
}

module.exports = Container;