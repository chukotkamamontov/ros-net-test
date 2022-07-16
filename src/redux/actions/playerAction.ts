import axios from "axios"
import { Dispatch } from "react"
import { PlayerActionsTypes, ADD_TIMESTAMP, FETCH_PLAYER_DATA, FETCH_PLAYER_DATA_ERROR, FETCH_PLAYER_DATA_SUCCESS} from "../../types/player"

const video = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
const videoData = "https://www.mocky.io/v2/5e60c5f53300005fcc97bbdd"

export const fetchTimestamps = (): any => {
    return async (dispatch: Dispatch<PlayerActionsTypes>) => {
        try {
            dispatch({ type: FETCH_PLAYER_DATA })
            const response = await axios.get(videoData)
            // console.log(response.data)
            dispatch({ type: FETCH_PLAYER_DATA_SUCCESS, payload: response.data })
        }
        catch(e) {
            dispatch({ type: FETCH_PLAYER_DATA_ERROR })
        }
    }
}

export const addTimestamp = (data: any): any => {
    return (dispatch: Dispatch<PlayerActionsTypes>) => {
        dispatch({ type: ADD_TIMESTAMP, payload: data })
    }
}
