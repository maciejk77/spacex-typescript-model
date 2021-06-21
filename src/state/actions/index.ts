import { ActionTypes } from '../action-types/index';

export interface FetchRocketsAction {
  type: ActionTypes.FETCH_ROCKETS;
}

export interface FetchRocketsSuccessAction {
  type: ActionTypes.FETCH_ROCKETS_SUCCESS;
  payload: string[];
}

export interface FetchRocketsErrorAction {
  type: ActionTypes.FETCH_ROCKETS_ERROR;
  payload: string;
}

export type TActions =
  | FetchRocketsAction
  | FetchRocketsSuccessAction
  | FetchRocketsErrorAction;
