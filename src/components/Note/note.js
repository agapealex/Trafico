import React from 'react';
import './note.css';

export class Note extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='note-comp'>
                <div className='left-sign'/>
                <div className='txt'>
                    <p>{this.props.txt}</p>
                </div>
            </div>
        )
    }
}