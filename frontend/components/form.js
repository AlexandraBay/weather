import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValue = this.handleValue.bind(this);
    }

    handleSubmit(event) {
        this.props.onCityChanged(this.state.value);
    }

    handleValue(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="form">
                <input type="text" placeholder="Enter city name..." onChange={this.handleValue}/>
                <button onClick={this.handleSubmit}>Find</button>
            </div>
        );
    }
}

module.exports = Form;