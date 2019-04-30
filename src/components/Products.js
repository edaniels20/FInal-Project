import React from 'react'

function Products(props) {
    console.log("Ran")
    return(
        <>
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="products-item">
                    <img className="img-responsive" src={props.data.image} alt="UHOH"/>
                    <p>{props.data.make} {props.data.model}</p>
                    <p>{props.data.description}</p>
                    <p>MPG {props.data.mpg}</p>
                    <a href="#">ViewMore</a>
                </div>
            </div>
        </>
    )
}


export default Products