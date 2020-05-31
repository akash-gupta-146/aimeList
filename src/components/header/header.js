import React from 'react';
import * as style from './style.module.scss';
import { useSelector } from 'react-redux'

export default function Header(){

    const body = useSelector( state => state.body )

    return <div className={`flex ${style.header} justify-center`}>
        <input type="search" className={style.searchBox} placeholder="Search anime" />
        <div className={style.btn}>Go</div>
    </div>
}