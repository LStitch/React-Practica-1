import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Banner2 extends Component{
    render(){
        const {texto} = this.props;
        return(
            <div>
                {texto}
            </div>
        )
    };
}

export default Banner2;

Banner2.propTypes={
    texto:PropTypes.string,
    numero:PropTypes.number,
    booleano:PropTypes.bool,
    arreglo:PropTypes.array,
    function:PropTypes.func,
    objeto:PropTypes.object,
    etiqueta:PropTypes.object
}

Banner2.defaultProps={
    texto:"8 de Octubre de 2021"
}