interface IRocketsState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// interface IAction {
//   type: string;
//   payload?: any;
// }

interface FetchRocketsAction {
  type: ActionTypes.FETCH_ROCKETS;
}

interface FetchRocketsSuccessAction {
  type: ActionTypes.FETCH_ROCKETS_SUCCESS;
  payload: string[];
}

interface FetchRocketsErrorAction {
  type: ActionTypes.FETCH_ROCKETS_ERROR;
  payload: string;
}

type TActions =
  | FetchRocketsAction
  | FetchRocketsSuccessAction
  | FetchRocketsErrorAction;

enum ActionTypes {
  FETCH_ROCKETS = 'fetch_rockets',
  FETCH_ROCKETS_SUCCESS = 'fetch_rockets_success',
  FETCH_ROCKETS_ERROR = 'fetch_rockets_error',
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
