import React, { useState, useEffect, useRef, FC, useCallback } from "react"
import { useDispatch } from "react-redux"
import AnaliticsList from "../AnaliticsList/AnaliticsList"
import TimestampMark from "../TimestampMark/TimestampMark"
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

    const handlePlay = () => {
      // console.log("play");
    }

    const handleClick = (e: React.MouseEvent<HTMLVideoElement>) => {
      // console.log("pause")
      e.stopPropagation()
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
      console.log("changeTimestamp", timestamp / 1000)

      setTimestamp(timestamp / 1000);
    }, [])

    const  handleTimeUpdate = () => {
      // console.log("update")
      if(videoRef.current) setCurrentTime(videoRef.current.currentTime)
    }

    // const HandlePause = (e: React.MouseEvent<HTMLVideoElement>) => {
    //   console.log(e)
    //   console.log("pause")
    // }

    const timestampData = {
        duration: 123,
        zone: {
            height: 50,
            left: 50,
            top: 50,
            width :50
        }
    }
    
    
    return (
          <div className={styles["player-wrapper"]}>
              <video onTimeUpdate={handleTimeUpdate} onClick={handleClick} onPlay={handlePlay} ref={videoRef} className={styles.player} controls/>
              <AnaliticsList changeTimestamp={handleChangeTimestamp} />
              {/* <TimestampMark data={props} /> */}
              <TimestampMark timestampData={timestampData} />
          </div>
      )
}

export default Player;
