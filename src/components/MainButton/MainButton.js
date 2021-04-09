import React from 'react';
import './MainButton.css';
import union from '../../images/Union.png';

export class MainButton extends React.Component{

    constructor(props){
        super(props);
    }

    getSign(){
        if(this.props.showSign){
            return <img src={union} className="union-f"/>;
        }
    }

    render(){
        return(
            <button className='main-button' style={this.props.style}>
                {this.props.nameBtn}
                {
                    this.getSign()
                }
            </button>
        )
    }
}