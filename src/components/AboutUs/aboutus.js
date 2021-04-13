import React from 'react';
import './aboutus.css';
import ilustration from '../../images/Illustration.png';
import {TextComp} from '../TextComp/TextComp';
import {Note} from '../Note/note';

export class AboutUs extends React.Component{
    render(){
        var message = 'The occupational traffic permit is one of the most important things in the company when carrying out freight transport. In fact, it is a prerequisite for doing business traffic at all.';
        var title = 'About Us';
        var note = 'How do you do when you need to obtain a commercial traffic permit for freight transport to your business?';

        return(
            <div id='about-us'>
                <img src = {ilustration} id='ilustration'/>
                <div className='left'>
                    <div className='text-about-us'>
                        <TextComp title={title} msg={message} />
                    </div>
                    <Note txt={note} />
                </div>
            </div>
        )
    }
}