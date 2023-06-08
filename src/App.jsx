import React from 'react';
import Router from './routes/Router.jsx';
import { UserContextProvider } from './context/UserContext.js';

function App() {
  return (
    <>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </>
  );
}
export default App;
