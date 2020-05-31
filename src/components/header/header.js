import React, { useState } from 'react';
import * as style from './style.module.scss';
import { useDispatch } from 'react-redux'
import { SEARCH_TEXT } from './../../store/actions'

export default function Header(){

    const dispatch = useDispatch()

    const [ searchText, setSearchText] = useState('')

    function setVal(e){
        setSearchText(e.target.value)
    }

    function search(){
        if(searchText)
        dispatch({ type: SEARCH_TEXT , query : searchText})
    }

    function checkKey(e){
        if(e.keyCode === 13)
            search();
    }

    return <div className={`flex ${style.header} justify-center`}>
        <input type="search" className={style.searchBox} value={searchText} onChange={setVal} onKeyDown={checkKey} placeholder="Search Anime" />
        <div className={style.btn} onClick={search}>Go</div>
    </div>
}