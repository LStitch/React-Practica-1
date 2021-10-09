import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component{
    render(){
        return(
            <body>
                
            </body>
        )
    };
}

export default Header;

Header.propTypes={
    texto:PropTypes.string,
    numero:PropTypes.number,
    booleano:PropTypes.bool,
    arreglo:PropTypes.array,
    function:PropTypes.func,
    objeto:PropTypes.object,
    etiqueta:PropTypes.object
}