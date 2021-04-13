import React from 'react';
import './Question.css';
import Radium, { StyleRoot } from 'radium';

class Question extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isOpen : false
          }
        
        this.showAnswer = this.showAnswer.bind(this);  
    }

    showAnswer() {
        if(this.state.isOpen || (this.state.isOpen === false && this.props.anyDropdownOpened === false) ){
  
            if(!this.state.isOpen){
                this.props.changeStateParent(this.props.index);
            }
            else{
                this.props.changeStateParent(-1);
            }
            
            this.setState({
                isOpen : !this.state.isOpen
              });
        }
    }

    getSign(){
        if(!this.state.isOpen){
            return <div className='plus-sign'>
                        <div className='minus-sign'></div>
                        <div className='vertical-sign'></div>
                    </div>;
        }
        else{
            return <div className='minus-sign'></div>;
        }
    }

    render(){
        let answer;
        if(this.state.isOpen){
            answer = <div className='answ'>
                        {this.props.answer}
                    </div>
        }

        const style = {
            '@media (min-width: 600px)': {
                height: this.props.heightDropdown
            },
            '@media (max-width: 600px)': {
                height: `calc(${this.props.heightDropdown}*2)`
            }
          };

        return(       
            <StyleRoot id='question-container' style = {style}>
                <div className='question-dropdown'>
                    <div className='question'>
                        <div className='text-question-o'>
                            {this.props.quest}
                        </div>
                    </div>
                    <div className='sign-container' onClick={this.showAnswer }>
                        {this.getSign()}
                    </div>
                </div>
                {answer}
            </StyleRoot>

        )
    }
}

export default Radium(Question);