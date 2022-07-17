import React,{ FC } from "react"
import { useSelector } from "react-redux"
import { sortById } from "../../helpers/array-sort";
import { msConverter } from "../../helpers/ms-converter";
import { RootState } from "../../redux/reducers/reducers"
import AnaliticsItem from "../AnaliticsItem/AnaliticsItem";
import TimestampMark from "../TimestampMark/TimestampMark";
import style from "./AnaliticsList.module.css"
 
type AnaliticsListPropsType = {
    changeTimestamp: (timestamp: number) => void
}

const AnaliticsList: FC<AnaliticsListPropsType> = ({changeTimestamp}) => {
    const { data, error, loading } = useSelector((state: RootState) => state.player)
    
    const analiticsData = sortById(data);
    
    if(loading) return <div>loading...</div>
    if(error) return <div>Something went wrong</div>

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeTimestamp(Number(e.target.value));
    }

    return (
        <div className={style["analitics-list"]}>
            <span>Timestamps: </span>
            <select onChange={handleSelectChange}>
                {analiticsData.map(item => <option key={item.id} value={item.timestamp}>{msConverter(item.timestamp)}</option>)}
            </select>
        </div>
    )
}

export default React.memo(AnaliticsList)