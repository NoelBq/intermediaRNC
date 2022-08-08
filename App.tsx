

import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation /Navigators';
import { Provider } from 'react-redux';
import { persistor, store } from './store/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation />
          </PersistGate>
      </Provider>
    </>
  );
}
