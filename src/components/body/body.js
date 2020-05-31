import React , { useState, useEffect} from 'react';
import * as style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux'
import Card from '../card/card';
import Loading from '../loading/loading';

// const API_URL = 'https://api.jikan.moe/v3/search/anime?q=%3Cquery%3E&limit=16&page=1'

const BASE_URL = 'https://api.jikan.moe/v3/search/anime?q=<query>'

export default function Body(){

    // const body = useSelector( state => state.body)
    const dispach = useDispatch()
    const [data,setData] = useState({ animeList: [], isLoading: true})
    const limit = 16

    useEffect(()=>{
        fetch(`${BASE_URL}&limit=${limit}`)
        .then ( res => res.json())
        .then ( data => setData({animeList: data.results, isLoading:0}))
    },[])

    function increase(){
        dispach({type: 'INCREASE_AGE' , by: 10})
    }

    return <div className={`${style.body}`}>
        {
            data.isLoading &&
            <Loading />
        }
        {
            !data.isLoading &&
            <div className={`flex ${style.cards}`}>
                {
                    data.animeList.map( ( anime,i ) => {
                        return <React.Fragment key = {anime.mal_id}>
                            <Card data={anime} />
                        </React.Fragment>
                    })
                }
            </div>
        }
        {/* Some content here age : { body.age } */}
        <button onClick={increase}>increase</button>
    </div>
}