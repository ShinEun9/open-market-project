import { createContext, useReducer } from 'react';

export const UserContext = createContext(null);

const initialState = {
  user: null,
};

export const UserContextProvider = ({ children }) => {
  const authReducer = (state, action) => {
    const { id, user_type, token } = action.payload;
    const result = { id, user_type, token };
    switch (action.type) {
      case 'login':
        localStorage.setItem('user', JSON.stringify(result));
        return { user: result };
      case 'logout':
        return initialState;
      default:
        return initialState;
    }
  };

  const lsState = JSON.parse(localStorage.getItem('user'));
  const initial = !lsState ? initialState : { user: lsState };

  const [state, dispatch] = useReducer(authReducer, initial);
  console.log('state', state);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
