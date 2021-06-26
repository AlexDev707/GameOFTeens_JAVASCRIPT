import React, { Component } from 'react'
import html from '../images/html.jpg'
import css from '../images/css.jpg'

export default class ChoisePage extends Component {
    render() {
        return (
            <div>
                <img src={html} alt='Hello, I am Sasha'/>
                <img src={css} alt='Hello, I am not Sasha'/>
            </div>
        )
    }
}
