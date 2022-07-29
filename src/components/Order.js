import React from 'react'

function Order({ details }) {
    if (!details) {
        return <h3>Working fetching Order...</h3>
    }

    return (
        <div className='container'>
            <h2>{details.name}'s order:</h2>
            <p>Extras: {details.extra}</p>
            <p>Size: {details.size}</p>
            {/* <p>Toppings: {details.filter( )}</p> */}
        </div>
    )
}

export default Order
