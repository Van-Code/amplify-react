import React from "react";
import ReactDOM from "react-dom/client";
import outputs from "../amplify_outputs.json";
import { Amplify } from "aws-amplify";
import { Authenticator,ThemeProvider } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import "./index.css";
import '@aws-amplify/ui-react/styles.css';


Amplify.configure(outputs);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Authenticator>
      {({ user }) => (
          <App authUser={user}/>
        )}
      </Authenticator>
    </ThemeProvider>
  </React.StrictMode>
);
