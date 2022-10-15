import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Home';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <Provider store={store}>
        <Home />
        <ToastContainer />
    </Provider>
  );
}

export default App;
