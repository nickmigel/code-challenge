import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='hero'>
                <div>
                    <h1>TASTY BURGER</h1>
                    <p>Grab the best tasty burger of the town we make the best<br /> burger for you</p>
                    <button>Learn more</button>
                </div>
                <div id='hero-div'>
                    <img id='hero-img' src="/images/00.png" alt="chicken sandwich with lettuce tomatoe onions cheese pickles and ketchup" />
                </div>
            </div >

            <div id='miniMenu'>
                <div className='menuCard'>
                    <div className='circle one'>
                        <img src='/images/kisspng-doner-kebab-kapsalon-pizza-turkish-cuisine-kebab-5ac9869a962f36.7779223015231566346152.png' alt='sandwich with roast beef lettuce cheese tomatoes sour kraut and bacon' />
                    </div>
                    <div>
                        <h5>Ham Burger</h5>
                        <p>$10.30</p>
                    </div>
                </div>
                <div className='menuCard'>
                    <div className='circle two'>
                        <img src='/images/kisspng-submarine-sandwich-barbecue-chicken-firehouse-subs-sub-sandwich-5b165469257050.2481338715281900571534.png'
                            alt='firehouse sub sandwich' />
                    </div>
                    <div>
                        <h5>Sub Sandwich</h5>
                        <p>$10.30</p>
                    </div>
                </div>
                <div className='menuCard'>
                    <div className='circle'>
                        <img src='/images/kisspng-chicago-style-hot-dog-hamburger-barbecue-bxe1nh-mx-hot-dog-5a735972beccb3.3331627015175089787815.png' alt='hot dog with mustard relish and pickles' />
                    </div>
                    <div>
                        <h5>Hot Dog</h5>
                        <p>$10.30</p>
                    </div>
                </div>
            </div>
            <div id='fries'>
                <img src="\images\kisspng-french-fries-deep-frying-junk-food-french-fries-5a81fb02577680.2267572515184678423583.png" alt="french fries" />
            </div>
        </header >
    )
}

export default Header