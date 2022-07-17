import React, { useEffect, FC } from "react"
import { createPortal } from "react-dom";

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

const modalRootElement = document.getElementById("timestamp-mark") as Element

const TimestampMark: FC<ITimestampMark> = ({timestampData}) => {
    const {duration, zone: {height, left, top, width}} = timestampData
    const styles: { [key: string]: React.CSSProperties } = {
        container: {
            position: "absolute",
            width: width,
            height: height,
            left: left,
            top: top, 
            border: "3px solid green",
            // transition: `all ${300}ms`,
            // transform: "rotate(180deg)"
        },
    };

    const element = document.createElement("div")

    useEffect(() => {
        if(modalRootElement) modalRootElement.appendChild(element);
        return () => {
            if(modalRootElement) modalRootElement.removeChild(element)
        }
    })

    return createPortal(<div style={styles.container}></div>, modalRootElement)
}
export default TimestampMark