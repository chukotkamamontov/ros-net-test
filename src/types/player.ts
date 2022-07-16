export interface PlayerStateType {
    data: [] | Array<ItemType>
    error: boolean,
    loading: boolean
}

export type ItemType = {
        id: number,
        timestamp: number,
        duration: number,
        zone: {
            height: number,
            left: number,
            top: number,
            width:number
        }
    }


export interface IAnaliticItem {
    analiticsData : {
        id: number,
        timestamp: number,
        duration: number,
        zone: {
            height: number,
            left: number,
            top: number,
            width:number
        }
    }
}

export const FETCH_PLAYER_DATA = "FETCH_PLAYER_DATA"
export const FETCH_PLAYER_DATA_SUCCESS = "FETCH_PLAYER_DATA_SUCCESS"
export const FETCH_PLAYER_DATA_ERROR = "FETCH_PLAYER_DATA_ERROR"
export const ADD_TIMESTAMP = "ADD_TIMESTAMP"

export type fetchPlayerDataActionType = {
    type: typeof FETCH_PLAYER_DATA
}
export type fetchPlayerDataSuccesActionType = {
    type: typeof FETCH_PLAYER_DATA_SUCCESS
    payload: any
}
export type fetchPlayerDataErrorActionType = {
    type: typeof FETCH_PLAYER_DATA_ERROR
}
export type addTimestampActionType = {
    type: typeof ADD_TIMESTAMP
    payload: any
}

export type PlayerActionsTypes = 
    fetchPlayerDataActionType | 
    fetchPlayerDataSuccesActionType | 
    fetchPlayerDataErrorActionType |
    addTimestampActionType