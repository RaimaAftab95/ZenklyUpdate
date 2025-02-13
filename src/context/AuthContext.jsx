/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useReducer } from 'react';
import { jwtDecode } from 'jwt-decode';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload.user,
        token: action.payload.token
      };
    case 'LOGOUT':
      return {
        user: null,
        token: null
      };
    default:
      return state;
  }
}

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    token: null
  });

  useEffect(function () {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (user && token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        dispatch({ type: 'LOGOUT' });
      }

      dispatch({
        type: 'LOGIN',
        payload: { user, token }
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
// Prop validation for children
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired // Ensures children is a valid React node
};
