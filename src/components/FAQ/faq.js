import React from 'react';
import './faq.css';
import Rectangle9 from '../../images/Rectangle9.png';
import Group14 from '../../images/Group14.png';
import {FaqQuestions} from "../FaqQuestions/FaqQuestions";

export class Faq extends React.Component{

    render(){
        let message = 'Questions and Answers on Professional Traffic Permits:';
        let title = 'faq';
        return(
            <div className='faq'>
                <img  src={Rectangle9} id='rectangle9'/>
                <img className='group' src={Group14}/>
                <div className='container-title'>
                    <div className='title-faq'>
                        <p className='title-f'>{title}</p>
                        <p className='msg-f'>{message}</p>
                    </div>
                </div>
                <FaqQuestions/>
            </div>
        )
    }
}