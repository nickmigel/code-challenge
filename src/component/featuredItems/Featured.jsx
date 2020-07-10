import React from 'react'

const Featured = () => {
    return (
        <>
            <h2 id='title'>Featured Categories</h2>
            <section id='featured'>

                <div className='bigCard'>
                    <img src="/images/kisspng-doner-kebab-kapsalon-pizza-turkish-cuisine-kebab-5ac9869a962f36.7779223015231566346152.png" alt="a hamburger i guess??" />
                    <h3>hamburger</h3>
                    <div className='stars'>
                        <img src="/images/noun_Star_3203070.png" alt="" />
                        <img src="/images/noun_Star_3203070.png" alt="" />
                        <img src="/images/2noun_Star_3203070.png" alt="" />
                    </div>
                    <h4>$3.25</h4>
                    <button className='square'>Buy now</button>
                </div>
                <div className='bigCard'>
                    <img src="/images/kisspng-submarine-sandwich-barbecue-chicken-firehouse-subs-sub-sandwich-5b165469257050.2481338715281900571534.png" alt="a sub sandwich" />
                    <h3>Sub Sandwich</h3>

                    <div className='stars'>
                        <img src="/images/noun_Star_3203070.png" alt="" />
                        <img src="/images/noun_Star_3203070.png" alt="" />
                        <img src="/images/2noun_Star_3203070.png" alt="" />
                    </div>
                    <h4>$15.25</h4>
                    <button className='square'>Buy now</button>
                </div>
                <div className='bigCard'>
                    <img src="/images/kisspng-chicago-style-hot-dog-hamburger-barbecue-bxe1nh-mx-hot-dog-5a735972beccb3.3331627015175089787815.png" alt="a hot dog" />
                    <h3>Hot Dogs</h3>
                    <div className='stars'>
                        <img src="/images/noun_Star_3203070.png" alt="" />
                        <img src="/images/noun_Star_3203070.png" alt="" />
                        <img src="/images/2noun_Star_3203070.png" alt="" />
                    </div>
                    <h4>$25.50</h4>
                    <button className='square'>Buy now</button>
                </div>
            </section>
            <div id='parsley'>
                <img src="\images\kisspng-mentha-spicata-peppermint-maghrebi-mint-tea-mentha-mint-png-clipart-5a74b43eb9ca18.242593481517597758761.png" alt="" />
            </div>
        </>
    )
}

export default Featured