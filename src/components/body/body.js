import React , { useState, useEffect} from 'react';
import * as style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux'
import Card from '../card/card';
import Loading from '../loading/loading';
import IncreaseLimit from '../increaseList';
import  { STOP_LOADING } from './../../store/actions'

// const API_URL = 'https://api.jikan.moe/v3/search/anime?q=%3Cquery%3E&limit=16&page=1'

const BASE_URL = 'https://api.jikan.moe/v3/search/anime?q=<query>'

export default function Body(){

    const dispach = useDispatch()
    const [data,setData] = useState({ animeList: []})
    const page = useSelector( state => state.page );
    const isLoading = useSelector( state => state.isLoading )
    const limit = 16;

    useEffect(()=>{
        fetch(`${BASE_URL}&limit=${limit}&page=${page}`)
        .then ( res => res.json())
        .then ( resData => assignFetchedData(resData))
    },[page,isLoading])

    function assignFetchedData(resData){
        console.log(resData)
        dispach({ type: STOP_LOADING})
        console.log(isLoading,'isloading')
        var anime = [...data.animeList , ...resData.results];
        setData({animeList: anime})

    }

    return <div className={`${style.body}`}>
        {
            data.animeList.length > 0 &&
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
        { isLoading === false && <Loading /> }
        <IncreaseLimit />
    </div>
}