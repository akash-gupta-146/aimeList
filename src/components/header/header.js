import React, { useState } from 'react';
import * as style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux'
import { SEARCH_TEXT } from './../../store/actions'

export default function Header(){

    // const query = useSelector( state => state.query )
    const dispatch = useDispatch()

    const [ searchText, setSearchText] = useState('')

    function setVal(e){
        setSearchText(e.target.value)
    }

    function search(){
        if(searchText)
        dispatch({ type: SEARCH_TEXT , query : searchText})
    }

    return <div className={`flex ${style.header} justify-center`}>
        <input type="search" className={style.searchBox} value={searchText} onChange={setVal} placeholder="Search anime" />
        <div className={style.btn} onClick={search}>Go</div>
    </div>
}