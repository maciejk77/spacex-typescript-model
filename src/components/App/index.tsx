import { Provider } from 'react-redux';
import { store } from '../../state';
import RocketsList from '../RocketsList';

const App = () => {
  return (
    <Provider store={store}>
      <h1>Rockets</h1>
      <RocketsList />
    </Provider>
  );
};

export default App;
