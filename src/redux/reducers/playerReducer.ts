import { PlayerActionsTypes, IPlayerState, FETCH_PLAYER_DATA, FETCH_PLAYER_DATA_ERROR, FETCH_PLAYER_DATA_SUCCESS } from "../../types/player"

const InitialPlayerState: IPlayerState = {
    data: [],
    error: false,
    loading: false
}

export function playerReducer(state = InitialPlayerState, action: PlayerActionsTypes): IPlayerState {
    switch(action.type){
        case FETCH_PLAYER_DATA:
            return {...state, loading: true}            
        case FETCH_PLAYER_DATA_SUCCESS:
            return {...state, data: action.payload, loading: false}
        case FETCH_PLAYER_DATA_ERROR:
            return { ...state, error: true, loading: false }
        default: 
            return state
    }
}

