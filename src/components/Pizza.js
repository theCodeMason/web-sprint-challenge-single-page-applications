import React from "react"
import { Link } from 'react-router-dom';

export default function Form(props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }
    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target
        console.log(evt.target)
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
    }

    return (
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
            </div>
            <label>Name:
                <input
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    id="name-input"
                    onChange={onChange}
                    value={values.name} />
            </label>
            <label>Pizza Size:
                <select name="size" id="size-dropdown" value={values.size} onChange={onChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </label>
            <label>Toppings:
                <label>Pepperoni
                    <input name="pepperoni" value={values.pepperoni} onChange={onChange} type="checkbox" />
                </label>
                <label>Sausage
                    <input name="sausage" value={values.sausage} onChange={onChange} type="checkbox" />
                </label>
                <label>Cheese
                    <input name="cheese" value={values.cheese} onChange={onChange} type="checkbox" />
                </label>
                <label>Chicken
                    <input name="chicken" value={values.chicken} onChange={onChange} type="checkbox" />
                </label>
            </label>
            <label>
                <input type="text" name="extra" value={values.extra} id="special-text" placeholder="Any special requests?" onChange={onChange} />
            </label>
            <button id="order-button" disabled={disabled}>Add to order</button>
            <Link to='/'>
                <button className="home-button">Return to Home</button>
            </Link>
        </form>
    )
}
