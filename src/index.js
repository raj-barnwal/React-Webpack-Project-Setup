import React from 'react';
import ReactDOM from 'react-dom';
import BasicForm from './components/BasicForm';


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<BasicForm />, wrapper) : false;