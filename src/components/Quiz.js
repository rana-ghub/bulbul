import React from 'react';
import QuizData from './QuizData';
import '../assets/Quiz.css';


class Quiz extends React.Component{
    state = {
        questions:'',
        userAnswer:null,
        currentQuestion: 0,
        options:[],
        quizEnd: false,
        score: 0,
        disabled: true
    };

    loadQuiz = () =>{
        const {currentQuestion} = this.state;
        this.setState(()=>{
            return{
                questions: QuizData[currentQuestion].question,
                options: QuizData[currentQuestion].options,
                answers: QuizData[currentQuestion].answer
            }
        })
    }
    componentDidMount(){
        this.loadQuiz();
    }
    handleClick=() =>{
        if(this.state.userAnswer === this.state.answers){
            this.setState({
                score: this.state.score+1
            })
        }
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,

        })
        console.log(this.state.currentQuestion)

        
    }

    componentDidUpdate(prevProps, prevState){
        const {currentQuestion} = this.state;
        if(this.state.currentQuestion !== prevState.currentQuestion){
            this.setState(() =>{
                return{
                    disabled: true,
                    questions: QuizData[currentQuestion].question,
                    options: QuizData[currentQuestion].options,
                    answers: QuizData[currentQuestion].answer
                }
            })
        }
    }

    checkAnswer = answer =>{
        this.setState({
            userAnswer:answer,
            disabled: false
        })
    }

    finishHandler = () =>{
        if(this.state.currentQuestion === QuizData.length -1){
            this.setState({
                quizEnd: true,
                score: this.state.score +1
            })
        }
    }

    playAgain = () =>{
        window.location.reload(false);
    }


    render(){

        if(this.state.quizEnd){
            return(
                <div className="last">
                    <h3>Heya Beautiful!!! the score doesn't matter but you got <h2>{this.state.score} out of {QuizData.length}</h2></h3>
                    <p id="if">
                        If u liked the game please give a <strong>Pappi</strong> to the developer for <em>research purposes</em> 
                    </p>
                    <h4>Correct Answers --</h4>
                    <ul>
                        {QuizData.map((item, index) =>(
                            <li key={index} className="list">
                                {item.question} : {item.answer}
                            </li>
                        ))}
                    </ul>
                    <button className="playAgain" onClick={this.playAgain}>Again?</button>
                    <p id="footer">Jldi milo Pune me Mansayy :)</p>
                </div>
            )
        }



        return(
          <div className="container">
              <h1><span id="Mansayy">{`Atlas Quiz for Mansayy`}</span></h1>
              <div>
              <h2>{this.state.questions}</h2><span>{`${this.state.currentQuestion + 1} out of ${QuizData.length }`}</span>
              </div>
            
            <div>
            {this.state.options.map(option =>(
                <p key={option.id} className={`${this.state.userAnswer === option ? "touched":"option"}`} onClick={()=> this.checkAnswer(option)}>
                    {option}
                </p>
            ))}
            {this.state.currentQuestion < QuizData.length -1 &&
                <button disabled={this.state.disabled} onClick={this.handleClick} className="next">Next</button>
            }
            
            {this.state.currentQuestion === QuizData.length - 1 && 
                <button onClick = {this.finishHandler} className="finish">Finish</button>
            }
            </div>
          </div>
        );
    }
}
export default Quiz;