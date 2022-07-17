import React, { useState, useEffect, useRef, FC, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import AnaliticsList from "../AnaliticsList/AnaliticsList"
import TimestampMark from "../TimestampMark/TimestampMark"
import styles from "./Player.module.css"
import  { addTimestamp, fetchTimestamps }  from "../../redux/actions/playerAction"
import { v4 as uuidv4 }  from "uuid"
import { findByTimestamp } from "../../helpers/find-by-timestamp"
import { RootState } from "../../redux/reducers/reducers"

interface ITimestampMark {
    timestampData:{
        duration: number,
        zone: {
            height: number,
            left: number,
            top: number,
            width:number
        }
    }
}

const videoSourse = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

const Player: FC = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [timestamp, setTimestamp] = useState(0);
    const { data } = useSelector((state: RootState) => state.player)
    const dispatch = useDispatch();
    const videoRef = useRef<HTMLVideoElement>(null); 
    const [timeStampMarks, setTimestampMarks] = useState<Array<ITimestampMark> | []>([])

    // первичная отрисовка с запросом на сервер для получения ресурса
    useEffect(() => {
      dispatch(fetchTimestamps())
      if(videoRef.current) {
        videoRef.current.src = videoSourse
      }
    }, [])

    // для изменения текощего воспроизведения видео
    useEffect(() => {
    }, [currentTime])

    // обновление видео, если произошло изменение timestamp из select
    useEffect(() => {
      if(videoRef.current) {
        videoRef.current.currentTime = timestamp
        videoRef.current.play()
      }
    }, [timestamp])

    // функция, что будет происходить после onPlay
    const handlePlay = () => {
      // console.log("play");
    }

    // обработка клика при паузе (добавление новой timestamp)
    const handleClick = (e: React.MouseEvent<HTMLVideoElement>) => {
      if(!videoRef.current?.paused){
        dispatch(addTimestamp({
          timestamp: Math.trunc(currentTime * 1000),
          id: uuidv4(),
          duration: 100,
          zone: {
            width: 50,
            height: 50,
            left: e.nativeEvent.clientX,
            top: e.nativeEvent.clientY,
          }
        }))
      }      
    }

    // тригер select:
    // 1 изменение текущего место воспроизведения setTimestamp(timestamp / 1000);
    const handleChangeTimestamp = useCallback((timestamp: number) => {
      console.log("changeTimestamp", timestamp)
      setTimestamp(timestamp / 1000);
      // 2 ищем нужную timestamp в redux и добавляем 
      // в массив timeStampMarks для отрисовки
      const mark = findByTimestamp(data, timestamp);
      setTimestampMarks((elems) => [...elems, mark])
    }, [data])

    // обработка текущего места воспроизведения (контролируемый компонент)
    const  handleTimeUpdate = () => {
      if(videoRef.current) setCurrentTime(videoRef.current.currentTime)
    }

    const timestampData = {
        duration: 123,
        zone: {
            height: 50,
            left: 50,
            top: 50,
            width :50
        }
    }

    const HandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const element = <TimestampMark timestampData={timestampData} />
      // setTimestampMarks(<TimestampMark timestampData={timestampData} />)
      // setTest(test => [...test, 1])
    }

    
    
    return (
          <div className={styles["player-wrapper"]}>
              <video onTimeUpdate={handleTimeUpdate} onClick={handleClick} onPlay={handlePlay} ref={videoRef} className={styles.player} controls muted/>
              <AnaliticsList changeTimestamp={handleChangeTimestamp} />
              {/* <TimestampMark data={props} /> */}
              <TimestampMark timestampData={timestampData} />
              <ul>
                {
                  timeStampMarks && timeStampMarks.map(item => {
                    return <TimestampMark timestampData={item.timestampData} />
                  })
                }
              </ul>
          </div>
      )
}

export default Player;
