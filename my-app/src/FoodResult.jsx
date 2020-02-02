import React, { Component } from 'react'

class FoodResult extends Component {
    render() {
        const {data} = this.props.location.state
        return (
            <div>
                <p>food</p>
                <p>{data['carbon-footprint_100g']}</p>
            </div>
        )
    }
}

export default FoodResult
