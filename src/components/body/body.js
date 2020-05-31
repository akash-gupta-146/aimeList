import React , { useState, useEffect} from 'react';
import * as style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux'
import Card from '../card/card';
import Loading from '../loading/loading';
import IncreaseLimit from '../increaseList';
import  { STOP_LOADING } from './../../store/actions'
import NotFound from '../not-found/notFound';

// const API_URL = 'https://api.jikan.moe/v3/search/anime?q=%3Cquery%3E&limit=16&page=1'

const BASE_URL = 'https://api.jikan.moe/v3/search/anime'

export default function Body(){

    const dispach = useDispatch()
    const [data,setData] = useState({ animeList: []})
    const page = useSelector( state => state.page );
    const filter = useSelector( state => state.filter );
    const query = useSelector ( state => state.query);
    const isLoading = useSelector ( state => state.isLoading)
    
    const [notFound, setNotFound] = useState(false)

    const limit = 16;

    useEffect(()=>{
        setNotFound(false)
        fetch(`${BASE_URL}?q=${query}&limit=${limit}&page=${page}`)
        .then ( res => res.json())
        .then ( resData => assignFetchedData(resData))
        .catch ( ()=> {console.log('not-found');setNotFound(true)} )
    },[page,query])

    function assignFetchedData(resData){
        var anime = [];
        
        if(!filter)
            anime = [...data.animeList , ...resData.results];
        if(filter)
            anime = resData.results

        setData({animeList: anime})
        dispach({ type: STOP_LOADING})
    }

    return <div className={`${style.body}`}>
        { isLoading === 1 && page === 1 && notFound === false && <Loading /> }

        {
            data.animeList.length > 0  && 
            <div className={`flex ${style.cards}`}>                
                {
                    data.animeList.map( ( anime,i ) =>  <React.Fragment key = {`anime${i}`}><Card data={anime} /></React.Fragment> )
                }
            </div>
        }

        { notFound === true && <NotFound /> }

        { isLoading === 1 && page !== 1 && notFound === false && <Loading /> }

        { isLoading === 0 &&  notFound === false && <IncreaseLimit /> }
    </div>
}