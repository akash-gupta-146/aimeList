const initialState = {
    body : {
        age : 0
    }
}

export default function reducer (state = initialState, action){
    
    switch ( action.type ) {
        case 'INCREASE_AGE':
            console.log('akash')
                 return { body : {age : state.body.age+action.by} }
        default: return state
    }
}