import React, { Component } from 'react'

class FoodResult extends Component {
    render() {
        const {data} = this.props.location.state
        return (
            <div>
                
                <p>this food {data['product_name']}, also known as {data['generic_name']}, is served in the quantity of {data['serving_size']} per serving. 
                    the quantiy of this food comes in {data['quantity']} per packaging and the consumption of this product outputs a total carbon-footprint,
                    including everything from production to distribution of the product, is {data['carbon-footprint_100g']}  </p>
            </div>
        )
    }
}

export default FoodResult
