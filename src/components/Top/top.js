import React from 'react';
import './top.css';
import mobel from '../../images/mobel.png';
import scene from '../../images/Scene.png';
import logo from '../../images/logo.png';
import {NavBar} from '../navbar/navbar';
import {MainButton} from'../MainButton/MainButton';

export class Top extends React.Component{
    render(){
        let motto = 'Your awesome traffic permit consultant.'
        return(
            <div className='clr-div'>
                <img src={scene} className="scene" />
                <img src={mobel} className="mobel" />
                <div className="top">
                    <div className="top-nav">
                        <img src={logo} className="logo" />
                        <NavBar/>
                    </div>

                    <p className="motto">
                        {motto}
                    </p>                    
                    <MainButton nameBtn='Get started' showSign={true} style={{width: '13.75vw', height: '3.75vw', marginTop: '3.75vw'}}/>
                </div>
            </div>
        )
    }
}