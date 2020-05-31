import React from  'react';
import { useSelector , useDispatch } from 'react-redux'
import { LOAD_PAGE } from '../../store/actions'

export default function IncreaseLimit( ){

    const  page  = useSelector( state => state.page)
    const dispatch =  useDispatch()
    
    function increase(){
        dispatch({type:LOAD_PAGE})
    }

    return <button onClick={increase}> Load More </button>
}