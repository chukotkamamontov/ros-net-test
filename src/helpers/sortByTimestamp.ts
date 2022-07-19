import { IAnaliticsItem } from "../types/player"

export const sortByTimestamp = (array: [] | Array<IAnaliticsItem>): [] | Array<IAnaliticsItem> => {
    return array.sort((prev, next) => prev.timestamp - next.timestamp );
}
