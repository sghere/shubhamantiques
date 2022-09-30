import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/HeroSection.css';
import '../styles/ShopSection.css';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
