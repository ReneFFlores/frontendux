import React from 'react';

const MenuItem = (props) => {
    const op = Number(props.data.price);
    let finalPrice = op;
    props.data.discountPrice = finalPrice;
    return (
        <div className="col-xs-12 col-md-12 card-container">
            <div className="card">
                <div className="card-block">
                    <span className="card-title">{props.data.name}</span>
                    <br/>
                    <br/>
                        <div>
                            {'Precio: '}<span className="card-price original-price">{'Lps. ' + props.data.price}</span>
                            &nbsp;&nbsp;&nbsp;
                            <span className="card-price discounted-price">{' (isv incluido)'}</span>

                                <img src={props.data.url} alt="Italian Trulli">
                                </img>
                        </div>
                    <hr />
                    <span className="ingredients">{'Incluye: ' + props.data.ingredients.toString()}</span>
                </div>
            </div>
            <button onClick={e => props.addToCart(props.data)}>Agregar al Carrito</button>
        </div>
    );
};

export default MenuItem;
