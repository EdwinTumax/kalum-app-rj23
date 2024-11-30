import { useContext } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { AuthContext } from "./auth/context/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  )
}