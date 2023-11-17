import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import Modal from 'react-modal';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
Modal.setAppElement('#root');
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);