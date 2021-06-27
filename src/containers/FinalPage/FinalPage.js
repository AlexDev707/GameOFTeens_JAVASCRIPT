import React, {Component} from 'react';
import ballet from '../../images/ballet.jpeg';
import king from '../../images/king.jpeg';
import cake from '../../images/cake.jpeg';
import styles from './FinalPage.module.css'

export default class FinalPage extends Component {

    valuateResult = () => {
        if(this.props.result === 100){
            return (
                <>
                    <div className={styles.text}>
                        Ти король пограмування, мабуть, але це не точно
                    </div>
                    <img src={king} className={styles.img} alt='king'/>
                </>
            )
        } else if(this.props.result >= 80 && this.props.result < 100) {

            return (
                <>
                    <div className={styles.text}>
                        Не погано можеш купити тортик
                    </div>
                    <img src={cake} className={styles.img} alt='king'/>
                </>
            )
        }

        return (
            <>
                <div className={styles.text}>
                    Тобі варто спробувати себе в балеті
                </div>
                <img src={ballet} className={styles.img} alt='king'/>
            </>
        )

    }


    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>Результат: {this.props.result}%</div>
                    {this.valuateResult()}
            </div>
        );
    }
}

