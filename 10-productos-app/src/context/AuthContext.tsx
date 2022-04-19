import React, { createContext, useReducer } from 'react';
import { AxiosError } from 'axios';
import cafeApi from '../api/cafeApi';
import { Usuario, LoginResponse, LoginData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
  signIn: (loginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);
  const signIn = async ({ correo, password }: LoginData) => {
    try {
      const { data } = await cafeApi.post<LoginResponse>('/auth/login', {
        correo,
        password,
      });
      dispatch({
        type: 'singUp',
        payload: { token: data.token, user: data.usuario },
      });
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.response?.data.msg);
    }
  };
  const signUp = () => {};
  const logOut = () => {};
  const removeError = () => {};
  return (
    <AuthContext.Provider
      value={{ ...state, signUp, signIn, logOut, removeError }}>
      {children}
    </AuthContext.Provider>
  );
};
