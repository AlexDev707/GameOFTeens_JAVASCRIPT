import React, {Component} from 'react';
import styles from './FinalPage.module.css'

export default class FinalPage extends Component {

    valuateResult = () => {
        if(this.props.result === 100){
            return "Ти король пограмування, мабуть, але це не точно"
        } else if(this.props.result >= 80 && this.props.result < 100) {
            return "Не погано можеш купити тортик "
        }

        return "Тобі варто спробувати себе в балеті"
    }


    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>{this.props.result}</div>
                <div>
                    {this.valuateResult()}
                </div>
            </div>
        );
    }
}

