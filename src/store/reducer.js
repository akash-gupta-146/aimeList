import { loadPage, STOP_LOADING } from './actions'

const initialState = {
    page : 1,
    isLoading: 1
}

export default function reducer (state = initialState, action){
    
    switch ( action.type ) {
        case loadPage:
                 return { page : state.page+1, isLoading : 1 }
        case STOP_LOADING:
                console.log('stop loading')
                return Object.assign({},state,{isLoading : 0})
        default: return state
    }
}