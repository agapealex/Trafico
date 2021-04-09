import React from 'react';
import './footer.css';
import group35 from '../../images/Group35.png';
import maskGroup from '../../images/MaskGroup.png';

export class Footer extends React.Component{
    render(){

        let sentence = 'We provide traffic management consultants so you get started quickly, contact us for a quote today!';

        return(
            <div className='footer-container'>
                <img src={group35} className='car'/>
                <div className='form-container'>
                    <div className='sentence'>
                        <p></p>
                    </div>
                    <div className='form-space'>
                        
                    </div>
                </div>
                <div className='blue-div'>
                    <img src={maskGroup} />
                </div>
            </div>
        )
    }
}