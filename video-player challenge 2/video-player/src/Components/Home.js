import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
                <Link to="/reactnativejs">react native js</Link>
            <br/>
                <Link to="/reactjs">react js</Link>
        </div>
    )
}

export default Home;
