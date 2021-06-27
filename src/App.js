import React, {Component} from "react";
import {initialState} from "./initialState/initialState";
import { rightAnswers } from "./rightAnswers/rightAnswers";
import ChoicePage from './containers/ChoisePage/ChoicePage';
import Questionnaire from './containers/Questionnaire/Questionnaire'
import FinalPage from "./containers/FinalPage/FinalPage";
import styles from './App.module.css';

export default class App extends Component {
    state = initialState

    chooseCategory = (name) => {
        this.setState({
            currentCategory: name
        })
    }

    submitQuestion = () => {
        this.setState({
            currentQuestionIndex: this.state.currentQuestionIndex + 1
        })
    }

    submitQuestionnaire = () => {
        let rightAnswersAmount = 0;

        this.state.answerHistory.forEach((answer) => {
            if(rightAnswers[this.state.currentCategory].some((rightAnswer) => rightAnswer === answer)){
                rightAnswersAmount++
            }
        });

        this.setState({
            isFinalPage: true,
            finalScore: rightAnswersAmount
        })
    }

    addItemToAnswerHistory = (answer) => {
        this.setState({
            answerHistory: this.state.answerHistory.push(answer)
        })
    }

    setQuestionValue = (variantId, text) => {
        const {
            questionnaires,
            currentCategory,
            currentQuestionIndex
        } = this.state;

        this.addItemToAnswerHistory(text)

        let updatedCategory = [...questionnaires[currentCategory]]
        updatedCategory[currentQuestionIndex].variants = updatedCategory[currentQuestionIndex].variants.map((variant) => {

            if (variantId === variant.id) {
                return {...variant, isChecked: true}
            }

            return {...variant, isChecked: false}
        })

        this.setState({
            ...this.state,
            questionnaires: {
                ...questionnaires,
                [currentCategory]: updatedCategory
            }
        })
    }

    render() {
        return (
            <div className={styles.container}>
                {
                    this.state.isFinalPage
                        ? (
                            <FinalPage result={this.state.finalScore * 10} />
                        )
                        : (
                            <>
                                {this.state.currentCategory === ''
                                    ? <ChoicePage chooseCategory={this.chooseCategory}/>
                                    : <Questionnaire
                                        submitQuestionnaire={this.submitQuestionnaire}
                                        submitQuestion={this.submitQuestion}
                                        questionsCollection={this.state.questionnaires[this.state.currentCategory]}
                                        currentQuestionIndex={this.state.currentQuestionIndex}
                                        setQuestionValue={this.setQuestionValue}
                                    />
                                }
                            </>
                        )
                }
            </div>
        );
    }
}
