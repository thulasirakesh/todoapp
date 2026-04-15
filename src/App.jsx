// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from "./components/login"
import SignIn from "./components/signIn"
import ToDoApp from "./components/todoapp"
import Protectedroute from './components/protectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />}>Login</Route>
        <Route path="/signin" element={<SignIn />}>Sign In</Route>
        <Route path="/todoapp" element={<ToDoApp />}>To Do App</Route>
      </Routes>
    </BrowserRouter>

  )
}