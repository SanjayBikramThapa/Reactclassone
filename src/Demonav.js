import React from 'react'
import { Link } from 'react-router-dom'
const Demonav = () => {
    return (
        <>
            <ul>
                <li><Link to="/"></Link></li>
                <li><Link to="/test/demo">link2</Link></li>
            </ul>
        </>
    )
}

export default Demonav
