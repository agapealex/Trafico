import React from 'react';
import './apply.css';
import illustrations from '../../images/illustrations.png';
import {TextComp} from '../TextComp/TextComp';

export class Apply extends React.Component{
    render(){
        var title = 'How to apply';
        var message = "When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.";
        return(
            <div id='apply'>
                <div className='left-p'>
                    <img src = {illustrations} id='illustrations'></img>
                </div>
                <div className='right-p'>
                    <div className='right-text'>
                        <TextComp title={title} msg={message} />
                    </div>
                </div>
            </div>
        )
    }
}