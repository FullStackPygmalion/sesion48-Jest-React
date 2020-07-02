import React from 'react'

import Header from '../components/header'
import Product from '../components/product'

const Home = () => (
    <React.Fragment>
        <Header />
        <Product name="Chocorramo" price="2500" desciption="Rico chocorramo" />
    </React.Fragment>
)

export default Home