import { store } from './Slices/redux';
import Router from './components/Router';
import './styles/main.css';

// Redux
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
