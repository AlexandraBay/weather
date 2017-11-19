import React from 'react';

class Days extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    handleDayClick(event) {
        this.props.onDayChanged(event.target.value);
    }

    render() {
        const dayList = Array(this.props.count).fill(0).map((item, index) => {
            return [
                <button onClick={this.handleDayClick} value={index}>
                    {index+1}
                </button>
            ];
        });
        return (
            <div className="days">{dayList}</div>
        )
    }
}

module.exports = Days;