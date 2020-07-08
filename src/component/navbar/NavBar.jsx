import React from 'react'

const NavBar = () => {
    return (
        <div id='navbar'>
            <h2><span className='burger'>Burger</span>Hub</h2>
            <nav>
                <a href="#" id='target'>Home</a>
                <a href="#">About</a>
                <a href='#'>Food</a>
                <a href='#'>contact</a>
                <a id='download' href='#'>Download</a>
            </nav>
        </div>
    )
}

export default NavBar