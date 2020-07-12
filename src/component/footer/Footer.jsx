import React from 'react'

const Footer = () => {
    return (
        <div id='copyright'>
            <nav className='footer'>
                <subNav id='lorem'>
                    <h3><span>Burger</span>Hub</h3>
                    <div id='lorem2'>
                        <p>lorem ipsum dollar seat amet lorem<br /> ipsum dollar not a seat amet dollar seat<br /> is amet</p>
                    </div>
                </subNav>
                <subNav>
                    <h4>Quick Link</h4>
                    <p>About us</p>
                    <p>Categories</p>
                    <p>Find Jobs</p>
                    <p>Blog</p>
                </subNav>
                <subNav>
                    <h4>Navigation</h4>
                    <p>Find Jobs</p>
                    <p> Categories</p>
                    <p> Careers</p>
                    <p> Contact</p>
                </subNav>
                <subNav>
                    <h4>Contact</h4>
                    <p>Contact us</p>
                    <p>Press</p>
                    <p>Careers</p>
                    <p>FAQ</p>
                </subNav>
            </nav>
            <p>2020 All Rights Reserved</p>
        </div>
    )
}

export default Footer