import { ItemType } from "../types/player"

export const sortById = (array: [] | Array<ItemType>): [] | Array<ItemType> => {
    return array.sort((prev, next) => prev.timestamp - next.timestamp );
}