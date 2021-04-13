import React from 'react';
import './FaqQuestions.css';
import Question from '../Question/Question';
import Radium, { StyleRoot } from 'radium';

class FaqQuestions extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            actualChildSelected : -1,
            anyDropdownOpened: false
          }
      
        this.changeStateParent = this.changeStateParent.bind(this);       
    }

    showQuestions(list){

        let questions;
        questions = list.map((element, index)=> {

            const evenIndexStyle = {
                '@media (min-width: 600px)': {
                    gridRow : `${index/2 + 1} / ${index/2 + 4}`,
                    gridColumn : '1/2'
                },
                '@media (max-width: 600px)': {
                    gridColumn : '1/1'
                }
              };

              const oddIndexStyle = {
                '@media (min-width: 600px)': {
                    gridRow : `${parseInt(index/2) + 1} / ${parseInt(index/2) + 4}`,
                    gridColumn : '2/2'
                },
                '@media (max-width: 600px)': {
                    gridColumn : '1/1'
                }
                };

            if(this.state.actualChildSelected === index){
                if(index % 2 === 0){
                    return  ( 
                        <StyleRoot style={evenIndexStyle} >             
                            <Question quest={element.question} answer={element.answer} index={index} heightDropdown={'15.6vw'} changeStateParent={this.changeStateParent}/>                    
                        </StyleRoot>   
                    )
                }
                else{
                    return  (
                        <StyleRoot style={oddIndexStyle} >             
                            <Question quest={element.question} answer={element.answer} index={index} heightDropdown={'15.6vw'} changeStateParent={this.changeStateParent}/>                    
                        </StyleRoot> 
                    )
                }
            }
            return  <StyleRoot>                
                        <Question quest={element.question} answer={element.answer} index={index} heightDropdown={'5.62vw'} changeStateParent={this.changeStateParent} anyDropdownOpened={this.state.anyDropdownOpened}/>                       
                    </StyleRoot>
        });
        return questions;
    }

    changeStateParent(index) {
        this.setState({
            actualChildSelected : index,
            anyDropdownOpened : !this.state.anyDropdownOpened
          });
    }

    render(){
        let moqQuestions = [
            {
                question : 'What is a professional traffic permit?',                
                answer : 'Traffic permits are a requirement for conducting professional traffic.'
            },
            {
                question : 'When is a professional traffic permit needed?',                
                answer : 'Answer'
            },
            {
                question : 'Where to look for a traffic permit?',                
                answer : 'Answer'
            },
            {
                question : 'Are there differences between a traffic permit and a professional traffic permit?',                
                answer : 'Answer'
            },
            {
                question : 'How to check the traffic condition?',                
                answer : 'Answer'
            },
            {
                question : 'How much does a commercial traffic permit cost for goods?',                
                answer : 'Answer'
            },
            {
                question : 'What are the requirements for a professional traffic permit?',                
                answer : 'Answer'
            },
            {
                question : 'How to plug in for the traffic permit test?',                
                answer : 'Answer'
            },
            {
                question : 'Are there professional traffic permit training courses at a distance?',                
                answer : 'Answer'
            },
            {
                question : 'How is the sample for a professional traffic permit booked?',                
                answer : 'Answer'
            },
        ];

        return(
            <div id='faq-questions'>
                {
                    this.showQuestions(moqQuestions)
                }
            </div>
        )
    }
}

export default Radium(FaqQuestions);