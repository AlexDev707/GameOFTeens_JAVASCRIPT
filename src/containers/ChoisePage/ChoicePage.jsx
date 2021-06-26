import React, { Component } from 'react'
import html from '../../images/html.jpg'
import css from '../../images/css.jpg'

import styles from './ChoicePage.module.css'

export default class ChoicePage extends Component {
    render() {
        const { chooseCategory } = this.props;

        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Виберіть категорію для проходження тесту</h2>
                <div className={styles.images_container}>
                    <img
                        onClick={() => chooseCategory('html')}
                        className={styles.img}
                        src={html}
                        alt='Hello, I am Sasha'/>
                    <img
                        onClick={() => chooseCategory('css')}
                        className={styles.img}
                        src={css}
                        alt='Hello, I am not Sasha'
                    />
                </div>
            </div>
        )
    }
}
