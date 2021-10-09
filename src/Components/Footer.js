import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component{
    render(){
        const {pie} = this.props;
        return(
            <div>
                {pie}
            </div>
        )
    };
}

export default Footer;

Footer.propTypes={
    texto:PropTypes.string,
    numero:PropTypes.number,
    booleano:PropTypes.bool,
    arreglo:PropTypes.array,
    function:PropTypes.func,
    objeto:PropTypes.object,
    etiqueta:PropTypes.object
}