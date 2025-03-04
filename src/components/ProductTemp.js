import React from "react";

const ProductTemp = (name,image,rating,item1,price1,rating1,item2,price2,rating2,detail) => {
    return (
        <div>
            <h1>Bestsellers</h1>
            <div className="text-white text-xl">
                <h1>name</h1>
                <h2>rating</h2>
                <img src={image} />
            </div>
            <div>
                <div>
                    <h1>PACKAGE</h1>
                    <h1>{item1}</h1>
                    <h2>{rating1}</h2>
                    <h2>{price1}</h2>
                    <p>{detail}</p>
                </div>
                <div>
                    <h1>PACKAGE</h1>
                    <h1>{item2}</h1>
                    <h2>{rating2}</h2>
                    <h2>{price2}</h2>
                    <p>{detail}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductTemp
