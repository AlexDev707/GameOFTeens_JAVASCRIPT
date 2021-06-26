import React, {Component} from "react";
import {initialState} from "./initialState/initialState";
import ChoicePage from './containers/ChoisePage/ChoicePage';
import Questionnaire from './containers/Questionnaire/Questionnaire'
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

    redirectToFinalPage = () => {
        this.setState({
            isFinalPage: true
        })
    }

    setQuestionValue = (variantId) => {
        const {
            questionnaires,
            currentCategory,
            currentQuestionIndex
        } = this.state;


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
                        ? (<div>Final</div>)
                        : (
                            <>
                                {this.state.currentCategory === ''
                                    ? <ChoicePage chooseCategory={this.chooseCategory}/>
                                    : <Questionnaire
                                        redirectToFinalPage={this.redirectToFinalPage}
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
