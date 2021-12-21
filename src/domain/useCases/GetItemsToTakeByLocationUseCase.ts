import { Item, ItemState } from "../../reducers/ItemReducer";
import { ItemService } from "../interfaces";

export class GetItemsToTakeByLocationUseCase {
  itemService: ItemService;

  constructor(itemService: ItemService) {
    this.itemService = itemService;
  }

  async invoke(lat: number, lng: number): Promise<Item> {
    return this.itemService.getItemsToTakeByLocation(lat, lng);
  }
}
