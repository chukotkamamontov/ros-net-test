import React, { useState, useEffect, useRef, FC, useCallback } from "react"
import { useDispatch } from "react-redux"
import AnaliticsList from "../AnaliticsList/AnaliticsList"
import styles from "./Player.module.css"
import  { addTimestamp, fetchTimestamps }  from "../../redux/actions/playerAction"
import { v4 as uuidv4 }  from "uuid"

const videoSourse = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

const Player: FC = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [timestamp, setTimestamp] = useState(0);
    const dispatch = useDispatch();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      dispatch(fetchTimestamps())
      if(videoRef.current) {
        videoRef.current.src = videoSourse
      }
    }, [])

    useEffect(() => {
    }, [currentTime])

    useEffect(() => {
      if(videoRef.current) {
        videoRef.current.currentTime = timestamp
        videoRef.current.play()
      }
    }, [timestamp])

    const play = () => {
      // console.log("play");
    }

    const pause = (e: React.MouseEvent<HTMLVideoElement>) => {
      // console.log("pause")
      console.log(e.nativeEvent.clientX )
      if(!videoRef.current?.paused){
        alert(`${e.nativeEvent.clientX}, ${e.nativeEvent.clientY}`)
        dispatch(addTimestamp({
          timestamp: currentTime * 1000,
          id: uuidv4()
        }))
      }
      // console.log(e.nativeEvent.)
      
      
    }

    const handleChangeTimestamp = useCallback((timestamp: number) => {
      // console.log("changeTimestamp", timestamp / 1000)
      setTimestamp(timestamp / 1000);
    }, [])

    const  handleTimeUpdate = () => {
      // console.log("update")
      if(videoRef.current) setCurrentTime(videoRef.current.currentTime)
    }
    
    return (
          <div className={styles["player-wrapper"]}>
              <video onTimeUpdate={handleTimeUpdate} onClick={pause} onPlay={play} ref={videoRef} className={styles.player} controls/>
              <AnaliticsList changeTimestamp={handleChangeTimestamp} />
          </div>
      )
}

export default Player;
