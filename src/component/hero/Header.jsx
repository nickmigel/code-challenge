import React from 'react'

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <h1>TASTY BURGER</h1>
                    <p>Grab the best tasty burger of the town we make the best burger for you</p>
                    <button>Learn more</button>
                </div>
                <img src="/images/00.png" alt="chicken sandwich with lettuce tomatoe onions cheese pickles and ketchup" />
            </div>
            <div id='miniMenu'>
                <div className='menuCard'>
                    <img src='/images/kisspng-doner-kebab-kapsalon-pizza-turkish-cuisine-kebab-5ac9869a962f36.7779223015231566346152.png' alt='sandwich with roast beef lettuce cheese tomatoes sour kraut and bacon' />
                    <div>
                        <h5>Ham Burger</h5>
                        <p>$10.30</p>
                    </div>
                </div>
                <div className='menuCard'>
                    <img src='/images/kisspng-submarine-sandwich-barbecue-chicken-firehouse-subs-sub-sandwich-5b165469257050.2481338715281900571534.png'
                        alt='firehouse sub sandwich' />
                    <div>
                        <h5>Sub Sandwich</h5>
                        <p>$10.30</p>
                    </div>
                </div>
                <div className='menuCard'>
                    <img src='/images/kisspng-chicago-style-hot-dog-hamburger-barbecue-bxe1nh-mx-hot-dog-5a735972beccb3.3331627015175089787815.png' alt='hot dog with mustard relish and pickles' />
                    <div>
                        <h5>Hot Dog</h5>
                        <p>$10.30</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header