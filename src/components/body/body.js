import React from 'react';
import * as style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux'
import Card from '../card/card';

export default function Body(){

    const body = useSelector( state => state.body)
    const dispach = useDispatch()

    function increase(){
        dispach({type: 'INCREASE_AGE' , by: 10})
    }
    return <div className={`${style.body}`}>
        <div className={`flex ${style.cards}`}>
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        Some content here age : { body.age }

        <br/>
        <button onClick={increase}>increase</button>
    </div>
}