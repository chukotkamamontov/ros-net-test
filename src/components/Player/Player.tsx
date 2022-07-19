import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import AnaliticsList from "../AnaliticsList/AnaliticsList";
import { RootState } from "../../redux/reducers/reducers";
import { videoSourse } from "../../assets/sources";
import { getTimestampData } from "../../helpers/getTimestampData";
import style from "./Player.module.css"

const Player = () => {
    const { data } = useSelector((state: RootState) => state.player)
    const videoRef = useRef<HTMLVideoElement>(null);
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(videoRef.current) {
            videoRef.current.src = videoSourse
        }
    }, [])

    const createTimestampMark = (timestamp: number) => {
        const { duration, style } = getTimestampData(data, timestamp)
        const mark = document.createElement("div")
        mark.setAttribute("style", style); 
        if(ref.current){
           ref.current?.appendChild(mark)
        }
        setTimeout(() => {
            ref.current?.removeChild(mark)
        }, duration);
    }

    const changeCurrentTime = (timestamp: number) => {
        const ms = 1000;
        if(videoRef.current){
            videoRef.current.currentTime = timestamp / ms;
            videoRef.current.play()
        }
        createTimestampMark(timestamp)
    }

    return (
        <div ref={ref} className={style["player-wrapper"]}>
            <video ref={videoRef} className={style.player} controls muted/>
            <AnaliticsList changeCurrentTime={changeCurrentTime} />
            <div/>
        </div>
    )
}

export default Player;