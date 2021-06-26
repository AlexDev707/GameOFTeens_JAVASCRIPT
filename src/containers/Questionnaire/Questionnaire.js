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
          redirectToFinalPage
        } = this.props;

        const currentQuestion = questionsCollection[currentQuestionIndex]

        const isButtonDisable = currentQuestion.variants.every((variant) => !variant.isChecked)

        return (
            <div className={styles.container}>
                <div className={styles.container}>1/10</div>
                <div className={styles.question_container}>
                    <div className={styles.question_title}>{currentQuestion.title}</div>
                    <div>
                        {currentQuestion.variants.map((variant) => (
                            <div
                                key={variant.text}
                                className={styles.variant_container}
                            >
                                <Checkbox checked={variant.isChecked} onClick={() => setQuestionValue(variant.id)} />
                                <div>{variant.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <Button
                    type="primary"
                    disabled={isButtonDisable}
                    onClick={
                        questionsCollection.length - 1 === currentQuestionIndex
                         ? redirectToFinalPage
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
        );
    }
}
