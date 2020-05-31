import React from  'react';
import { useDispatch } from 'react-redux'
import { LOAD_PAGE } from '../../store/actions'

export default function IncreaseLimit( ){

    const dispatch =  useDispatch()
    
    function increase(){
        dispatch({type:LOAD_PAGE})
    }

    return <button className='btn' onClick={increase} style={{
        padding: '10px 20px',
        borderRadius: '5px',
        fontSize: '15px',
        fontWeight: 'bold',
        margin: '10px',
        cursor:'pointer',
    }}> Load More </button>
}