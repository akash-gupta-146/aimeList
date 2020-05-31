import React from 'react'
import * as style from './style.module.scss'

export default function Card( props ){
    
    const  anime  = props.data;

    return <div className={style.card}  style={{backgroundImage: `url(${anime.image_url})`}}>
        <div className={style.name}>
            { anime.title }
        </div>
    </div>
}