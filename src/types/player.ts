export interface IPlayerState {
    data: [] | Array<IAnaliticsItem>
    error: boolean,
    loading: boolean
}

export interface IAnaliticsItem {
    id: number,
    timestamp: number,
    duration: number
    zone : {
        height: number
        left: number
        top: number
        width:number
    }
}

export const FETCH_PLAYER_DATA = "FETCH_PLAYER_DATA"
export const FETCH_PLAYER_DATA_SUCCESS = "FETCH_PLAYER_DATA_SUCCESS"
export const FETCH_PLAYER_DATA_ERROR = "FETCH_PLAYER_DATA_ERROR"

export type fetchPlayerDataActionType = {
    type: typeof FETCH_PLAYER_DATA
}
export type fetchPlayerDataSuccesActionType = {
    type: typeof FETCH_PLAYER_DATA_SUCCESS
    payload: Array<IAnaliticsItem>
}
export type fetchPlayerDataErrorActionType = {
    type: typeof FETCH_PLAYER_DATA_ERROR
}

export type PlayerActionsTypes = 
    fetchPlayerDataActionType | 
    fetchPlayerDataSuccesActionType | 
    fetchPlayerDataErrorActionType 
