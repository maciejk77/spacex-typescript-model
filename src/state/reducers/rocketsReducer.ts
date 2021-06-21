import { ActionTypes } from '../action-types/index';
import { TActions } from '../actions/index';

interface IRocketsState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: IRocketsState, action: TActions): IRocketsState => {
  switch (action.type) {
    case ActionTypes.FETCH_ROCKETS:
      return { loading: true, error: null, data: [] };
    case ActionTypes.FETCH_ROCKETS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionTypes.FETCH_ROCKETS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
