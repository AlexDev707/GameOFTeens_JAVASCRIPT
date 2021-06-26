import React, {Component} from 'react';
import { Checkbox } from 'antd'
import styles from './Questionnaire.module.css'

export default class Questionnaire extends Component {
    render() {

        const {
          questionsCollection,
          currentQuestionIndex
        } = this.props;

        const currentQuestion = questionsCollection[currentQuestionIndex]

        return (
            <div className={styles.container}>
                <div className={styles.container}>1/10</div>
                <div className={styles.question_container}>
                    <div className={styles.question_title}>{currentQuestion.title}</div>
                    <div>
                        {currentQuestion.variants.map((variant) => (
                            <div className={styles.variant_container}>
                                <Checkbox checked={variant.isChecked} />
                                <div>{variant.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
