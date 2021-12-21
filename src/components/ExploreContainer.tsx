import { useEffect } from "react";
import './ExploreContainer.css';
import MapComponent from './MapComponent';
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

  const itemService = new ItemServiceImpl();
  const getItemsToTakeByLocationUseCase = new GetItemsToTakeByLocationUseCase(
      itemService
    );

  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  useEffect(() => {
      console.log("In ExploreContainer.useEffect");

      initialiseTakeAwayItems(getItemsToTakeByLocationUseCase);
    }, []);

  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        <MapComponent center={center} zoom={zoom} />
    </div>
  );
};

export default ExploreContainer;
