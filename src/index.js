import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./customCSS/custom.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// tanstack queryClient
const queryClient = new QueryClient();


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <Provider store={store}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </Provider>
);
