import React, {Component} from 'react';
import { Checkbox, Button } from 'antd'
import styles from './Questionnaire.module.css'

export default class Questionnaire extends Component {
    render() {

        const {
          submitQuestion,
          questionsCollection,
          currentQuestionIndex,
          setQuestionValue,
          submitQuestionnaire
        } = this.props;

        const currentQuestion = questionsCollection[currentQuestionIndex]

        const isButtonDisable = currentQuestion.variants.every((variant) => !variant.isChecked)

        return (
            <div className={styles.container}>
                <div className={styles.container}>{currentQuestionIndex + 1} / {questionsCollection.length}</div>
                <div className={styles.question_container}>
                    <div className={styles.question_wrapper}>
                        <div className={styles.question_title}>{currentQuestion.title}</div>
                        <div>
                            {currentQuestion.variants.map((variant) => (
                                <div
                                    key={variant.text}
                                    className={styles.variant_container}
                                >
                                    <Checkbox
                                        checked={variant.isChecked}
                                        onClick={() => setQuestionValue(variant.id, variant.text)}
                                    />
                                    <div className={styles.text}>{variant.text}</div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.button_container}>
                            <Button
                                type="primary"
                                disabled={isButtonDisable}
                                onClick={
                                    questionsCollection.length - 1 === currentQuestionIndex
                                        ? submitQuestionnaire
                                        : submitQuestion
                                }
                            >
                                {
                                    questionsCollection.length - 1 === currentQuestionIndex
                                        ? "Завершити"
                                        : "Наступне"
                                }
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
