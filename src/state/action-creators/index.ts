import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types/index';
import { BASE_URL } from '../../constants';
import { TActions } from '../actions/index';

export const fetchRockets = () => {
  return async (dispatch: Dispatch<TActions>) => {
    dispatch({
      type: ActionTypes.FETCH_ROCKETS,
    });

    try {
      const { data } = await axios.get(`${BASE_URL}/rockets`);
      const rockets = data.map((rocket: any) => rocket.description);

      dispatch({
        type: ActionTypes.FETCH_ROCKETS_SUCCESS,
        payload: rockets,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.FETCH_ROCKETS_ERROR,
        payload: err.message,
      });
    }
  };
};
