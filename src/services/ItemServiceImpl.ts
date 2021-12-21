import { Item } from "../reducers/ItemReducer";
import { ItemService } from "../domain/interfaces";

export class ItemServiceImpl implements ItemService {

  async getItemsToTakeByLocation(lat: number, lng: number): Promise<Item> {
    return fetch(`https://00mz8r2bn9.execute-api.ap-southeast-2.amazonaws.com/prod/api/take`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "mode":"no-cors",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        data.length > 0 ? data[0] : null,
      );
  }
}
