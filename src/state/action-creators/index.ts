import axios from 'axios';
import { ActionTypes } from '../action-types/index';
import { BASE_URL } from '../../components/constants';

export const fetchRockets = () => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.FETCH_ROCKETS,
    });

    try {
      const { data } = await axios.get(`${BASE_URL}/rockets`);
      const rockets = data.map((rocket: any) => rocket.name);

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
