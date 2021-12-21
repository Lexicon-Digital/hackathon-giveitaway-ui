import * as React from "react";

export enum ItemActionType {
  ITEM_SAVE = "ITEM_SAVE",
  ITEM_SAVE_SUCCESSFUL = "ITEM_SAVE_SUCCESSFUL",
  ITEM_SAVE_FAILED = "ITEM_SAVE_FAILED",
}

export interface ItemState {
  item: Item | undefined;
  errorMessage: string | undefined;
}

export interface ItemAction {
  type: ItemActionType;
  payload: {
    item: Item | undefined;
    errorMessage: string | undefined;
  };
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Item {
  title: string;
  description: string;
  imageUrl: string;
  listedTime: string;
  location: Coordinates;
}

const initialState: ItemState = {
  item: undefined,
  errorMessage: undefined,
};

const itemReducer: React.Reducer<ItemState, ItemAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ItemActionType.ITEM_SAVE: {
      const newState = {
        ...state,
      };
      return newState;
    }
    case ItemActionType.ITEM_SAVE_SUCCESSFUL: {
      const newState: ItemState = {
        ...state,
        item: action.payload.item,
      };
      return newState;
    }
    case ItemActionType.ITEM_SAVE_FAILED: {
      const newState: ItemState = {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
      return newState;
    }
    default:
      throw new Error();
  }
};

export { itemReducer, initialState };
