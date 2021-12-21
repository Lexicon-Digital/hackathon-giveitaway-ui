import { useEffect } from "react";
import './ExploreContainer.css';
import MapContainer from './MapContainer';
import { GetItemsToTakeByLocationUseCase } from "../domain/useCases";
import {
  Item,
  ItemAction,
  ItemActionType,
} from "../reducers/ItemReducer";
import { ItemServiceImpl } from "../services";


interface ContainerProps {
  name: string;
}

/*
function dispatchItemAction(
  item: Item,
  dispatch: React.Dispatch<ItemAction>,
) {
  console.log("In dispatchItemAction");
  const itemAction: ItemAction = {
    type: ItemActionType.ITEM_SAVE_SUCCESSFUL,
    payload: {
      item,
      errorMessage: undefined,
    },
  };
  dispatch(itemAction);
}
*/

const initialiseTakeAwayItems = async (
  //itemDispatch: React.Dispatch<ItemAction>,
  getItemsToTakeByLocationUseCase: GetItemsToTakeByLocationUseCase,
) => {
  const lat = 0;
  const lng = 0;

  const items = await getItemsToTakeByLocationUseCase.invoke(lat, lng);
  console.log("item" + JSON.stringify(items));
  //dispatchItemAction(items, itemDispatch);
};

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  return (
    <div className="container">
        <MapContainer />
    </div>
  );
};

export default ExploreContainer;
