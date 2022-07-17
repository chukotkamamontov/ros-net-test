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

export const findByTimestamp = (array: any, timestamp: number): ITimestampMark => {
    // console.log(array)
    // console.log(timestamp)
    var timestampZone = array.find((item: any) => item.timestamp === timestamp)
    console.log(timestampZone);
    return {
        timestampData:{
            duration: timestampZone.duration,
            zone: {
                height: timestampZone.zone.height,
                width: timestampZone.zone.width,
                top: timestampZone.zone.top,
                left: timestampZone.zone.left,
            }
        }
            
    }
}