import React, { useEffect } from "react"
import { createPortal } from "react-dom";
const clickMarkRootElement = document.querySelector("#click-mark");

interface IClickMarkProps {
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

const ClickMark = (props: IClickMarkProps) => {
    // const {analiticsData: { duration, zone: { left, top, width, height }}} = props;

    // const divStyle: IElement = {left: left, top: top, width: width, height: height, border: "2px solid green" };
    const element = document.createElement("div")

    // element.classList.add = divStyle

    clickMarkRootElement?.appendChild(element)

    useEffect(() => {
        if(clickMarkRootElement) clickMarkRootElement.appendChild(element);
        return () => {
            if(clickMarkRootElement) clickMarkRootElement.removeChild(element)
        }
    })
    return createPortal(null, element)
}
export default ClickMark