import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import { Authenticator,ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Authenticator>
      {({ user }) => (
          <App loginId={user?.signInDetails?.loginId}/>
      )}
      </Authenticator>
    </ThemeProvider>
  </React.StrictMode>
);
