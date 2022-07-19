import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTimestamps } from "../../redux/actions/playerAction";
import { RootState } from "../../redux/reducers/reducers";
import { msConverter } from "../../helpers/msConverter";
import { sortByTimestamp } from "../../helpers/sortByTimestamp";
import style from "./AnaliticsList.module.css"

interface IAnaliticsListProps {
    changeCurrentTime: (timestamp: number) => void
}

const AnaliticsList: FC<IAnaliticsListProps> = ({changeCurrentTime}) => {
    const { data, error, loading } = useSelector((state: RootState) => state.player)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTimestamps())
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeCurrentTime(Number(e.target.value))
    }

    if(loading) return <div>loading...</div>
    if(error) return <div>Something went wrong</div>

    return (
        <select className={style.list} onChange={handleChange}>
            {sortByTimestamp(data).map(item => <option key={item.id} value={item.timestamp}>{msConverter(item.timestamp)}</option>)}
        </select>
    )
}

export default AnaliticsList

