import React from 'react';
import * as style from './style.module.scss'

export default function Loading(){
    return <>
        <img src='/assets/loading.gif' alt="Loading..." className={style.loader} />
        <div className={style.loading}>Loading...</div>
    </>
}