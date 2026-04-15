// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from "./components/login"
import SignIn from "./components/signIn"
import TodoApp from "./components/todoapp"
// import Protectedroute from './components/protectedroute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />}>Login</Route>
        <Route path="/signin" element={<SignIn />}>Sign In</Route>
        <Route path="/todoapp" element={<TodoApp />}>To Do App</Route>
      </Routes>
    </BrowserRouter>

  )
}