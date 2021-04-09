import React from 'react';
import './Question.css';

export class Question extends React.Component{

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

        return(
            <div className='question-container' style = {{height : this.props.heightDropdown}}>
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
            </div>
        )
    }
}