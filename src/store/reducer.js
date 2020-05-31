import { loadPage, STOP_LOADING,SEARCH_TEXT } from './actions'

const initialState = {
    page : 1,
    isLoading: 1,
    query: 'query',
    filter: false
}

export default function reducer (state = initialState, action){
    
    switch ( action.type ) {
        case loadPage:
                 return { ...state, page : state.page+1, isLoading : 1, filter:false }
        case STOP_LOADING:
                return { ...state, isLoading: 0}
        case SEARCH_TEXT:
                return { ...state,page:1, query: action.query, isLoading:1, filter:true }
        default: return state
    }
}