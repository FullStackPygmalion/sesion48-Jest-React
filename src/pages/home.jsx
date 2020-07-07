import React, { useEffect, useState } from 'react'

import Header from '../components/header'
import Product from '../components/product'

const API = 'https://shopping-node.vercel.app/api/products/'

const getProducts = async (setProducts) => {
    try {
        const result = await fetch(API)
        const products = await result.json()
        setProducts(products)
    } catch (error) {
        console.error('No se pudo mostrar la informacion', error)
    }
}

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts(setProducts)
    }, [])

    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="row">
                    {products.map((product, id) =>
                        <div className="col-md-4 col-sm-6 mb-4" key={id}>
                            <Product  {...product} />
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
