interface IRocketsState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: IRocketsState, { type, payload }: any) => {
  switch (type) {
    case 'fetch_rockets':
      return { loading: true, error: null, data: [] };
    case 'fetch_rockets_success':
      return { loading: false, error: null, data: payload };
    case 'fetch_rockets_error':
      return { loading: false, error: payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
