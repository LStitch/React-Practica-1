import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Banner1 extends Component{
    render(){
        const {texto} = this.props;
        return(
            <div>
                {texto}
            </div>
        )
    };
}

export default Banner1;

Banner1.propTypes={
    texto:PropTypes.string,
    numero:PropTypes.number,
    booleano:PropTypes.bool,
    arreglo:PropTypes.array,
    function:PropTypes.func,
    objeto:PropTypes.object,
    etiqueta:PropTypes.object
}

Banner1.defaultProps={
    texto:"Desarrollo de Aplicaciones para Dispositivos Móviles"
}