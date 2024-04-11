import {ThemeProvider} from "next-themes";
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from "@nextui-org/react";
import {Provider} from "react-redux";
import App from './App.tsx'
import './index.css'
import store, {persistor} from "./store/store.ts";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <App />
        </ThemeProvider>
      </NextUIProvider>
    </PersistGate>
  </Provider>
)
