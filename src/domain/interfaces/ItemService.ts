import { Item } from "../../reducers/ItemReducer";

export interface ItemService {
  getItemsToTakeByLocation(lat: number, lng: number): Promise<Item>;
}
