import React from 'react';
import './TextComp.css';

export class TextComp extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='text-comp'>
                <p className='title'>{this.props.title}</p>
                <p className='msg' >{this.props.msg}</p>
            </div>
        )
    }
}