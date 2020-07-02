import React from 'react'

import Header from '../components/header'
import Product from '../components/product'

const Detail = (props) => {
    const product = {}
    return (
        <React.Fragment>
            <Header />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-12">
                        <Product {...product} />

                    </div>
                </div>
            </div>
            </React.Fragment>
)}

export default Detail