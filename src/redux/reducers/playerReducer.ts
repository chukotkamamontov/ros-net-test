import { PlayerActionsTypes, PlayerStateType, ADD_TIMESTAMP, FETCH_PLAYER_DATA, FETCH_PLAYER_DATA_ERROR, FETCH_PLAYER_DATA_SUCCESS } from "../../types/player"

const InitialPlayerState: PlayerStateType = {
    data: [],
    error: false,
    loading: false
}

export function playerReducer(state = InitialPlayerState, action: PlayerActionsTypes): PlayerStateType {
    switch(action.type){
        case FETCH_PLAYER_DATA:
            return {...state, loading: true}            
        case FETCH_PLAYER_DATA_SUCCESS:
            return {...state, data: action.payload, loading: false}
        case FETCH_PLAYER_DATA_ERROR:
            return { ...state, error: true, loading: false }
        case ADD_TIMESTAMP:
            return { ...state, data: [...state.data, action.payload] }
        default: 
            return state
    }
}

