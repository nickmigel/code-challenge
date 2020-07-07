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
                <img src="https://public-v2links.adobecc.com/21c48864-e471-4b2c-6ff5-b35113d11222/component?params=component_id%3A7884ebfe-ee50-4860-9df1-df969fbc1269&params=version%3A0&token=1594136298_da39a3ee_f69823b6f9bc55fe36a8f210fb7e5b03c76ae1ea&api_key=CometServer1" alt="chicken sandwich with lettuce tomatoe onions cheese pickles and ketchup" />
            </div>
            <div id='miniMenu'>
                <div className='menuCard'>
                    <img src='https://public-v2links.adobecc.com/21c48864-e471-4b2c-6ff5-b35113d11222/component?params=component_id%3A7011c36e-02ad-4646-af22-95748c8b5d9b&params=version%3A0&token=1594136298_da39a3ee_f69823b6f9bc55fe36a8f210fb7e5b03c76ae1ea&api_key=CometServer1' alt='sandwich with roast beef lettuce cheese tomatoes sour kraut and bacon' />
                    <div>
                        <h5>Ham Burger</h5>
                        <p>$10.30</p>
                    </div>
                </div>
                <div className='menuCard'>
                    <img src='https://public-v2links.adobecc.com/21c48864-e471-4b2c-6ff5-b35113d11222/component?params=component_id%3A5c10d555-1304-425b-92eb-4a436bdd7a08&params=version%3A0&token=1594136298_da39a3ee_f69823b6f9bc55fe36a8f210fb7e5b03c76ae1ea&api_key=CometServer1'
                        alt='firehouse sub sandwich' />
                    <div>
                        <h5>Sub Sandwich</h5>
                        <p>$10.30</p>
                    </div>
                </div>
                <div className='menuCard'>
                    <img src='https://public-v2links.adobecc.com/21c48864-e471-4b2c-6ff5-b35113d11222/component?params=component_id%3A7825660e-444e-4c3c-b557-63ff19ebbb6f&params=version%3A0&token=1594136298_da39a3ee_f69823b6f9bc55fe36a8f210fb7e5b03c76ae1ea&api_key=CometServer1' alt='hot dog with mustard relish and pickles' />
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