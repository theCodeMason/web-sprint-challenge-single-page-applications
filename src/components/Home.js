import React from "react"
import { Link } from 'react-router-dom';
import './Home.css'
export default function Home() {
    return (
        <div className='container'>
            <Link id="order-pizza" to='/pizza'>
                <div className="home-button">Home</div>
            </Link>
        </div>
    )
}
