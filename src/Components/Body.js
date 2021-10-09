import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Body extends Component{
    render(){
        const {texto} = this.props;
        const {temas} = this.props;
        return(
            <div>
                <p>{texto}</p>
                <p>{temas}</p>
            </div>
        )
    };
}

export default Body;

Body.propTypes={
    texto:PropTypes.string,
    numero:PropTypes.number,
    booleano:PropTypes.bool,
    arreglo:PropTypes.array,
    function:PropTypes.func,
    objeto:PropTypes.object,
    etiqueta:PropTypes.object
}
