import axios from "axios"
import { Dispatch } from "react"
import { PlayerActionsTypes, FETCH_PLAYER_DATA, FETCH_PLAYER_DATA_ERROR, FETCH_PLAYER_DATA_SUCCESS} from "../../types/player"
import { videoData } from "../../assets/sources"

export const fetchTimestamps = (): any => {
    return async (dispatch: Dispatch<PlayerActionsTypes>) => {
        try {
            dispatch({ type: FETCH_PLAYER_DATA })
            const response = await axios.get(videoData)
            dispatch({ type: FETCH_PLAYER_DATA_SUCCESS, payload: response.data })
        }
        catch(e) {
            dispatch({ type: FETCH_PLAYER_DATA_ERROR })
        }
    }
}

