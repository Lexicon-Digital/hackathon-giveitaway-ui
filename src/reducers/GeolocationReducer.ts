import * as React from "react";

export enum GeofenceActionType {
  LOAD = "LOAD",
  LOAD_SUCCESS = "LOAD_SUCCESS",
  LOAD_FAIL = "LOAD_FAIL",
}

export interface GeolocationState {
  currentLocation: Geolocation | undefined;
  
}

export interface GeolocationAction {
  type: GeofenceActionType;
  payload: {
    currentLocation: Geolocation | undefined;
  };
}

export interface Geolocation {
  latitude: number;
  longitude: number;
}

const initialState: GeolocationState = {
  currentLocation: undefined,
};

const geolocationReducer: React.Reducer<GeolocationState, GeolocationAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case GeofenceActionType.LOAD: {
      const newState = {
        ...state,
      };
      return newState;
    }
    case GeofenceActionType.LOAD_SUCCESS: {
      const newState = {
        ...state,
        currentLocation: action.payload.currentLocation
      };
      return newState;
    }
    default:
      throw new Error();
  }
};

export { geolocationReducer, initialState };