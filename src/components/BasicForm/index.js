import React, {Component} from 'react';
import './../../assets/stylesheets/style.scss';

class BasicForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: "React Project"
        }
    }

    render() {
        const {heading} = this.state;
        return ( 
            <h1>{heading}</h1>     
        );
    }
}

export default BasicForm;