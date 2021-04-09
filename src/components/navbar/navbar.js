import React from 'react';
import './navbar.css';
import {MainButton} from '../MainButton/MainButton';

export class NavBar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <a>About</a>
                <a>How to</a>
                <a>Faqs</a>
                <MainButton nameBtn='Contact Us' showSign={false} style={{width: '9.87vw', height: '3.75vw'}}/>
            </div>
        )
    }
}