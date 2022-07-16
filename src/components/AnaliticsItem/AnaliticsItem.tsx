import { FC } from "react"
import { msConverter } from "../../helpers/ms-converter";
import { IAnaliticItem } from "../../types/player";

const AnaliticsItem: FC<IAnaliticItem> = (data) => {
    const { analiticsData : { duration, id, timestamp, zone }} = data

    return <option>{msConverter(timestamp)}</option>
}

export default AnaliticsItem