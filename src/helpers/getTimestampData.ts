import { IAnaliticsItem } from "../types/player"

export const getTimestampData = (tymestamps: Array<IAnaliticsItem>, timestamp: number): {style: string, duration: number | undefined} => {
    let timestampData;
    if(tymestamps) {
        timestampData = tymestamps.find((item: any) => item.timestamp === timestamp)
    }
    return {
        style: `position:absolute;border:solid 3px green;width:${timestampData?.zone.width}px;height:${timestampData?.zone.height}px;top:${timestampData?.zone.top}px;left:${timestampData?.zone.left}px;`,
        duration: timestampData?.duration
    }
}