import React from  'react';
import { useSelector , useDispatch } from 'react-redux'
import { loadPage } from '../../store/actions'

export default function IncreaseLimit( ){

    const  page  = useSelector( state => state.page)
    const dispatch =  useDispatch()
    
    function increase(){
        dispatch({type:loadPage})
    }

    return <button onClick={increase}> Load More </button>
}